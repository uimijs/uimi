<template>
  <ul class="nav flex-column" v-if="hasChild">
    <li class="nav-item" v-for="menu in data[childId]" :key="menu[idKey]">
      <a
        class="nav-link"
        :class="{ active: showId == menu[idKey] }"
        @click="clickMenu(menu), setActive(menu[idKey])"
      >
        <i class="fa fa-home" :style="marginLeft"></i>
        <span class="flex-fill" v-text="menu.name"></span>
        <i class="fa fa-angle-down" v-if="data.hasOwnProperty(menu[idKey])"></i>
      </a>
      <tree
        v-collapse="showId == menu[idKey]"
        v-bind="{
          accordion,
          level: level + 1,
          pid: menu[idKey],
          pidKey,
          data,
          clickMenu,
        }"
      ></tree>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType, computed, watch, ref, h, renderList, withDirectives, } from "vue";
import { collapse } from "@directives/collapse";
//纯粹为了好理解和树摇
import { initRefs } from "@utils/proxy";
const treeData = {
  init() {
    initRefs(this, "show")
  },
  show: <Indexable<any>>{},
  updateShow(this: Indexable<any>, pid: string | number, id: string) {
    this.show[pid] = this.show[pid] !== id ? id : "-1";
  },
}
//tree
export default defineComponent({
  name: "Tree",
  props: {
    pid: {
      type: [Number, String],
      default: 0,
    },
    level: {
      type: Number,
      default: 0,
    },
    idKey: {
      type: String,
      default: "id",
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
    accordion: {//手风琴模式
      type: Boolean,
      default: false,
    },
  },
  directives: {
    collapse
  },
  setup(props) {
    treeData.init()
    const childId = props.pid
    const hasChild = computed(() => props.data.hasOwnProperty(childId));
    const marginLeft = props.level > 0 ? { "margin-left": props.level + "em" } : {};
    const showId = ref();
    const setActive = (id: string) => {
      if (props.accordion) treeData.updateShow(props.pid, id)
      else showId.value = id
    }
    if (props.accordion) watch(
      () => treeData.show[props.pid], //检测本级的showid是否变更
      (val) => showId.value = val
    );
    return {
      childId,
      hasChild,
      showId,
      setActive,
      marginLeft,
    };
  },
});

</script>
