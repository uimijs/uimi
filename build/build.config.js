import { defineConfig, mergeConfig } from 'vite'
//import vue from '@vitejs/plugin-vue'
import path from 'path'
import { name, version, author } from "../package.json";
import baseConfig from "./base.config";
const cwd = process.cwd()

const banner =
  `/*!` +
  `\r\n* uimi.js v${version}` +
  `\r\n* A Vue.js 3.0 UI Library` +
  `\r\n* Copyright (c) 2019-${new Date().getFullYear()} ${author}` +
  `\r\n* All rights reserved.` +
  `\r\n*/`;

const config = defineConfig({
  build: {
    lib: {
      entry: path.resolve(cwd, './src/index.ts'),
      name: 'uimi',
      fileName: (format) => `js/uimi.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'axios', 'vue-router', 'perfect-scrollbar'],
      output: {
        banner,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
})
export default mergeConfig(baseConfig, config)