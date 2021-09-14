<script lang="ts">
import { openBlock, createBlock, renderSlot, Fragment } from "vue";
export default {
  name: "Element",
  props: {
    tagName: { type: String, default: "div" },
    render: { type: Function}
  },
  //inheritAttrs: false,
  render(_ctx, _cache, $props, $setup, $data, $options) {
    if(typeof($props.render)== 'function' )    return $props.render(_ctx, _cache, $props, $setup, $data, $options)
    const tagName = ($props.tagName == "Fragment") ? Fragment : $props.tagName
    return (openBlock(), createBlock(tagName, _ctx.$attrs, [
        renderSlot(_ctx.$slots, "default")
      ], 16 /* FULL_PROPS */))
  }
}
</script>
