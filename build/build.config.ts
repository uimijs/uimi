import { defineConfig, mergeConfig } from 'vite'
//import vue from '@vitejs/plugin-vue'
import path from 'path'
import Package from "../package.json";
import baseConfig from "./base.config";
const cwd = process.cwd()
const { name, version, author } = Package
const banner =
  `/*!` +
  `\r\n* uimi.js v${version}` +
  `\r\n* A Vue.js 3.0 UI Library` +
  `\r\n* Copyright (c) 2019-${new Date().getFullYear()} ${author}` +
  `\r\n* All rights reserved.` +
  `\r\n*/`;

const config = defineConfig({
  build: {
    outDir:"dist/lib",
    minify: false,
    lib: {
      entry: './src/index.ts',
      formats: ['es']
    },
    rollupOptions: {

      //input: { 'js/uimi': './src/index.ts' },
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'axios', 'vue-router', 'perfect-scrollbar'],
      output: {

        format: "es",
        entryFileNames: `[name].js`,
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