<template>
  <div class="d-flex align-items-center justify-content-center" style="width:100vw;height:100vh">
    <div :class="`spinner-border text-${theme}`"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { theme } from "@constants/props";
export default {
  name: "Load",
  props: {
    theme: {
      ...theme,
      default: 'secondary'
    }
  }
};
</script>
