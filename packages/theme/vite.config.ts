import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const cwd = process.cwd()
// https://vitejs.dev/config/
export default defineConfig({
  // envDir: "../../env",
  plugins: [vue()],
  resolve: {
    alias: {
      '&': path.resolve(cwd, 'src'),
    },
  },
  build: {
    // emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    outDir: 'lib',
    // sourcemap: "inline",
    minify: false,
  },
})
