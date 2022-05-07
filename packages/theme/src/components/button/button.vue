<template>
  <button type="button" :class="buttonClass">
    <Icon v-if="icon" :name="icon"></Icon>
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { rounded, theme } from '&/constants/props'
import { Icon } from '&/components/icon'
export default {
  name: 'Button',
  components: {
    Icon,
  },
  props: {
    // theme, //主题颜色
    tag: {
      type: String,
      default: 'button',
    },
    icon: {
      type: String,
      default: '',
    },
    outline: Boolean,
    rounded, //圆角样式
    type: {
      type: theme.type,
      validator: theme.validator,
      default: 'default',
    }, //主题颜色
  },
  setup(props) {
    const buttonClass = ['btn']
    // if (props.tag == "button") buttonClass.push("btn");
    const themeClass = props.outline ? `btn-outline-${props.type}` : `btn-${props.type}`
    if (props.type) buttonClass.push(themeClass)
    if (props.rounded) buttonClass.push(`rounded-${props.rounded}`)
    return {
      buttonClass,
    }
  },
}
</script>
