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
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, watch, ref, reactive, provide, isProxy } from "vue";
import { dropdownData } from "./dropdown-store";
import { setToRefs } from "../../utils/proxy";
export default {
  name: "Dropdown",
  props: {
    ButtonText: String,
    theme: { type: String, default: "primary" }, //主题颜色
  },
  setup() {
    setToRefs(dropdownData, 'show')
    dropdownData.show.list++;
    const dropdownId = dropdownData.show.list;
    const show = ref(false);
    const style = reactive<any>({});
    const showDropdown = () => dropdownData.show.id = dropdownData.show.id == dropdownId ? -1 : dropdownId
    watch(
      () => dropdownData.show.id,
      (showId) => {
        show.value = dropdownId === showId;
        style["z-index"] = showId !== -1 && !show.value ? 1000 : "";
      }
    );
    return {
      show,
      style,
      showDropdown,
    };
  },
};
</script>
