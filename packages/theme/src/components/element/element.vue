<script lang="ts">
import { h } from 'vue'
export default {
  name: 'Element',
  props: {
    tag: { type: String, default: 'div' },
  },
  //inheritAttrs: false,
  render() {
    return h(this.tag, null, this.$slots)
  },
}
</script>
