import { createApp, defineAsyncComponent } from "vue";
import uimi, { global, Loading } from "uimi"
import router from "./router.js";
import "@dist/style.css"
import "@node_modules/font-awesome/css/font-awesome.min.css"
//content
//import App from "./App.vue";
let appPath = "./App.vue"

if (window.top != window.self) {
  //在ifram里面加载容器app
  const toSegments = location.pathname.match(/[^/]+/g).splice(0, 3)
  appPath = ((toSegments.length == 3) ? location.pathname : `${location.pathname}/index`) +
    import.meta.env.VITE_APP_SUFFIX
  console.log('app异步组件地址', appPath)
}
const app = createApp(defineAsyncComponent({
  loader: () => import( /* @vite-ignore */ appPath),
  loadingComponent: Loading.Loading,
}))
app.mount("#app");
app.use(uimi)
  .use(router)
window.dddd = app
console.log("ddd", window.dddd)
