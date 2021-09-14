import { defineConfig, mergeConfig } from 'vite'
//import vue from '@vitejs/plugin-vue'
import path from 'path'
import { name, version, author } from "../package.json";
//import baseConfig from "./base.config";
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
    outDir: "bin",
    lib: {
      entry: path.resolve(cwd, 'website/server/index.ts'),
      formats: ['es'],
      fileName: (format) => `server.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['express', '../../build/server.config', 'path', 'vite', '@vitejs/plugin-vue'],
      output: {

        banner,
      }
    }
  },
})
console.log(config)
export default config