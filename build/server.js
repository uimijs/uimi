import { createServer as createViteServer } from 'vite'
import serverConfig from './server.config.ts'
import app from "../bin/server.es.js";
async function createServer() {
    //其他的交给vite处理
    const vite = await createViteServer(serverConfig)
    app.use(vite.middlewares)
    app.listen(3000)
}
console.log("open http://localhost:3000")
createServer()