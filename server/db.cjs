// PtCon 服务端 JSON 数据层（与旧 Electron 本地 store.cjs 同构，迁移为多用户 + token 会话）
const fs = require('node:fs')
const path = require('node:path')
const crypto = require('node:crypto')

const DATA = path.join(__dirname, 'data')
const MEDIA = path.join(DATA, 'media')
// 种子媒体目录（视频/封面/头像），可用环境变量覆盖；部署时把整个项目目录一起拷贝即可
const SEED_DIR = process.env.PTCON_SEED_DIR || path.resolve(__dirname, '../electron/resources')

function init() {
  for (const d of [DATA, path.join(MEDIA, 'videos'), path.join(MEDIA, 'covers'), path.join(MEDIA, 'avatars')]) {
    fs.mkdirSync(d, { recursive: true })
  }
  seedIfNeeded()
  migrateIfNeeded()
}

// 旧数据迁移：补 role/banned/status 默认值 + 确保管理员账号存在（幂等）
function migrateIfNeeded() {
  const usersPath = file('users.json')
  if (!fs.existsSync(usersPath)) return
  const users = read('users.json', [])
  const ADMIN_NAME = 'admin'
  let usersChanged = false
  for (const u of users) {
    if (u.role === undefined) { u.role = 'user'; usersChanged = true }
    if (u.banned === undefined) { u.banned = false; usersChanged = true }
  }
  if (!users.some((u) => u.name === ADMIN_NAME)) {
    const salt = 'ptcon-seed-salt'
    users.push({
      id: 'admin',
      name: ADMIN_NAME,
      role: 'admin',
      banned: false,
      passwordHash: hashPassword('701592', salt),
      salt,
      avatar: '/media/seed/avatars/av3.jpg',
      bio: '平台管理员',
      coins: 99,
      baseFans: 0,
      createdAt: Date.now()
    })
    usersChanged = true
  }
  if (usersChanged) write('users.json', users)
  const videos = read('videos.json', [])
  let videosChanged = false
  for (const v of videos) {
    if (v.status === undefined) { v.status = 'ok'; videosChanged = true }
  }
  if (videosChanged) write('videos.json', videos)
}

function file(name) {
  return path.join(DATA, name)
}

function read(name, fallback) {
  const p = file(name)
  if (!fs.existsSync(p)) return fallback
  try {
    return JSON.parse(fs.readFileSync(p, 'utf8'))
  } catch {
    return fallback
  }
}

function write(name, value) {
  fs.writeFileSync(file(name), JSON.stringify(value, null, 2), 'utf8')
}

function uid(prefix) {
  return prefix + '_' + crypto.randomBytes(6).toString('hex')
}

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex')
}

function publicUser(u) {
  if (!u) return null
  return { id: u.id, name: u.name, avatar: u.avatar, bio: u.bio, coins: u.coins, role: u.role || 'user', banned: !!u.banned, createdAt: u.createdAt }
}

// ---------- 种子 ----------
function seedSrc(file) {
  const local = path.join(SEED_DIR, 'videos', file)
  if (fs.existsSync(local)) return '/media/seed/videos/' + file
  return 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/' + file
}

