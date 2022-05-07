<template>
  <transition v-bind="onEvent">
    <slot></slot>
  </transition>
</template>
<script lang="ts">
//未测试，状态未知
import { requestAnimFrame } from '&/utils/dom'
export default {
  name: 'Collapse',
  setup() {
    return {
      //class和事件放一起定义方便理解和修改各自的属性
      onEvent: {
        class: 'collapse',
        enterFromClass: '',
        onBeforeEnter(el: HTMLElement) {
          el.style.height = '0'
          el.classList.add('show')
        },
        enterActiveClass: 'collapsing',
        onEnter(el: HTMLElement) {
          requestAnimFrame(() => (el.style.height = `${el.scrollHeight}px`))
        },
        enterToClass: '',
        onAfterEnter(el: HTMLElement) {
          el.style.height = ''
        },
        leaveFromClass: '',
        onBeforeLeave(el) {
          el.style.height = `${el.scrollHeight}px`
        },
        leaveActiveClass: 'collapsing',
        onLeave(el: HTMLElement) {
          //只要请求与size有关的属性或者方法都可以，实际上只是等待渲染时间差而已
          el.getBoundingClientRect()
          //vue3.04需要设置transitionProperty
          el.style.transitionProperty = 'height'
          //防止丢帧卡顿
          requestAnimFrame(() => (el.style.height = '0'))
        },
        leaveToClass: '',
        onAfterLeave(el: HTMLElement) {
          el.classList.remove('show')
          el.style.height = ''
        },
      },
    }
  },
}
</script>
