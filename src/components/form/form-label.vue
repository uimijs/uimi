<template>
  <label class="form-label" v-text="text"></label>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default {
  name: 'Icon',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
