// PtCon 视频社区后端（Express + multer + ws）
const express = require('express')
const http = require('node:http')
const path = require('node:path')
const { WebSocket } = require('ws')
const multer = require('multer')
const db = require('./db.cjs')
const wsHub = require('./ws.cjs')

const PORT = Number(process.env.PORT) || 44789

db.init()

const app = express()
app.use(express.json({ limit: '1mb' }))

// Electron file:// 源为 null，放开 CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})

// 静态媒体：上传目录 + 种子目录（seed 优先匹配更具体的路径）
app.use('/media/seed', express.static(path.join(db.SEED_DIR), { maxAge: '1d' }))
app.use('/media', express.static(db.MEDIA, { maxAge: '1d' }))

// 上传配置
const storage = multer.diskStorage({
  destination(req, file, cb) {
    if (file.fieldname === 'video') cb(null, path.join(db.MEDIA, 'videos'))
    else if (file.fieldname === 'cover') cb(null, path.join(db.MEDIA, 'covers'))
    else cb(null, path.join(db.MEDIA, 'avatars'))
  },
  filename(req, file, cb) {
    cb(null, 'tmp_' + db.uid('f') + path.extname(file.originalname || ''))
  }
})
const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 * 1024 }
})

const API = express.Router()

// ---------- 认证 ----------
function authOptional(req, _res, next) {
  const h = req.headers.authorization || ''
  const token = h.startsWith('Bearer ') ? h.slice(7) : ''
  req.token = token
  req.user = db.userByToken(token)
  next()
}

function authRequired(req, res, next) {
  authOptional(req, res, () => {
    if (!req.user) return res.status(401).json({ error: '请先登录' })
    next()
  })
}

function requireAdmin(req, res, next) {
  authOptional(req, res, () => {
    if (!req.user) return res.status(401).json({ error: '请先登录' })
    if (req.user.role !== 'admin') return res.status(403).json({ error: '需要管理员权限' })
    next()
  })
}

API.use(authOptional)

function abs(req, p) {
  if (!p || /^(https?:|data:|ptcon:)/.test(p)) return p
  const host = req.headers.host || 'localhost:' + PORT
  return 'http://' + host + p
}

function absUser(req, u) {
  if (!u) return u
  return { ...u, avatar: abs(req, u.avatar) }
}

function absVideo(req, v) {
  if (!v) return v
  return { ...v, cover: abs(req, v.cover), src: abs(req, v.src), userAvatar: abs(req, v.userAvatar) }
}

API.get('/health', (_req, res) => res.json({ ok: true, name: 'PtCon Server', time: Date.now() }))

