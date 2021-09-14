import { App, inject } from "vue";
import * as components from './components';
import * as global from "./global";
import "./scss/uimi.scss"
export * from './components';

export * from "./api"
export const uimiiKey = Symbol("uimi")

export const useVueApp = () => {
  return inject(uimiiKey);
}
export default {
  install(app: App, opts = {}) {
    for (var key in components) components[key].install(app, opts)
    global.install(app, opts)
    app.provide(uimiiKey, app)
  }
}