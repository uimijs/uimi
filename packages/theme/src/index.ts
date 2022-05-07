import * as ElementPlus from 'element-plus'
import * as icons from '@element-plus/icons-vue'
import zhCn from '../node_modules/element-plus/dist/locale/zh-cn'
import { prefix } from './config'
import * as components from './components'
import type { App } from 'vue'
import './scss/element/index.scss'
import './scss/index.scss'
export * from './components'
export default {
  install(app: App, opts = {}) {
    for (const key in ElementPlus) {
      if (/El/.test(key)) {
        const name = key.replace('El', '')
        if (!components[name]) {
          app.component(prefix + name, ElementPlus[key])
        }
      }
    }
    //狗屎的服务端渲染
    app.provide(ElementPlus.ID_INJECTION_KEY, {
      prefix: Math.floor(Math.random() * 10000),
      current: 0,
    })
    ElementPlus.provideGlobalConfig({ locale: zhCn }, app, true)
    app.directive('loading', ElementPlus['vLoading'])
    for (const key in components) components[key].install(app, opts)
    for (const key in icons) app.component(key, icons[key])
  },
}
