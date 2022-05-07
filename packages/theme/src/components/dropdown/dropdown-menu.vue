<template>
  <div class="dropdown-menu" :class="{ show: show }">
    <slot> </slot>
  </div>
</template>
<script lang="ts">
import { computed, reactive } from 'vue'
import { dropdownData } from './dropdown-store'
export default {
  name: 'DropdownMenu',
  setup() {
    const dropdown = reactive(dropdownData)
    const dropdownId = dropdown.count
    const show = computed(() => dropdownId === dropdown.showId)
    return {
      show,
    }
  },
}
</script>