function seedIfNeeded() {
  if (fs.existsSync(file('users.json'))) return
  const now = Date.now()
  const salt = 'ptcon-seed-salt'
  const mkUser = (id, name, avatar, bio, baseFans) => ({
    id, name,
    role: 'user',
    banned: false,
    passwordHash: hashPassword('123456', salt),
    salt,
    avatar: '/media/seed/avatars/' + avatar,
    bio, coins: 99, baseFans,
    createdAt: now - 86400000 * 30
  })
  const users = [
    mkUser('u1', '弹幕姬小粉', 'av1.jpg', '热爱生活的UP主，每天更新治愈系内容～', 102400),
    mkUser('u2', '游戏老王', 'av2.jpg', '车与游戏，不可辜负。商务合作请私信。', 68000),
    mkUser('u3', '科技阿伟', 'av3.jpg', '数码区萌新UP，带你看新鲜科技玩意儿。', 45600),
    mkUser('u4', '摸鱼音乐人', 'av4.jpg', '做一些奇奇怪怪的音乐和视频。', 39200),
    {
      id: 'admin', name: 'admin', role: 'admin', banned: false,
      passwordHash: hashPassword('701592', salt),
      salt,
      avatar: '/media/seed/avatars/av3.jpg',
      bio: '平台管理员', coins: 99, baseFans: 0,
      createdAt: now
    }
  ]
  const videos = [
    { id: 'v1', userId: 'u1', title: '【4K微距】花开一瞬，治愈一整个夏天', desc: '用微距镜头记录了鲜花绽放的全过程，时间流逝之下，生命的浪漫尽在其中。建议戴上耳机观看，记得一键三连支持一下！', category: '生活', cover: '/media/seed/covers/c1.jpg', src: seedSrc('flower.mp4'), duration: 5, views: 1284000, likes: 64000, coins: 8200, favorites: 31000, createdAt: now - 3600e3 * 5 },
    { id: 'v2', userId: 'u3', title: '极限散热挑战！火焰直吹显卡会发生什么', desc: '本期硬核实验：用高温喷枪直吹显卡散热器，温度墙到底在哪里？（专业实验，请勿模仿）', category: '科技', cover: '/media/seed/covers/c2.jpg', src: seedSrc('ForBiggerBlazes.mp4'), duration: 6, views: 892000, likes: 41000, coins: 5600, favorites: 12000, createdAt: now - 3600e3 * 26 },
    { id: 'v3', userId: 'u1', title: '逃离城市计划｜一个人的公路旅行', desc: '周末加满油，向着山的方向出发。沿途的风景比目的地更让人惊喜，这就是公路旅行的意义吧。', category: '生活', cover: '/media/seed/covers/c3.jpg', src: seedSrc('ForBiggerEscapes.mp4'), duration: 52, views: 456000, likes: 23000, coins: 3100, favorites: 18000, createdAt: now - 3600e3 * 50 },
    { id: 'v4', userId: 'u4', title: '今日份快乐合集，不开心的时候点开看看', desc: '收集了一些让人捧腹的瞬间，希望看到这条视频的你今天也能开开心心。快乐会传染，请你慷慨come on！', category: '影视', cover: '/media/seed/covers/c4.jpg', src: seedSrc('ForBiggerFun.mp4'), duration: 33, views: 2310000, likes: 128000, coins: 19000, favorites: 98000, createdAt: now - 3600e3 * 70 },
    { id: 'v5', userId: 'u2', title: '第一视角山路驰骋，这推背感太上头了', desc: '封闭道路拍摄，安全驾驶人人有责。引擎声浪+弯道走线，戴上耳机体验沉浸式驾驶！', category: '生活', cover: '/media/seed/covers/c5.jpg', src: seedSrc('ForBiggerJoyrides.mp4'), duration: 10, views: 678000, likes: 35000, coins: 4200, favorites: 9700, createdAt: now - 3600e3 * 100 },
    { id: 'v6', userId: 'u4', title: '成年人的崩溃只在一瞬间', desc: '那些压垮情绪的小事，你是不是也经历过？但请相信，天亮之后一切都会好起来的。', category: '影视', cover: '/media/seed/covers/c6.jpg', src: seedSrc('ForBiggerMeltdowns.mp4'), duration: 10, views: 1560000, likes: 88000, coins: 12000, favorites: 66000, createdAt: now - 3600e3 * 130 },
    { id: 'v7', userId: 'u3', title: '新车速评：这台小钢炮值不值得买？', desc: '动力、空间、油耗、智能化全面体验，优缺点一次说清。看完这期再决定下不下单！', category: '科技', cover: '/media/seed/covers/c7.jpg', src: seedSrc('VolkswagenGTIReview.mp4'), duration: 10, views: 342000, likes: 17000, coins: 2600, favorites: 8300, createdAt: now - 3600e3 * 200 },
    { id: 'v8', userId: 'u4', title: '【纯音乐】气泡律动 · 学习放松专用BGM', desc: '轻柔的电子律动像气泡一样升腾，适合学习、工作、放松的时候听。评论区留下你的循环次数吧～', category: '音乐', cover: '/media/seed/covers/c8.jpg', src: seedSrc('WeAreGoingOnBubbles.mp4'), duration: 300, views: 987000, likes: 52000, coins: 7100, favorites: 120000, createdAt: now - 3600e3 * 300 }
  ]
  for (const v of videos) v.status = 'ok' // 种子视频默认已过审
  const danmakuTemplate = [
    ['前排打卡！', 0.5, '#ffffff', 0],
    ['来了来了', 1.2, '#FE0302', 0],
    ['前方高能', 2.5, '#FFAA02', 1],
    ['画质好评', 3.6, '#6DEA00', 0],
    ['哈哈哈太真实了', 5.0, '#ffffff', 0],
    ['一键三连了', 6.4, '#FF7204', 0],
    ['UP主更新辛苦了', 8.0, '#00BFFF', 2],
    ['名场面预警', 10.2, '#FE0302', 0],
    ['循环了一整天', 12.0, '#ffffff', 0],
    ['下次一定', 13.5, '#FF00FF', 0]
  ]
  const danmaku = []
  for (const v of videos) {
    danmakuTemplate.forEach((d, i) => {
      if (v.duration < d[1] + 1) return
      danmaku.push({
        id: uid('d'), videoId: v.id, userId: users[i % users.length].id,
        userName: users[i % users.length].name,
        text: d[0], time: d[1], color: d[2], mode: d[3], createdAt: now - i * 1000
      })
    })
  }
  const commentTexts = [
    '已经三连了，UP加油！', '这也太强了吧，收藏了', '看完心情久久不能平静……',
    '催更催更，下一期什么时候', '第一！', '干货满满，建议反复观看',
    '弹幕比视频还精彩哈哈哈', 'BGM是什么，求一个歌单'
  ]
  const comments = []
  for (const v of videos) {
    for (let i = 0; i < 3; i++) {
      const u = users[(i + v.id.charCodeAt(1)) % users.length]
      const cid = uid('c')
      comments.push({
        id: cid, videoId: v.id, userId: u.id, userName: u.name, userAvatar: u.avatar,
        content: commentTexts[(i + v.id.charCodeAt(1)) % commentTexts.length],
        likes: 100 + i * 53, rootId: null, createdAt: now - 3600e3 * (i + 1)
      })
      if (i === 0) {
        const r = users[(i + 1) % users.length]
        comments.push({
          id: uid('c'), videoId: v.id, userId: r.id, userName: r.name, userAvatar: r.avatar,
          content: '回复 ' + u.name + '：同感！', likes: 23, rootId: cid,
          createdAt: now - 3600e3 * (i + 2)
        })
      }
    }
  }
  write('users.json', users)
  write('videos.json', videos)
  write('danmaku.json', danmaku)
  write('comments.json', comments)
  write('likes.json', [])
  write('coins.json', [])
  write('favorites.json', [])
  write('history.json', [])
  write('follows.json', [])
  write('sessions.json', {})
}

