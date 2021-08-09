<template>
  <input class="form-control" />
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
