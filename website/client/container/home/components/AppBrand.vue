<template>
  <div class="navbar-brand">
    <img src="/logo.png" height="36" />
    <span class="font-weight-bolder ms-1" v-text="userInfo.corpname"></span>
  </div>
</template>
<script>
import { toRefs } from "vue";
import { state } from "../../store"
export default {
  props: {},
  setup() {
    const { userInfo } = toRefs(state)
    return {
      userInfo,
    }
  },
}
</script>