// ---------- 会话 ----------
function createSession(userId) {
  const sessions = read('sessions.json', {})
  const token = crypto.randomBytes(24).toString('hex')
  sessions[token] = { userId, createdAt: Date.now() }
  write('sessions.json', sessions)
  return token
}

function destroySession(token) {
  const sessions = read('sessions.json', {})
  if (sessions[token]) {
    delete sessions[token]
    write('sessions.json', sessions)
  }
}

function userByToken(token) {
  if (!token) return null
  const s = read('sessions.json', {})[token]
  if (!s) return null
  const u = read('users.json', []).find((x) => x.id === s.userId) || null
  return u && !u.banned ? u : null
}

// ---------- 认证 ----------
function register(name, password) {
  name = String(name || '').trim()
  if (!/^[\u4e00-\u9fa5a-zA-Z0-9_]{2,16}$/.test(name)) throw new Error('昵称需为2-16位中文、字母、数字或下划线')
  if (!password || password.length < 6) throw new Error('密码至少6位')
  const users = read('users.json', [])
  if (users.some((u) => u.name === name)) throw new Error('该昵称已被注册')
  const avatars = ['av1.jpg', 'av2.jpg', 'av3.jpg', 'av4.jpg']
  const user = {
    id: uid('u'),
    name,
    role: 'user',
    banned: false,
    salt: crypto.randomBytes(8).toString('hex'),
    passwordHash: '',
    avatar: '/media/seed/avatars/' + avatars[Math.floor(Math.random() * avatars.length)],
    bio: '这个人很懒，什么都没有写~',
    coins: 99,
    baseFans: 0,
    createdAt: Date.now()
  }
  user.passwordHash = hashPassword(password, user.salt)
  users.push(user)
  write('users.json', users)
  const token = createSession(user.id)
  return { user: publicUser(user), token }
}

