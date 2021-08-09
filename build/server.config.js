/**
 * @type {import('vite').UserConfig}
 */
import { defineConfig, mergeConfig } from 'vite'
import baseConfig from "./base.config";
const config = defineConfig({
  root: 'doc',
})
export default mergeConfig(baseConfig, config)