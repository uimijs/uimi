import { App } from "vue";
import * as components from './components';
import * as global from "./global";
import "./scss/uimi.scss"
export * from './components';

export * from "./api"

export default {
  install(app: App, opts = {}) {
    for (var key in components) components[key].install(app, opts)
    global.install(app, opts)
  }
}