function login(name, password) {
  const users = read('users.json', [])
  const user = users.find((u) => u.name === String(name || '').trim())
  if (!user || hashPassword(password || '', user.salt) !== user.passwordHash) throw new Error('昵称或密码错误')
  if (user.banned) throw new Error('账号已被封禁')
  const token = createSession(user.id)
  return { user: publicUser(user), token }
}

// ---------- 视频 ----------
function decorate(v, users = read('users.json', [])) {
  const u = users.find((x) => x.id === v.userId)
  return { ...v, userName: u ? u.name : '已注销用户', userAvatar: u ? u.avatar : '', danmakuCount: countDanmaku(v.id) }
}

function countDanmaku(videoId) {
  return read('danmaku.json', []).filter((d) => d.videoId === videoId).length
}

function listVideos({ category = '全部', keyword = '', sort = 'newest' } = {}) {
  let videos = read('videos.json', []).filter((v) => (v.status || 'ok') === 'ok') // 先审后发：仅公开已过审视频
  const users = read('users.json', [])
  if (category && category !== '全部') videos = videos.filter((v) => v.category === category)
  const kw = String(keyword || '').trim().toLowerCase()
  if (kw) videos = videos.filter((v) => v.title.toLowerCase().includes(kw) || v.desc.toLowerCase().includes(kw))
  if (sort === 'views') videos = videos.slice().sort((a, b) => b.views - a.views)
  else if (sort === 'danmaku') videos = videos.slice().sort((a, b) => b.danmakuCount - a.danmakuCount || b.views - a.views)
  else videos = videos.slice().sort((a, b) => b.createdAt - a.createdAt)
  return videos.map((v) => decorate(v, users))
}

function getVideo(id, { incView = true, viewer = null } = {}) {
  const videos = read('videos.json', [])
  const v = videos.find((x) => x.id === id)
  if (!v) throw new Error('视频不存在或已被删除')
  // 待审核/已拒绝视频仅作者本人与管理员可见
  if ((v.status || 'ok') !== 'ok' && (!viewer || (viewer.id !== v.userId && viewer.role !== 'admin'))) {
    throw new Error('视频不存在或已被删除')
  }
  if (incView) {
    v.views += 1
    write('videos.json', videos)
  }
  return decorate(v)
}

