<template>
  <div class="dropdown-menu" :class="{ show: show }">
    <slot>
      <a
        class="dropdown-item"
        v-for="item in MenuItem"
        :key="item"
        v-text="item"
      ></a>
    </slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, isProxy, reactive, h } from "vue";
import { dropdownData } from "./dropdown-store";
export default {
  name: "DropdownMenu",
  props: {
    MenuItem: Array,
  },
  setup() {
    const dropdown = reactive(dropdownData)
    const dropdownId = dropdown.count;
    const show = computed(() => dropdownId === dropdown.showId);
    return {
      show,
    };
  },
};
</script>
