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
import { computed, isProxy, reactive, h } from "vue";
import { dropdownData } from "./dropdown-store";
export default {
  name: "DropdownMenu",
  props: {
    MenuItem: Array,
  },
  setup() {
    dropdownData.init()
    const dropdownId = dropdownData.show.list;
    const show = computed(() => dropdownId === dropdownData.show.id);
    return {
      show,
    };
  },
};
</script>