function createVideo({ user, title, desc, category, duration, videoPath, coverPath }) {
  title = String(title || '').trim().slice(0, 80)
  if (!title) throw new Error('标题不能为空')
  if (!videoPath) throw new Error('视频文件不能为空')
  const id = uid('v')
  const vext = path.extname(videoPath).toLowerCase() || '.mp4'
  const cext = path.extname(coverPath).toLowerCase() || '.jpg'
  const vdest = path.join(MEDIA, 'videos', id + vext)
  const cdest = path.join(MEDIA, 'covers', id + cext)
  fs.renameSync(videoPath, vdest)
  if (coverPath) fs.renameSync(coverPath, cdest)
  const videos = read('videos.json', [])
  const video = {
    id, userId: user.id, title,
    desc: String(desc || '').slice(0, 2000),
    category: category || '生活',
    cover: '/media/covers/' + id + cext,
    src: '/media/videos/' + id + vext,
    duration: Math.round(Number(duration)) || 0,
    views: 0, likes: 0, coins: 0, favorites: 0, createdAt: Date.now(),
    status: 'pending' // 先审后发：新投稿进入待审核队列
  }
  videos.push(video)
  write('videos.json', videos)
  return decorate(video)
}

function listUserVideos(userId, viewer = null) {
  const users = read('users.json', [])
  return read('videos.json', [])
    .filter((v) => v.userId === userId)
    .filter((v) => (v.status || 'ok') === 'ok' || v.userId === (viewer && viewer.id) || (viewer && viewer.role === 'admin'))
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((v) => decorate(v, users))
}

// ---------- 弹幕 ----------
function listDanmaku(videoId) {
  return read('danmaku.json', [])
    .filter((d) => d.videoId === videoId)
    .map((d) => ({ text: d.text, time: d.time, color: d.color, mode: d.mode, name: d.userName }))
}

function sendDanmaku({ user, videoId, text, time, color, mode }) {
  text = String(text || '').trim()
  if (!text) throw new Error('弹幕内容不能为空')
  if (text.length > 50) throw new Error('弹幕最长50字')
  const d = {
    id: uid('d'), videoId, userId: user.id, userName: user.name,
    text, time: Math.max(0, Number(time) || 0),
    color: /^#[0-9a-fA-F]{6}$/.test(color) ? color : '#ffffff',
    mode: [0, 1, 2].includes(Number(mode)) ? Number(mode) : 0,
    createdAt: Date.now()
  }
  const all = read('danmaku.json', [])
  all.push(d)
  write('danmaku.json', all)
  return { text: d.text, time: d.time, color: d.color, mode: d.mode, userName: d.userName }
}

// ---------- 评论 ----------
function listComments(videoId) {
  const all = read('comments.json', [])
  const list = all.filter((c) => c.videoId === videoId).sort((a, b) => b.createdAt - a.createdAt)
  const roots = list.filter((c) => !c.rootId)
  return roots.map((c) => ({ ...c, replies: list.filter((r) => r.rootId === c.id).sort((a, b) => a.createdAt - b.createdAt) }))
}

function addComment({ user, videoId, content, rootId = null }) {
  content = String(content || '').trim()
  if (!content) throw new Error('评论内容不能为空')
  if (content.length > 500) throw new Error('评论最长500字')
  const c = {
    id: uid('c'), videoId, userId: user.id, userName: user.name, userAvatar: user.avatar,
    content, likes: 0, rootId: rootId || null, createdAt: Date.now()
  }
  const all = read('comments.json', [])
  all.push(c)
  write('comments.json', all)
  return c
}

function deleteComment(id, user) {
  const all = read('comments.json', [])
  const target = all.find((c) => c.id === id)
  if (!target) throw new Error('评论不存在')
  if (target.userId !== user.id) throw new Error('只能删除自己的评论')
  const removed = new Set([id, ...all.filter((c) => c.rootId === id).map((c) => c.id)])
  write('comments.json', all.filter((c) => !removed.has(c.id)))
  return true
}

function likeComment(id) {
  const all = read('comments.json', [])
  const c = all.find((x) => x.id === id)
  if (!c) throw new Error('评论不存在')
  c.likes += 1
  write('comments.json', all)
  return c.likes
}

