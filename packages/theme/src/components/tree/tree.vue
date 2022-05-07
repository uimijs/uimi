<template>
  <component :is="tagName" :class="menuClass">
    <a
      v-if="menu"
      class="nav-link"
      :class="{ active: isActive }"
      @click="clickMenu(menu), setActive(menu[pidKey], menu.id)"
    >
      <Icon :name="icon" :style="marginLeft"></Icon>
      <span class="flex-fill" v-text="menu[nameKey]"></span>
      <Icon v-if="hasChild" name="angle-down"></Icon>
    </a>
    <ul v-if="hasChild" v-collapse="isActive" class="nav">
      <Tree
        v-for="(menuNext, id) in menuData[pid]"
        :key="id"
        v-bind="{
          level: level + 1,
          menu: menuNext,
          pid: menuNext[idKey],
          pidKey,
          clickMenu,
        }"
      ></Tree>
    </ul>
  </component>
</template>
<script lang="ts">
import { reactive, computed, watch, ref, toRefs } from 'vue'
import type { PropType } from 'vue'
import { Icon } from '&/components/icon'
import { collapse } from '&/directives/collapse'
class data {
  show: Indexable<any> = {}
  menuData: Indexable<any> = {}
  updateShow = (pid: string, id: string) => {
    this.show[pid] = this.show[pid] !== id ? id : '-1'
  }
}
const treeData = new data()

//tree
export default {
  name: 'Tree',
  components: {
    Icon,
  },
  directives: {
    collapse,
  },
  props: {
    class: {
      type: String,
      default: 'tree',
    },
    pid: {
      type: [Number, String],
      default: 0,
    },
    accordion: {
      //手风琴模式
      type: Boolean,
      default: true,
    },
    level: {
      type: Number,
      default: -1,
    },
    menu: {
      type: Object as PropType<Indexable<string>>,
    },
    idKey: {
      type: String,
      default: 'id',
    },
    pidKey: {
      type: String,
      default: 'pid',
    },
    nameKey: {
      type: String,
      default: 'name',
    },
    iconKey: {
      type: String,
      default: 'icon', //计划中
    },
    data: {
      type: Object as PropType<Indexable<string>>,
      //required: true,
    },
    clickMenu: Function,
  },
  setup(props) {
    const tree = reactive(treeData)
    const { menuData } = toRefs(tree)
    if (!props.menu) {
      const resolveMenu = (data: Indexable<any>) => {
        const menu = {}
        if (data) {
          const menu_length = data.length
          for (let i = 0; i < menu_length; i++) {
            const pid = data[i][props.pidKey]
            if (!menu[pid]) menu[pid] = []
            menu[pid].push(data[i])
          }
        }
        return menu
      }

      menuData.value = resolveMenu(props.data)
      watch(
        () => props.data,
        (newVal) => (menuData.value = resolveMenu(newVal))
      )
    }

    const tagName = props.menu ? 'li' : 'nav'
    const menuClass = props.menu ? 'nav-item' : props.class
    //因为在本组件内只有data是创建后会改变，所以一个带data的计算就能响应了
    const hasChild = computed(() => Object.prototype.hasOwnProperty.call(menuData.value, props.pid))
    const marginLeft = props.level > 0 ? { 'margin-left': `${props.level}em` } : {}
    const icon = props.menu ? props.menu[props.iconKey] : ''

    const isActive = ref(props.menu ? false : true)
    const setActive = (pid: string, id: string) => {
      if (props.accordion) tree.updateShow(pid, id)
      else isActive.value = !isActive.value
    }

    if (props.accordion && props.menu)
      watch(
        () => tree.show[props.menu[props.pidKey]], //检测本级的showid是否变更
        (showId) => (isActive.value = props.menu.id === showId)
      )
    return {
      menuData,
      tagName,
      menuClass,
      hasChild,
      isActive,
      setActive,
      icon,
      marginLeft,
    }
  },
}
</script>
