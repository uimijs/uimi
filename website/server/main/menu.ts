import  express from 'express'
import { Return } from "../util";
const app = express()
export default app
app.use(async (req, res) => {
    res.send(Return.seccuss(
        [{ id: 1, name: "快捷菜单", pid: 0, link: "", icon: "star-o", sort: "0000" },
        { id: 2, name: "流程中心", pid: 0, link: "", icon: "share-alt", sort: "0000" },
        { id: 3, name: "报表中心", pid: 0, link: "", icon: "bar-chart", sort: "0000" },
        { id: 4, name: "项目管理", pid: 0, link: "", icon: "tasks", sort: "0000" },
        { id: 5, name: "系统设置", pid: 0, link: "", icon: "cog", sort: "0000" },
        { id: 6, name: "数据中心", pid: 0, link: "", icon: "database", sort: "0000" },
        { id: 7, name: "仓储", pid: 9999, link: "", icon: "angle-right", sort: "0000" },
        { id: 100, name: "工作台", pid: 1, link: "/app/desktop", icon: "home", sort: "0" },
        { id: 101, name: "工作流", pid: 2, link: "/app/workflow", icon: "angle-right", sort: "0" },
        { id: 102, name: "用户管理", pid: 5, link: "/app/system/user", icon: "angle-right", sort: "0" },
        { id: 103, name: "测试报表", pid: 3, link: "/app/report", icon: "angle-right", sort: "0" },
        { id: 104, name: "数据源管理", pid: 6, link: "/app/data", icon: "angle-right", sort: "0" },
        { id: 105, name: "数据管理", pid: 6, link: "/app/data/server", icon: "angle-right", sort: "0" },
        { id: 106, name: "单据设计", pid: 2, link: "/app/form/layoutit", icon: "angle-right", sort: "0" },
        { id: 1843, name: "流程设置", pid: 2, link: "/app/workflow", icon: "", sort: "0" },
        { id: 1844, name: "api测试", pid: 6, link: "/app/data/test", icon: "", sort: "0" },
        { id: 1845, name: "单据设计2", pid: 2, link: "/app/workflow/edit", icon: "", sort: "0" }
        ]
    ))
})