// ---------- 互动 ----------
function recalcCounter(videoId, field, coll) {
  const videos = read('videos.json', [])
  const v = videos.find((x) => x.id === videoId)
  if (v) {
    const records = read(coll, [])
    v[field] = records.filter((r) => r.videoId === videoId).reduce((s, r) => s + (r.amount || 1), 0)
    write('videos.json', videos)
  }
}

function getInteraction(videoId, user) {
  if (!user) return { liked: false, coined: 0, favorited: false, guest: true }
  const liked = read('likes.json', []).some((r) => r.userId === user.id && r.videoId === videoId)
  const coinRec = read('coins.json', []).filter((r) => r.userId === user.id && r.videoId === videoId)
  const favorited = read('favorites.json', []).some((r) => r.userId === user.id && r.videoId === videoId)
  return { liked, coined: coinRec.reduce((s, r) => s + r.amount, 0), favorited, guest: false }
}

function toggleLike(videoId, user) {
  let records = read('likes.json', [])
  const exists = records.some((r) => r.userId === user.id && r.videoId === videoId)
  records = exists ? records.filter((r) => !(r.userId === user.id && r.videoId === videoId))
    : records.concat([{ userId: user.id, videoId, createdAt: Date.now() }])
  write('likes.json', records)
  recalcCounter(videoId, 'likes', 'likes.json')
  return getInteraction(videoId, user)
}

function addCoin(videoId, amount, user) {
  amount = Number(amount) === 2 ? 2 : 1
  let records = read('coins.json', [])
  const used = records.filter((r) => r.userId === user.id && r.videoId === videoId).reduce((s, r) => s + r.amount, 0)
  if (used + amount > 2) throw new Error('每个视频最多投2个硬币')
  if (user.coins < amount) throw new Error('硬币不足')
  const users = read('users.json', [])
  const me = users.find((u) => u.id === user.id)
  me.coins -= amount
  write('users.json', users)
  records.push({ userId: user.id, videoId, amount, createdAt: Date.now() })
  write('coins.json', records)
  recalcCounter(videoId, 'coins', 'coins.json')
  return getInteraction(videoId, user)
}

function toggleFavorite(videoId, user) {
  let records = read('favorites.json', [])
  const exists = records.some((r) => r.userId === user.id && r.videoId === videoId)
  records = exists ? records.filter((r) => !(r.userId === user.id && r.videoId === videoId))
    : records.concat([{ userId: user.id, videoId, createdAt: Date.now() }])
  write('favorites.json', records)
  recalcCounter(videoId, 'favorites', 'favorites.json')
  return getInteraction(videoId, user)
}

// ---------- 历史 / 收藏列表 ----------
function listHistory(user) {
  const records = read('history.json', []).filter((r) => r.userId === user.id).sort((a, b) => b.updatedAt - a.updatedAt)
  const videos = read('videos.json', [])
  const users = read('users.json', [])
  return records.map((r) => ({ ...decorate(videos.find((v) => v.id === r.videoId), users), watchedAt: r.updatedAt })).filter((v) => v.id)
}

function addHistory(videoId, user) {
  let records = read('history.json', [])
  const exist = records.find((r) => r.userId === user.id && r.videoId === videoId)
  if (exist) exist.updatedAt = Date.now()
  else records.push({ userId: user.id, videoId, updatedAt: Date.now() })
  write('history.json', records)
  return true
}

function listFavoriteVideos(user) {
  const records = read('favorites.json', []).filter((r) => r.userId === user.id).sort((a, b) => b.createdAt - a.createdAt)
  const videos = read('videos.json', [])
  const users = read('users.json', [])
  return records.map((r) => decorate(videos.find((v) => v.id === r.videoId), users)).filter((v) => v.id)
}

// ---------- 关注 ----------
function followerCount(userId) {
  return read('follows.json', []).filter((f) => f.targetId === userId).length
}

function followingCount(userId) {
  return read('follows.json', []).filter((f) => f.userId === userId).length
}

