<template>
  <header class="top" style="height: 5rem"></header>
  <main
    class="container-fluid"
    style="
      height: calc(100vh - 10rem);
      background: url(/assets/img/app/login.jpg) center center;
      background-size: cover;
    "
  >
    <div class="row">
      <div class="col-sm"></div>
      <div class="col-sm">
        <div
          class="rounded mx-auto my-5 text-center bg-white"
          style="width: 300px"
        >
          <ul class="nav nav-tabs nav-justified font-weight-bold">
            <li class="nav-item">
              <a class="nav-link active">账号登陆</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">扫码登陆</a>
            </li>
          </ul>
          <div class="tab-content m-3">
            <div class="tab-pane fade show active">
              <form class="container" @submit.prevent="login">
                <input
                  type="mobile"
                  v-model.trim="loginData.username"
                  class="form-control mb-2"
                  placeholder="输入手机号"
                  required
                />

                <input
                  type="password"
                  autocomplete="off"
                  v-model="loginData.password"
                  class="form-control mb-2"
                  placeholder="输入登陆密码"
                  required
                />
                <small v-if="errmsg" class="form-text text-danger">
                  {{ errmsg }}
                  <a href="forgot.html">忘记密码</a>
                </small>
                <input
                  type="submit"
                  class="btn btn-primary form-control"
                  value="登陆"
                />
                <a href="forgot.html">忘记密码</a>
              </form>
            </div>
            <div class="tab-pane fade">
              <div id="scanlogin">功能开发中</div>
            </div>
          </div>
          <div class="btn-group mb-3">
            <a class="mr-2">
              <img
                class="rounded-circle"
                src="/assets/img/brand/dingding.png"
                style="width: 2rem; height: 2rem"
              />
            </a>
            <a>
              <img
                class="rounded-circle"
                src="/assets/img/brand/weixin.png"
                style="width: 2rem; height: 2rem"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer class="main-footer mt-4">
    <div class="text-center mt-2">
      Copyright ©2021
      <a href="http://www.uimijs.com/">UIMIJS</a> 版权所有
    </div>
  </footer>
</template>
<script>
import { ref, reactive } from "vue"
import { useRouter, useRoute } from "vue-router"
import { state, actions } from "../store"
//import { other } from "dingtalk-jsapi";
export default {
  props: {
    route: {},
    dingdingId: "",
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()
    const errmsg = ref("")
    console.log(window.location.href, route.query)
    const loginData = reactive({
      username: "",
      password: "",
    })
    const login = () => {
      const res = actions.getToken({
        data: loginData,
        success: res => {
          console.log(res)
          if (res.errcode === 0) router.push("app")
          else errmsg.value = res.msg
        },
      })
    }
    return {
      errmsg,
      loginData,
      login,
    }
  },
}
</script>

