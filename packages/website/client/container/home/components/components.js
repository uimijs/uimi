import AppBrand from "./AppBrand.vue"
import AppIframe from "./AppIframe.vue"
import AppMenu from "./AppMenu.vue"
import AppNavbar from "./AppNavbar.vue"
import AppUser from "./AppUser.vue"
const install = function (app, opts = {}) {
  for (var key in this) if (key !== "install") app.component(key, this[key]);
}
export default {
  install,
  AppBrand,
  AppIframe,
  AppMenu,
  AppNavbar,
  AppUser
}
