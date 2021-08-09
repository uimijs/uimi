<template>
  <div class="sidebar-content">
    <UiTree
      class="tree"
      :data="appMenu"
      :clickMenu="showMenu"
      accordion
    ></UiTree>
  </div>
</template>
<script>
import { toRefs, nextTick } from "vue"
import PerfectScrollbar from "perfect-scrollbar"
import { state, actions } from "../../store"
export default {
  props: {},
  setup() {
    const { appMenu } = toRefs(state)
    const { showMenu } = actions
    nextTick(() => {
      //添加滚动条
      const ps = new PerfectScrollbar(".sidebar-content", {
        suppressScrollX: true,
      })
    })
    return {
      appMenu,
      showMenu,
    }
  },
}
</script>
