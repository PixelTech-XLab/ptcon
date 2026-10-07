# PtCon · 假B站（彩虹风格视频社区）

Express + Vue + WebSocket。Node 单进程承载 API、前端静态页、弹幕 WS。

## Render 部署参数

- **Environment**: Node
- **Build Command**: `npm install --prefix server`
- **Start Command**: `node prestart.cjs && node server/index.js`
- **Health Check Path**: `/api/health`

端口由环境变量 `PORT` 自动注入，无需配置。
