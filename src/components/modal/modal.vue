<template>
  <teleport :to="to">
    <div v-if="modalOpen" class="modal" role="dialog">
      <div class="modal-dialog">
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default {
  props: {
    modalOpen: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: 'body'
    }
  }
}
</script>