function isFollowing(userId, targetId) {
  return read('follows.json', []).some((f) => f.userId === userId && f.targetId === targetId)
}

function toggleFollow(targetId, user) {
  if (targetId === user.id) throw new Error('不能关注自己')
  const users = read('users.json', [])
  if (!users.some((u) => u.id === targetId)) throw new Error('用户不存在')
  let follows = read('follows.json', [])
  const exists = follows.some((f) => f.userId === user.id && f.targetId === targetId)
  follows = exists ? follows.filter((f) => !(f.userId === user.id && f.targetId === targetId))
    : follows.concat([{ userId: user.id, targetId, createdAt: Date.now() }])
  write('follows.json', follows)
  return { following: !exists, fans: followerCount(targetId) }
}

function listFollowing(userId) {
  const follows = read('follows.json', []).filter((f) => f.userId === userId).sort((a, b) => b.createdAt - a.createdAt)
  const users = read('users.json', [])
  return follows.map((f) => {
    const u = users.find((x) => x.id === f.targetId)
    return u ? { ...publicUser(u), videoCount: read('videos.json', []).filter((v) => v.userId === u.id).length } : null
  }).filter(Boolean)
}

function listFollowers(userId) {
  const follows = read('follows.json', []).filter((f) => f.targetId === userId).sort((a, b) => b.createdAt - a.createdAt)
  const users = read('users.json', [])
  return follows.map((f) => {
    const u = users.find((x) => x.id === f.userId)
    return u ? publicUser(u) : null
  }).filter(Boolean)
}

// ---------- 管理后台 ----------
function listAllVideos() {
  return read('videos.json', []).slice().sort((a, b) => b.createdAt - a.createdAt).map((v) => decorate(v))
}

function reviewVideo(id, approve) {
  const videos = read('videos.json', [])
  const v = videos.find((x) => x.id === id)
  if (!v) throw new Error('视频不存在')
  v.status = approve ? 'ok' : 'rejected'
  write('videos.json', videos)
  return decorate(v)
}

function adminDeleteVideo(id) {
  const videos = read('videos.json', [])
  const v = videos.find((x) => x.id === id)
  if (!v) throw new Error('视频不存在')
  write('videos.json', videos.filter((x) => x.id !== id))
  // 级联清理评论 / 弹幕 / 互动记录 / 历史
  write('comments.json', read('comments.json', []).filter((c) => c.videoId !== id))
  write('danmaku.json', read('danmaku.json', []).filter((d) => d.videoId !== id))
  for (const coll of ['likes.json', 'coins.json', 'favorites.json', 'history.json']) {
    write(coll, read(coll, []).filter((r) => r.videoId !== id))
  }
  return true
}

// 全站评论（平铺，含回复），附视频标题
function listAllComments() {
  const videos = read('videos.json', [])
  const titleOf = (id) => (videos.find((v) => v.id === id) || {}).title || '（视频已删除）'
  return read('comments.json', [])
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((c) => ({ ...c, videoTitle: titleOf(c.videoId), isReply: !!c.rootId }))
}

function adminDeleteComment(id) {
  const all = read('comments.json', [])
  if (!all.some((c) => c.id === id)) throw new Error('评论不存在')
  const removed = new Set([id, ...all.filter((c) => c.rootId === id).map((c) => c.id)])
  write('comments.json', all.filter((c) => !removed.has(c.id)))
  return true
}

// 全站弹幕，附视频标题
function listAllDanmaku() {
  const videos = read('videos.json', [])
  const titleOf = (id) => (videos.find((v) => v.id === id) || {}).title || '（视频已删除）'
  return read('danmaku.json', [])
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((d) => ({ ...d, videoTitle: titleOf(d.videoId) }))
}

function adminDeleteDanmaku(id) {
  const all = read('danmaku.json', [])
  if (!all.some((d) => d.id === id)) throw new Error('弹幕不存在')
  write('danmaku.json', all.filter((d) => d.id !== id))
  return true
}

