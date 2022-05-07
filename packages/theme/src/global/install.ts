import type { App } from 'vue'

//default install
export const install = function (this: any, app: App) {
  for (const key in this) if (key !== 'install') app.config.globalProperties[`$${key}`] = this[key]
}
