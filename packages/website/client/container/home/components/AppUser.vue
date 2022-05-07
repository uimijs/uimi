<template>
  <!-- user -->
  <div class="user-card">
    <ui-avatar :src="userInfo.avatar" :name="userInfo.name"> </ui-avatar>
    <span class="user-info px-2">
      <span class="d-block" v-text="userInfo.name"></span>
      <span class="small" v-text="position(userInfo)"></span>
    </span>
  </div>
  <!-- user -->
</template>
<script>
import { computed, toRefs } from "vue"
import { state } from "../../store"
export default {
  props: {},
  inheritAttrs: false,
  setup(props) {
    const { userInfo } = toRefs(state)
    const position = info => {
      const job = info.position ? "-" + info.position : ""
      if (!info.department) return job
      const dep = info.department[Object.keys(info.department)[0]]
      return dep + job
    }
    return {
      userInfo,
      position,
    }
  },
}
</script>
