<template>
  <div class="container">
    <div class="row data">
      <ul class="nav row row-cols-4">
        <li
          class="nav-item col border"
          v-for="text in data"
          :key="text"
          v-text="text"
        ></li>
      </ul>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue"
export default {
  setup() {
    const data = reactive([1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "x", 0, "%"])

    return {
      data,
    }
  },
}
</script>
<style lang="scss">
.data {
  width: 4rem * 4;
}
.nav-item {
  //width:2rem;
  height: 4rem;
}
</style>
