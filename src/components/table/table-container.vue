<script lang="ts">
import { computed, toRefs, h, renderList } from "vue";
export default {
  name: "TableContainer",
  props: {
    tag: { type: String, default: "thead" },
    data: Object,
  },
  setup(props: any) {
    const valTag = props.tag == 'thead' ? "th" : "td"
    return {
      valTag
    };
  },
  render(_ctx) {
    const { tag, data, valTag } = _ctx
    return h(tag, {}, renderList(data, (tr) => {
      return h('tr', renderList(tr, (val) => {
        return h(valTag, val)
      }))
    }))
  }
};
</script>
