<script lang="ts">
import {
  PropType,
  computed,
  reactive,
  watch,
  ref,
  h,
  resolveComponent,
  renderList,
  withDirectives,
} from "vue";
import vCollapse from "../../directives/collapse";
import { setToRefs } from "../../utils/proxy";
import { treeData } from "./tree-store";
export default {
  name: "TreeMenu",
  props: {
    pid: {
      type: [Number, String],
      default: 0,
    },
    accordion: {//手风琴模式
      type: Boolean,
      default: true,
    },
    level: {
      type: Number,
      default: -1,
    },
    menu: {
      type: Object as PropType<Indexable<string>>,
      default: {},
    },
    pidKey: {
      type: String,
      default: "pid",
    },
    data: {
      type: Object as PropType<Indexable<string>>,
      required: true,
    },
    clickMenu: Function,
  },
  setup(props) {
    setToRefs(treeData, "show")
    const hasMenu = props.menu.hasOwnProperty(props.pidKey);
    const tag = hasMenu ? "li" : "nav";
    const menuClass = hasMenu ? "nav-item" : "tree";
    const childId = hasMenu ? props.menu.id : props.pid;
    const hasChild = computed(() => props.data.hasOwnProperty(childId));
    const isActive = ref(hasMenu ? false : true);
    const setActive = (pid: string, id: string) => {
      treeData.updateShow(pid, id)
      isActive.value = !isActive.value
    }
    if (props.accordion) {
      watch(
        () => treeData.show[props.menu[props.pidKey]], //检测本级的showid是否变更
        (showId) => (isActive.value = props.menu.id === showId)
      );
    }
    const marginLeft =
      props.level > 0 ? { "margin-left": props.level + "em" } : {};

    return {
      hasMenu,
      tag,
      menuClass,
      childId,
      hasChild,
      isActive,
      setActive,
      marginLeft,
    };
  },
  render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_tree_menu = resolveComponent("tree-menu");
    const { level, pidKey, menu, data, clickMenu } = $props;
    const { hasMenu, tag, menuClass, childId, hasChild, isActive, setActive, marginLeft, } = $setup;

    const aMenu = hasMenu
      ? h("a",
        {
          key: 0,
          class: ["nav-link", { active: isActive }],
          onClick: _cache[1] || (_cache[1] = () => (clickMenu(menu), setActive(menu[pidKey], menu.id))),
        },
        [
          h("i", { class: "fa fa-home", style: marginLeft }),
          h("span", menu.name),
          hasChild ? h("i", { class: "fa fa-angle-down" }) : "",
        ]
      )
      : "";
    const ulMenu = hasChild
      ? withDirectives(
        h("ul", { class: "nav" },
          renderList(data[childId],
            menu => h(_component_tree_menu, { key: menu.id, level: level + 1, menu, pidKey, data, clickMenu, })
          )
        ),
        [[vCollapse, isActive]])
      : "";
    console.log("tree性能测试");
    return h(tag, { class: menuClass }, [aMenu, ulMenu]);
  },
};
</script>
