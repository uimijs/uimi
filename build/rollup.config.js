import typescript from 'rollup-plugin-typescript2';
import VuePlugin from 'rollup-plugin-vue'
//import commonjs from 'rollup-plugin-commonjs';
//import babel from 'rollup-plugin-babel'
import { name, version, author } from "../package.json";

const banner =
  `/*!
* uimi.js v${version}
* A Vue.js 3.0 UI Library
* Copyright (c) 2019-${new Date().getFullYear()} ${author}
* All rights reserved.
*/`;

export default {
  //input: "./src/index.ts",
  input: "./src/test.ts",
  output: [
    {
      file: "./dist/js/uimi.cjs.js",
      format: 'cjs',
      banner,
      sourcemap: true
    },
    {
      file: "./dist/js/uimi.esm.js",
      format: 'esm',
      banner,
      sourcemap: true
    },
    {
      name,
      file: "./dist/js/uimi.js",
      format: 'umd',
      globals: {
        vue: "Vue"
      },
      banner,
      sourcemap: true
    }
  ],
  plugins: [
    // commonjs(),
    typescript(),
    VuePlugin({
      target: 'browser',
      css: false,
    }),
    // babel(),
  ],
  external: ["node_modules"],
}
