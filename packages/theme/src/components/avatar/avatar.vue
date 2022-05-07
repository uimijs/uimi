<template>
  <Element :tag="tag" class="avatar" :class="classObj" :style="styleObj">
    <Icon v-if="icon" :name="icon"></Icon>
    <img
      v-else-if="(src || srcSet) && !hasLoadError"
      class="img-fluid"
      :src="src"
      :srcset="srcSet"
      @error="handleError"
    />
    <slot v-else>
      <span>{{ name.slice(slice) }} </span>
    </slot>
  </Element>
</template>
<script lang="ts">
import { ref } from 'vue'
import { rounded, theme } from '&/constants/props'
import { Icon } from '&/components/icon'
import { Element } from '&/components/element'
export default {
  name: 'Avatar',
  components: {
    Element,
    Icon,
  },
  props: {
    tag: { type: String, default: 'span' },
    src: String,
    srcSet: String,
    icon: String,
    name: { type: String, default: '' },
    slice: { type: Number, default: -2 },
    size: { type: [String, Number] },
    rounded: {
      type: rounded.type,
      validator: rounded.validator,
      default: 'circle',
    }, //圆角样式
    theme: {
      type: theme.type,
      validator: theme.validator,
      default: 'primary',
    }, //主题颜色
  },
  setup(props) {
    const classObj = [`rounded-${props.rounded}`, { [`bg-${props.theme}`]: !props.src }]
    const styleObj = props.size ? { width: props.size, height: props.size } : {}
    const hasLoadError = ref(false)
    function handleError() {
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
