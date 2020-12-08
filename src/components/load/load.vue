<script lang="ts">
import { defineComponent, h } from "vue";
export default {
  name: "Load",
  render() {
    return h("div", {
      class: "spinner-border text-danger",
      style: {
        position: "fixed",
        top: "calc(50vh - 2rem)",
        left: "calc(50vw - 2rem)",
        width: "4rem",
        height: "4rem",
        "border-width": "0.25rem",
      },
    });
  },
};
</script>
