<script lang="ts">
import { defineComponent, openBlock, createBlock, h, renderSlot, Fragment } from "vue";
export default {
  name: "Element",
  props: {
    tagName: { type: String, default: "div" },
  },
  //inheritAttrs: false,
  render(_ctx, _cache, $props, $setup, $data, $options) {
    if ($props.tagName == "Fragment") {
      return createBlock("div", {}, [
        renderSlot(_ctx.$slots, "default")
      ])
    } else {
      return (openBlock(), createBlock($props.tagName, _ctx.$attrs, [
        renderSlot(_ctx.$slots, "default")
      ], 16 /* FULL_PROPS */))
    }


    // const tagName = ($props.tagName == "Fragment") ? Fragment : $props.tagName
    // console.log("测试Element", tagName, _ctx.$attrs)
    // //h(tagName, _ctx.$attrs, _ctx.$slots.default())
    // return (openBlock(), createBlock(tagName, _ctx.$attrs, [
    //   renderSlot(_ctx.$slots, "default",)
    // ], 16 /* FULL_PROPS */))
  }
}
</script>
