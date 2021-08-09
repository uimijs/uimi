<template>
  <div
    class="dropdown"
    :class="{ show: show }"
    @click="showDropdown"
    :style="style"
  >
    <button
      type="button"
      class="btn dropdown-toggle"
      :class="`btn-${theme}`"
      v-if="ButtonText"
      v-text="ButtonText"
    ></button>
    <slot :id="dropdownId"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, watch, ref, reactive, provide, isProxy } from "vue";
import { dropdownData } from "./dropdown-store";
export default {
  name: "Dropdown",
  props: {
    ButtonText: String,
    theme: { type: String, default: "primary" }, //主题颜色
  },
  setup() {
    const dropdown = reactive(dropdownData)
    const dropdownId = dropdown.getDropdownId();
    //console.log("dropdownId", dropdownId)
    const show = ref(false);
    const style = reactive<any>({});
    const showDropdown = () => dropdown.setShowId((dropdown.showId == dropdownId) ? -1 : dropdownId)
    watch(
      () => dropdown.showId,
      (showId) => {
        show.value = (dropdownId === showId);
        style["z-index"] = showId !== -1 && !show.value ? 1000 : "";
      }
    );
    return {
      dropdownId,
      show,
      style,
      showDropdown,
    };
  },
};
</script>
