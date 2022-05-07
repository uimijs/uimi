<template>
  <AppDefault />
</template>
<script>
//可定义多款布局，然后根据用户的配置来动态切换布局。
import AppDefault from "./theme/Default.vue"
import components from "./components/components"
import { useVueApp } from "uimi"
export default {
  components: {
    AppDefault,
  },
  setup() {
    useVueApp().use(components)
  },
}
</script>
<style lang="scss">
@import "./style.scss";
</style>

