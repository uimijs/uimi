import { prefix } from "../config";
import { App } from "vue";

//default install
export const install = function (this: any, app: App, opts = {}) {
  for (var key in this) if (key !== "install") app.component(prefix + key, this[key]);
}
