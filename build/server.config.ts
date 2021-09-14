/**
 * @type {import('vite').UserConfig}
 */
import { defineConfig, mergeConfig } from 'vite'
import baseConfig from "./base.config";
const config = defineConfig({
  root: 'website/client',
  //server: { middlewareMode: 'html' }
})
export default mergeConfig(baseConfig, config)