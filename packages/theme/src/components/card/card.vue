<template>
  <div class="card">
    <div v-if="$slots.header || header" class="card-header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div v-if="$slots.default" class="card-body">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
// import { ref, nextTick } from 'vue'
export default {
  props: {
    header: String,
    noBody: Boolean,
  },
}
</script>
