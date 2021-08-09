<template>
  <AppDefault />
</template>
<script>
import AppDefault from "./theme/Default.vue"
// import uimi from "uimi";
import components from "./components/components"
// export default {
//   components,
// }
// import components from "./components/components";
// // app=uimi.getVueApp
//window.dddd.use(components)

export default {
  components: {
    AppDefault,
  },
  setup() {
    window.dddd.use(components)
    console.log("ddd", window.dddd)
  },
}
</script>
<style lang="scss">
@import "./style.scss";
</style>

