import AppHome from "./home/App.vue";
import Applogin from "./login/App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { actions, state } from "./store";

//以后放入统一api
const createScript = (function (oHead) {
  function loadError(oError) {
    throw new URIError(
      "The script " + oError.target.src + " is not accessible.",
    );
  }
  return function (sSrc, fOnload) {
    var oScript = document.createElement("script");
    //oScript.type = "text\/javascript";
    oScript.onerror = loadError;
    if (fOnload) {
      oScript.onload = fOnload;
    }
    oHead.appendChild(oScript);
    oScript.src = sSrc;
  };
})(document.head || document.getElementsByTagName("head")[0]);

const history = createWebHistory();
const routes = [
  { name: "root", path: "/", component: Applogin },
  { name: "Home", path: "/app/:pathMatch(.*)*", component: AppHome },
  { name: "Login", path: "/login", component: Applogin },
  //{ path: '/:pathMatch(.*)*', component: 404? }//需要重新规划没有找到路由的app页面
];
const router = createRouter({
  history,
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  console.log("FROM", to.query, to.fullPath);
  if (to.name !== "Login" && !state.token) {
    if (to.query.dingding_id) {
      createScript(
        "//g.alicdn.com/dingding/dingtalk-jsapi/2.7.13/dingtalk.open.js",
        () => {
          console.log(dd.env.platform);
          if (dd.env.platform !== "notInDingTalk") {
            dd.ready(function () {
              dd.runtime.permission.requestAuthCode({
                corpId: to.query.dingding_id,
                onSuccess: function (result) {
                  global.http
                    .get("/auth/login/gettokenbycode", {
                      dingding_id: to.query.dingding_id,
                      code: result.code,
                    })
                    .then((res) => {
                      if (res.errcode === 0) {
                        // console.log(res.data);
                        state.token = res.data.token;
                        //获取token成功就继续导航
                        next();
                      }
                    });
                },
                onFail: function (error) {
                  console.log(JSON.stringify(error));
                },
              });
            });
            dd.error(function (error) {
              console.log(JSON.stringify(error));
            });
          } else {
            next({ name: "Login" });
          }
        },
      );
    } else {
      next({ name: "Login" });
    }
  } else next();
});
export default router;
