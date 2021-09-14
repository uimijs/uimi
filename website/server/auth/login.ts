import  express from 'express'
import { Return } from "../util";
const app = express()
export default app
app.use("getToken", async (req, res) => {
    res.send(Return.seccuss({
        corp: { 1: "UIMIJS", 2: "优米UI" },
        token: Date.now()
    }))
})
app.use("getTokenByCode", async (req, res) => {
    res.send(Return.seccuss({
        corp: { 1: "UIMIJS", 2: "优米UI" },
        token: Date.now()
    }))
})