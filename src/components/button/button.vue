<template>
  <Element :tagName="tagName" v-bind="buttonAttr">
    <Icon v-if="icon" :name="icon"></Icon>
    <slot></slot>
  </Element>
</template>
<script lang="ts">
import { reactive } from 'vue'
import { rounded, theme } from "@constants/props";
import { Element } from "@components/element";
import { Icon } from "@components/icon";
export default {
  name: 'Button',
  components: {
    Element,
    Icon
  },
  props: {
    theme, //主题颜色
    tagName: {
      type: String,
      default: 'button',
    },
    icon: {
      type: String,
      default: '',
    },
    type: String
  },
  setup(props) {
    const buttonAttr = reactive(<Indexable<any>>{});
    const buttonClass = [];
    if (props.tagName == "button") {
      buttonClass.push("btn");
      if (!props.type) {
        buttonAttr.type = 'button';
      }
    }
    if (props.theme) {
      buttonClass.push(`btn-${props.theme}`);
    }
    if (buttonClass.length != 0) {
      buttonAttr.class = buttonClass;
    }
    return {
      buttonAttr
    }
  }
}
</script>
