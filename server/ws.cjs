// WebSocket 实时同步：按视频房间广播弹幕与评论
const db = require('./db.cjs')

const rooms = new Map() // videoId -> Set<client>

function joinRoom(client, videoId) {
  client.videoId = videoId
  if (!rooms.has(videoId)) rooms.set(videoId, new Set())
  rooms.get(videoId).add(client)
}

function leaveRoom(client) {
  if (client.videoId && rooms.has(client.videoId)) {
    rooms.get(client.videoId).delete(client)
    if (rooms.get(client.videoId).size === 0) rooms.delete(client.videoId)
  }
  client.videoId = null
}

// payload 广播到房间；excludeToken 用于跳过触发者自己（前端已本地回显）
function broadcast(videoId, payload, excludeToken) {
  const set = rooms.get(videoId)
  if (!set) return
  const data = JSON.stringify(payload)
  for (const client of set) {
    if (client.readyState === 1 && client.token !== excludeToken) {
      client.send(data)
    }
  }
}

function onlineCount(videoId) {
  return rooms.get(videoId)?.size || 0
}

function attach(wss) {
  wss.on('connection', (ws, req) => {
    try {
      const url = new URL(req.url, 'http://localhost')
      ws.token = url.searchParams.get('token') || ''
      const user = db.userByToken(ws.token)
      ws.userId = user ? user.id : null
    } catch {
      ws.token = ''
      ws.userId = null
    }
    ws.isAlive = true
    ws.on('pong', () => { ws.isAlive = true })
    ws.on('message', (raw) => {
      try {
        const msg = JSON.parse(raw.toString())
        if (msg.type === 'join' && msg.videoId) {
          leaveRoom(ws)
          joinRoom(ws, String(msg.videoId))
          ws.send(JSON.stringify({ type: 'joined', videoId: ws.videoId, online: onlineCount(ws.videoId) }))
        } else if (msg.type === 'ping') {
          ws.send(JSON.stringify({ type: 'pong' }))
        }
      } catch { /* 忽略非法消息 */ }
    })
    ws.on('close', () => leaveRoom(ws))
    ws.on('error', () => leaveRoom(ws))
  })
  // 心跳清理死连接
  const timer = setInterval(() => {
    for (const set of rooms.values()) {
      for (const client of set) {
        if (!client.isAlive) { client.terminate(); continue }
        client.isAlive = false
        try { client.ping() } catch { /* ignore */ }
      }
    }
  }, 30000)
  wss.on('close', () => clearInterval(timer))
}

module.exports = { attach, broadcast, onlineCount }
