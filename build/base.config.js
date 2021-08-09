import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
const cwd = process.cwd()

export default defineConfig({
  envDir:path.resolve(cwd, 'env'),
  plugins: [vue()],
  resolve: {
    alias: {
      "uimi": path.resolve(cwd, 'dist/js/uimi.es.js'),
      "@dist": path.resolve(cwd, 'dist'),
      "@node_modules": path.resolve(cwd, 'node_modules'),
      "@src": path.resolve(cwd, "src"),
      "@components": path.resolve(cwd, "src/components"),
      "@constants": path.resolve(cwd, "src/constants"),
      "@directives": path.resolve(cwd, "src/directives"),
      "@utils": path.resolve(cwd, "src/utils"),
    }
  }
})
