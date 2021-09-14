import login from "./auth/login";
import menu from "./main/menu";
import user from "./main/user";
import express from 'express'
const app = express();
export default app;
app.use("auth", login)
app.use("main", menu, user)
