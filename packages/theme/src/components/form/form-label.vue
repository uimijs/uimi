<template>
  <label class="form-label" v-text="text"></label>
</template>
<script lang="ts">
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
