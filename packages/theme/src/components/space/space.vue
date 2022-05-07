<template>
  <div :class="sdclass" :style="sdstyle">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { ref, reactive, watchEffect } from 'vue'
export default {
  props: {
    vertical: Boolean,
    gap: {
      type: [String, Number],
      default: 2,
    },
    size: [String, Number],
  },
  setup(props) {
    const sdclass = ref('')
    const sdstyle: any = reactive({})
    watchEffect(() => {
      sdclass.value = props.vertical ? 'vstack' : 'hstack'
      if (!props.size) sdclass.value += ` gap-${props.gap}`
      if (typeof props.size == 'number') sdstyle.gap = `${props.size}px`
      if (typeof props.size == 'string') sdstyle.gap = props.size
    })
    return {
      sdclass,
      sdstyle,
    }
  },
}
</script>
