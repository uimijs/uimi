<script lang="ts">
import { h, renderSlot } from 'vue'
export default {
  name: "TableRow",
  props: {
    tag: { type: String, default: "div" },
    attr: Object,
    data: Object,
  },
  setup(props) {

  },
  render(_ctx) {
    const { tag, attr, data, } = _ctx
    return h(tag, attr, [renderSlot(_ctx.$slots, "default", {}, () => [
      data
    ])
    ])
  }
}
</script>
