
import { reactive, isRef, toRaw, shallowReactive } from 'vue'
import { http, createLocalStorage } from "uimi"
import router from "./router.js"
//const tokenTime = 2 * 60 * 60 * 1000
export const state = reactive(createLocalStorage({
  token: {
    type: 'cookie',
    default: ''
  },
  userInfo: {
    type: 'local',
    default: {}
  },
  // minMenu: {
  //   type: 'local',
  //   default: false
  // },
  appMenu: {
    type: 'local',
    default: {}
  },
  appShow: {
    type: 'local',
    default: 0
  },
  appItem: {
    type: 'local',
    default: [{
      name: "工作台",
      link: "/app",
    }]
  },
}))
export const actions = {
  getToken(options = {
    data: {
      username: "",
      password: "",
    },
    success: () => { }
  }) {
    http
      .post("/auth/login/gettoken", options.data)
      .then(result => {
        console.log(result)
        state.token = result.data.token
        http.defaults.headers.common['Authorization'] = state.token;
        actions.getUserInfo()
        actions.getMenu()
        options.success(result)
      })
      .catch(function (error) {
        console.log(error)
      })

  },
  getTokenByCode(options = {
    data: {
      dingding_id: '',
      code: ''
    },
    success: () => { }
  }) {
    http
      .get("/auth/login/gettokenbycode", { params: options.data })
      .then(result => {
        console.log(result)

        state.token = result.data.token
        http.defaults.headers.common['Authorization'] = state.token;
        options.success(result)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getUserInfo() {
    http
      .get("/main/user")
      .then(result => {
        console.log(result)
        state.userInfo = result.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  getMenu() {
    http
      .get("/main/menu")
      .then(result => {
        console.log(result)
        state.appMenu = result.data
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  showMenu(menu) {
    //console.log("点击了", menu);
    if (!menu.link) return
    router.push(menu.link)
    let index = state.appItem.findIndex(((item) => item.id == menu.id))
    console.log(index)
    if (index == -1) {
      index = state.appItem.push(menu) - 1
      //state.appItem = state.appItem
      //console.log(index, state.appItem)
      //index = state.appItem.length - 1
    }
    state.appShow = index
  },
  removeMenu(index) {
    state.appItem.splice(index, 1)
    //state.appItem = state.appItem
    const len = state.appItem.length
    if (len <= state.appShow || len == 0) state.appShow = len - 1
    console.log(index)
  }
}
export default {
  state,
  actions
}
