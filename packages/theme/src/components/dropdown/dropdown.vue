<template>
  <div class="dropdown" :class="{ show: show }" :style="style" @click="showDropdown">
    <button type="button" class="btn dropdown-toggle" :class="`btn-${theme}`">
      <slot></slot>
    </button>
    <slot :id="dropdownId" name="dropdown"></slot>
  </div>
</template>
<script lang="ts">
import { watch, ref, reactive } from 'vue'
import { dropdownData } from './dropdown-store'
export default {
  name: 'Dropdown',
  props: {
    ButtonText: String,
    theme: { type: String, default: 'primary' }, //主题颜色
  },
  setup() {
    const dropdown = reactive(dropdownData)
    const dropdownId = dropdown.getDropdownId()

    const show = ref(false)
    const style = reactive<any>({})
    const showDropdown = () => dropdown.setShowId(dropdown.showId == dropdownId ? -1 : dropdownId)
    watch(
      () => dropdown.showId,
      (showId) => {
        show.value = dropdownId === showId
        style['z-index'] = showId !== -1 && !show.value ? 1000 : ''
      }
    )
    return {
      dropdownId,
      show,
      style,
      showDropdown,
    }
  },
}
</script>
