<script lang="ts">
import { h } from "vue";
export default {
  name: "Avatar",
  props: {
    tag: { type: String, default: "span" },
    src: String,
    icon: String,
    name: { type: String, default: "" },
    size: { type: String },
    rounded: { type: String, default: "circle" }, //圆角样式
    theme: { type: String, default: "primary" }, //主题颜色
  },
  render(_ctx, _cache, $props, $setup, $data, $options) {
    const { tag, src, icon, name, size, rounded, theme } = $props;
    return h(
      tag,
      {
        class: ["avatar", `rounded-${rounded}`, !src ? `badge-${theme}` : ""],
        style: size ? { width: size, height: size } : {},
      },
      icon
        ? h("i", { class: icon })
        : src
          ? h("img", { class: ["img-fluid"], src: src })
          : h("span", { class: ["small"] }, name.slice(-2))
    );
  },
};
</script>
