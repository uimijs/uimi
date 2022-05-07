<template>
  <i :class="`fa fa-${name}`"></i>
</template>
<script lang="ts">
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      default: '',
    },
  },
}
</script>