API.post('/auth/register', (req, res) => {
  try {
    const { user, token } = db.register(req.body.name, req.body.password)
    res.json({ user: absUser(req, user), token })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.post('/auth/login', (req, res) => {
  try {
    const { user, token } = db.login(req.body.name, req.body.password)
    res.json({ user: absUser(req, user), token })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.post('/auth/logout', (req, res) => {
  db.destroySession(req.token)
  res.json({ ok: true })
})

API.get('/auth/current', (req, res) => {
  res.json(req.user ? absUser(req, db.publicUser(req.user)) : null)
})

// ---------- 视频 ----------
API.get('/videos', (req, res) => {
  const list = db.listVideos(req.query)
  res.json(list.map((v) => absVideo(req, v)))
})

API.get('/videos/:id', (req, res) => {
  try {
    res.json(absVideo(req, db.getVideo(req.params.id, { viewer: req.user })))
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
})

API.post('/videos', authRequired, upload.fields([{ name: 'video', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), (req, res) => {
  try {
    const vf = req.files?.video?.[0]
    const cf = req.files?.cover?.[0]
    const video = db.createVideo({
      user: req.user,
      title: req.body.title,
      desc: req.body.desc,
      category: req.body.category,
      duration: req.body.duration,
      videoPath: vf ? vf.path : '',
      coverPath: cf ? cf.path : ''
    })
    res.json(absVideo(req, video))
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.get('/users/:id/videos', (req, res) => {
  res.json(db.listUserVideos(req.params.id, req.user).map((v) => absVideo(req, v)))
})

// ---------- 管理后台 ----------
API.get('/admin/videos', requireAdmin, (req, res) => {
  res.json(db.listAllVideos().map((v) => absVideo(req, v)))
})

API.post('/admin/videos/:id/review', requireAdmin, (req, res) => {
  try {
    res.json(absVideo(req, db.reviewVideo(req.params.id, !!req.body.approve)))
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.delete('/admin/videos/:id', requireAdmin, (req, res) => {
  try {
    db.adminDeleteVideo(req.params.id)
    res.json({ ok: true })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.get('/admin/comments', requireAdmin, (req, res) => {
  res.json(db.listAllComments().map((c) => ({ ...c, userAvatar: abs(req, c.userAvatar) })))
})

API.delete('/admin/comments/:id', requireAdmin, (req, res) => {
  try {
    db.adminDeleteComment(req.params.id)
    res.json({ ok: true })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.get('/admin/danmaku', requireAdmin, (req, res) => {
  res.json(db.listAllDanmaku())
})

API.delete('/admin/danmaku/:id', requireAdmin, (req, res) => {
  try {
    db.adminDeleteDanmaku(req.params.id)
    res.json({ ok: true })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.get('/admin/users', requireAdmin, (req, res) => {
  res.json(db.listAllUsers().map((u) => absUser(req, u)))
})

API.post('/admin/users/:id/ban', requireAdmin, (req, res) => {
  try {
    res.json(absUser(req, db.banUser(req.params.id, req.user)))
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.post('/admin/users/:id/unban', requireAdmin, (req, res) => {
  try {
    res.json(absUser(req, db.unbanUser(req.params.id)))
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

// ---------- 用户 / 关注 / 资料 ----------
API.get('/users/:id/profile', (req, res) => {
  try {
    const p = db.getUserProfile(req.params.id, req.user)
    res.json({ ...p, avatar: abs(req, p.avatar) })
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
})

API.post('/users/:id/follow', authRequired, (req, res) => {
  try {
    res.json(db.toggleFollow(req.params.id, req.user))
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.get('/me/following', authRequired, (_req, res) => {
  res.json(db.listFollowing(_req.user.id).map((u) => absUser(_req, u)))
})

API.get('/me/followers', authRequired, (_req, res) => {
  res.json(db.listFollowers(_req.user.id).map((u) => absUser(_req, u)))
})

API.get('/users/:id/following', (req, res) => {
  res.json(db.listFollowing(req.params.id).map((u) => absUser(req, u)))
})

API.get('/users/:id/followers', (req, res) => {
  res.json(db.listFollowers(req.params.id).map((u) => absUser(req, u)))
})

API.patch('/me', authRequired, (req, res) => {
  try {
    res.json(absUser(req, db.updateProfile({ user: req.user, name: req.body.name, bio: req.body.bio })))
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.post('/me/avatar', authRequired, upload.single('avatar'), (req, res) => {
  try {
    if (!req.file) throw new Error('请选择头像图片')
    if (!/^image\//.test(req.file.mimetype)) throw new Error('头像必须是图片文件')
    res.json(absUser(req, db.saveAvatar(req.user, req.file.path)))
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

// ---------- 弹幕 ----------
API.get('/videos/:id/danmaku', (req, res) => {
  res.json(db.listDanmaku(req.params.id))
})

API.post('/videos/:id/danmaku', authRequired, (req, res) => {
  try {
    const d = db.sendDanmaku({ user: req.user, videoId: req.params.id, ...req.body })
    wsHub.broadcast(req.params.id, { type: 'danmaku', videoId: req.params.id, danmaku: d }, req.token)
    res.json(d)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

// ---------- 评论 ----------
API.get('/videos/:id/comments', (req, res) => {
  const list = db.listComments(req.params.id)
  const map = (c) => ({ ...c, userAvatar: abs(req, c.userAvatar), replies: (c.replies || []).map(map) })
  res.json(list.map(map))
})

API.post('/videos/:id/comments', authRequired, (req, res) => {
  try {
    const c = db.addComment({ user: req.user, videoId: req.params.id, content: req.body.content, rootId: req.body.rootId })
    const absC = { ...c, userAvatar: abs(req, c.userAvatar) }
    wsHub.broadcast(req.params.id, { type: 'comment', videoId: req.params.id, comment: absC }, req.token)
    res.json(absC)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.delete('/comments/:id', authRequired, (req, res) => {
  try {
    db.deleteComment(req.params.id, req.user)
    res.json({ ok: true })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.post('/comments/:id/like', authRequired, (req, res) => {
  try {
    res.json({ likes: db.likeComment(req.params.id) })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

// ---------- 互动 ----------
API.get('/videos/:id/interaction', (req, res) => {
  res.json(db.getInteraction(req.params.id, req.user))
})

API.post('/videos/:id/like', authRequired, (req, res) => {
  try {
    res.json(db.toggleLike(req.params.id, req.user))
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.post('/videos/:id/coin', authRequired, (req, res) => {
  try {
    res.json(db.addCoin(req.params.id, req.body.amount, req.user))
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.post('/videos/:id/favorite', authRequired, (req, res) => {
  try {
    res.json(db.toggleFavorite(req.params.id, req.user))
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

// ---------- 历史 / 收藏 ----------
API.get('/me/history', authRequired, (req, res) => {
  res.json(db.listHistory(req.user).map((v) => absVideo(req, v)))
})

API.post('/videos/:id/history', authRequired, (req, res) => {
  try {
    db.addHistory(req.params.id, req.user)
    res.json({ ok: true })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
})

API.get('/me/favorites', authRequired, (req, res) => {
  res.json(db.listFavoriteVideos(req.user).map((v) => absVideo(req, v)))
})

app.use('/api', API)

// 内置前端：托管 dist，浏览器直接访问 44789 即可打开假B站
const DIST = path.join(__dirname, '..', 'dist')
if (require('node:fs').existsSync(path.join(DIST, 'index.html'))) {
  app.use(express.static(DIST))
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/media') || req.path.startsWith('/ws')) return next()
    res.sendFile(path.join(DIST, 'index.html'))
  })
}

// 错误兜底（multer 错误等）
app.use((err, _req, res, _next) => {
  res.status(400).json({ error: err.message || '服务器错误' })
})

const server = http.createServer(app)
const wss = new WebSocket.Server({ server, path: '/ws' })
wsHub.attach(wss)

server.listen(PORT, () => {
  console.log('[PtCon Server] listening on http://127.0.0.1:' + PORT)
  console.log('[PtCon Server] seed dir: ' + db.SEED_DIR)
})
