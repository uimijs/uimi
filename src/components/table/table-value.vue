<template>
  <table class="table">
    <slot>
      <thead>
        <tr>
          <th v-for="(th, id) in thead" :key="id" v-text="th"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tr, index) in data" :key="index">
          <td v-for="(td, id) in tr" :key="id" v-text="td"></td>
        </tr>
      </tbody>
    </slot>
  </table>
</template>
<script lang="ts">
import { computed, toRefs } from "vue";
export default {
  name: "Table",
  props: {
    columns: Object,
    data: Object,
  },
  setup(props) {
    console.log(props.data[0]);
    const thead = computed(() =>
      !props.columns && props.data[0]
        ? Object.keys(props.data[0])
        : props.columns
    );
    return {
      thead,
    };
  },
};
</script>
