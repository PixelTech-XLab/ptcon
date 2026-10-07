const fs = require('fs')
const path = require('path')
// 将打包内置的种子媒体解到 data/seed（db.cjs 的 SEED_DIR 环境变量指向这里）
const src = path.join(__dirname, 'server', 'seed')
const dst = process.env.PTCON_SEED_DIR || path.join(__dirname, 'server', 'data', 'seed')
try {
  fs.mkdirSync(dst, { recursive: true })
  for (const d of ['videos', 'covers', 'avatars']) {
    const s = path.join(src, d)
    if (!fs.existsSync(s)) continue
    const t = path.join(dst, d)
    fs.mkdirSync(t, { recursive: true })
    for (const f of fs.readdirSync(s)) {
      const a = path.join(s, f), b = path.join(t, f)
      if (!fs.existsSync(b)) fs.copyFileSync(a, b)
    }
  }
  console.log('seed ready at', dst)
} catch (e) { console.error('seed copy failed:', e.message) }
