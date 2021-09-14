<template>
  <transition name="fade" mode="out-in" appear>
    <div :class="classObj" role="alert">
      <slot></slot>
      <button type="button" class="close" v-if="dismissible" @click="close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
  </transition>
</template>
<script lang="ts">
import {  ref } from "vue";
import { theme } from "@constants/props";
export default {
  name: "Alert",
  props: {
    theme, //主题颜色
    dismissible: { type: Boolean, default: false },
    show: { type: Boolean, default: false },
  },
  setup(props) {
    const show = ref(true)
    const classObj = [
      "alert",
      `alert-${props.theme}`,
      { 'alert-dismissible fade': props.dismissible },
      { show: show && props.dismissible }
    ]
    const close = () => {
      show.value = false
    }
    return {
      classObj,
      close
    }
  },
}
</script>
