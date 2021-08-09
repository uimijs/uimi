<template>
  <Element
    class="avatar"
    :tagName="tagName"
    :class="classObj"
    :style="styleObj"
  >
    <Icon v-if="icon" :name="icon"></Icon>
    <img
      class="img-fluid"
      v-else-if="(src || srcSet) && !hasLoadError"
      :src="src"
      :srcset="srcSet"
      @error="handleError"
    />
    <span v-else v-text="name.slice(slice)"></span>
  </Element>
</template>
<script lang="ts">
import { defineComponent, ref, h, renderSlot } from "vue";
import { rounded, theme } from "@constants/props";
import { Icon } from "@components/icon";
import { Element } from "@components/element";
export default {
  name: "Avatar",
  components: {
    Element,
    Icon,
  },
  props: {
    tagName: { type: String, default: "span" },
    src: String,
    srcSet: String,
    icon: String,
    name: { type: String, default: "" },
    slice: { type: Number, default: -2 },
    size: { type: String },
    rounded: {
      ...rounded,
      default: "circle",
    }, //圆角样式
    theme: {
      ...theme,
      default: "primary",
    }, //主题颜色
  },
  setup(props) {
    const classObj = [`rounded-${props.rounded}`, { [`bg-${props.theme}`]: !props.src }]
    const styleObj = props.size ? { width: props.size, height: props.size } : {}
    const hasLoadError = ref(false)
    function handleError(e: Event) {
      hasLoadError.value = true
    }
    return {
      classObj,
      styleObj,
      hasLoadError,
      handleError,
    }
  },
}
</script>
