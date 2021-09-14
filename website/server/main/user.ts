import express from 'express'
import { Return } from "../util";
const app = express()
export default app
app.use(async (req, res) => {
    res.send(Return.seccuss({
        active: true,
        avatar: "",
        corpname: "UIMIJS",
        department: ["admin"],
        email: "",
        id: 1,
        isAdmin: false,
        isBoss: false,
        isHide: true,
        isLeader: false,
        jobnumber: "",
        mobile: "18588224443",
        name: "YAO YI",
        order: "",
        position: "",
        remark: "",
        userid: "0615393424740651",
        workPlace: "",
    }))
})