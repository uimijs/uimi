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
import { setToRefs } from "../../utils/proxy";
export default {
  name: "DropdownMenu",
  props: {
    MenuItem: Array,
  },
  setup() {
    setToRefs(dropdownData, "show")
    const dropdownId = dropdownData.show.list;
    const show = computed(() => dropdownId === dropdownData.show.id);
    return {
      show,
    };
  },
};
</script>
