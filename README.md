## Introduction
<p align="center">uimi - A Vue.js 3.0 UI library</p>

* 💪 Vue 3.0 Composition API
* 🔥 Written in TypeScript

## Install

```shell
npm install uimi -S
```

## Quick Start

```js
import { createApp } from 'vue'
import App from './App.vue'
// import style
import 'uimi/dist/uimi.css'
import uimi from 'uimi'

// global import
createApp(App).use(uimi).mount('#app')

// or according to the need to import
import {
  UiLink,
  UiButton
  // ...
} from 'uimi'

createApp(App).use(UiLink).use(UiButton)
```

## About
* base on [Bootstrap](https://v4.bootcss.com/)

## Documentation

To check out live docs, visit [website](https://uimi.fun/)

## Questions

TODO

## Issues

Please make sure to read the [Issue Reporting Checklist](TODO) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## Changelog

Detailed changes for each release are documented in the [CHANGELOG](https://github.com/uimijs/uimi/blob/master/CHANGELOG.md).

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present Yao Yi
