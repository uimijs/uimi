<script lang="ts">
import { h, Transition, toHandlers } from "vue";
const onEvent = {
  beforeEnter(el: HTMLElement) {
    el.style.height = "0";
  },
  enter(el: HTMLElement) {
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "";
    }
  },
  afterEnter(el: HTMLElement) {
    el.style.height = "";
  },
  beforeLeave(el: HTMLElement) {
    el.style.height = el.scrollHeight + "px";
  },
  leave(el: HTMLElement) {
    if (el.scrollHeight !== 0) {
      el.style.height = "0";
    }
  },
  afterLeave(el: HTMLElement) {
    el.style.height = "";
  },
};
const props = {
  ...toHandlers(onEvent),
  "enter-from-class": "",
  "enter-active-class": "collapsing",
  "enter-to-class": "",
  "leave-from-class": "",
  "leave-active-class": "collapsing",
  "leave-to-class": "",
};
export default {
  name: "Collapse",
  render(_ctx: any) {
    return h(Transition, props, _ctx.$slots.default());
  },
};
</script>