// 用户列表（脱敏：不含密码哈希/盐）
function listAllUsers() {
  return read('users.json', [])
    .slice()
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((u) => ({ ...publicUser(u), videoCount: read('videos.json', []).filter((v) => v.userId === u.id).length }))
}

function destroyUserSessions(userId) {
  const sessions = read('sessions.json', {})
  let changed = false
  for (const t of Object.keys(sessions)) {
    if (sessions[t].userId === userId) { delete sessions[t]; changed = true }
  }
  if (changed) write('sessions.json', sessions)
}

function banUser(id, operator) {
  if (id === operator.id) throw new Error('不能封禁自己')
  const users = read('users.json', [])
  const u = users.find((x) => x.id === id)
  if (!u) throw new Error('用户不存在')
  if (u.role === 'admin') throw new Error('不能封禁管理员')
  u.banned = true
  write('users.json', users)
  destroyUserSessions(id) // 封禁后立即踢下线
  return publicUser(u)
}

function unbanUser(id) {
  const users = read('users.json', [])
  const u = users.find((x) => x.id === id)
  if (!u) throw new Error('用户不存在')
  u.banned = false
  write('users.json', users)
  return publicUser(u)
}

// ---------- 资料 ----------
function getUserProfile(id, viewer) {
  const u = read('users.json', []).find((x) => x.id === id)
  if (!u) throw new Error('用户不存在')
  return {
    ...publicUser(u),
    videoCount: read('videos.json', []).filter((v) => v.userId === id).length,
    fans: (u.baseFans || 0) + followerCount(id),
    following: followingCount(id),
    isFollowing: viewer ? isFollowing(viewer.id, id) : false,
    isSelf: viewer ? viewer.id === id : false
  }
}

function updateProfile({ user, name, bio }) {
  const users = read('users.json', [])
  const me = users.find((u) => u.id === user.id)
  if (name !== undefined) {
    name = String(name).trim()
    if (!/^[\u4e00-\u9fa5a-zA-Z0-9_]{2,16}$/.test(name)) throw new Error('昵称需为2-16位中文、字母、数字或下划线')
    if (users.some((u) => u.name === name && u.id !== user.id)) throw new Error('该昵称已被占用')
    me.name = name
  }
  if (bio !== undefined) me.bio = String(bio).slice(0, 200)
  write('users.json', users)
  return publicUser(me)
}

function saveAvatar(user, tmpPath) {
  const ext = path.extname(tmpPath).toLowerCase() || '.jpg'
  const dest = path.join(MEDIA, 'avatars', user.id + ext)
  fs.renameSync(tmpPath, dest)
  const users = read('users.json', [])
  const me = users.find((u) => u.id === user.id)
  me.avatar = '/media/avatars/' + user.id + ext + '?t=' + Date.now()
  write('users.json', users)
  // 同步评论区等处冗余的 userAvatar
  const comments = read('comments.json', [])
  let changed = false
  for (const c of comments) {
    if (c.userId === user.id) { c.userAvatar = me.avatar; changed = true }
  }
  if (changed) write('comments.json', comments)
  return publicUser(me)
}

module.exports = {
  init, MEDIA, SEED_DIR,
  read, write, uid, hashPassword, publicUser,
  createSession, destroySession, userByToken,
  register, login,
  listVideos, getVideo, createVideo, listUserVideos, decorate,
  listAllVideos, reviewVideo, adminDeleteVideo,
  listAllComments, adminDeleteComment,
  listAllDanmaku, adminDeleteDanmaku,
  listAllUsers, banUser, unbanUser,
  listDanmaku, sendDanmaku,
  listComments, addComment, deleteComment, likeComment,
  getInteraction, toggleLike, addCoin, toggleFavorite,
  listHistory, addHistory, listFavoriteVideos,
  followerCount, isFollowing, toggleFollow, listFollowing, listFollowers,
  getUserProfile, updateProfile, saveAvatar
}
