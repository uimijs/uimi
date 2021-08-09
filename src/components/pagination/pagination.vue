<template>
  <ul class="pagination">
    <li class="d-flex align-items-center me-2">
      <span class="mx-1"
        >共<span class="text-primary mx-1" v-text="total"></span>条
      </span>
      <span>第</span>
      <input
        class="form-control mx-1"
        style="height: 20px; width: 32px"
        value="1"
      />
      <span>/<span class="text-primary mx-1" v-text="pageCount"></span>页</span>
    </li>
    <li
      class="page-item"
      v-for="page in pagers"
      :key="page"
      :class="{ active: page.active, disabled: page.disabled }"
    >
      <a
        class="page-link"
        v-html="page.text || page.page"
        @click="onPagerClick(page.page)"
      ></a>
    </li>
    <li class="ms-1">
      <Dropdown>
        <a class="page-link dropdown-toggle">{{ pageSize }}条/页</a>
        <DropdownMenu class="dropdown-menu-end">
          <a
            class="dropdown-item"
            v-for="text in pageSizes"
            :key="text"
            v-text="text"
          ></a>
        </DropdownMenu>
      </Dropdown>
    </li>
  </ul>
</template>
<script lang="ts">
import { computed } from "vue"
import { Icon } from "@components/icon"
import { Dropdown, DropdownMenu } from "@components/dropdown"
export default {
  name: "Pagination",
  components: {
    Dropdown,
    DropdownMenu,
    Icon,
  },
  props: {
    total: Number, //总条目数
    pageCount: Number, //总页数
    currentPage: Number, //当前页数
    pageSize: { type: Number, default: 20 }, //每页显示条目个数
    pageSizes: { type: Object, default: [20, 40, 60, 80, 100] }, //每页显示条目个数
    pagerCount: { type: Number, default: 5 }, //页码按钮数量
    hiddenMore: Boolean,
    onPagerClick: { type: Function },
  },
  setup(props) {
    const pagers = computed(() => {
      const currentPage = props.currentPage
      const pagerCount = props.pagerCount
      const pageCount = props.pageCount
      const pagers = []
      const step = Math.ceil(pagerCount / 2) - 1 //步长

      let start = currentPage - step
      if (start < 1) start = 1
      let end = start + pagerCount - 1
      if (end >= pageCount) end = pageCount

      start = end - pagerCount + 1
      if (start < 1) start = 1
      for (let i = start; i <= end; i++) {
        let arr: any = { page: i }
        if (props.currentPage == i) arr.active = true
        pagers.push(arr)
      }
      //add pager
      function addPagers(step, opts = []) {
        let pagerStart = currentPage - step
        if (pagerStart < 1) pagerStart = 1
        let left: any = { page: pagerStart }
        if (opts[0]) left.text = opts[0]
        if (pagerStart == currentPage) left.disabled = true
        if (pagerStart == start || 1) console.log("start多余")

        pagers.unshift(left)
        let pagerEnd = currentPage + step
        if (pagerEnd > pageCount) pagerEnd = pageCount
        let right: any = { page: pagerEnd }
        if (pagerEnd == currentPage) right.disabled = true
        if (opts[1]) right.text = opts[1]
        if (pagerEnd == end || pageCount) console.log("end多余")
        pagers.push(right)
      }
      //add
      addPagers(5, ["...", "..."])
      //add more
      addPagers(pageCount)
      // pagers.unshift({ page: 1 });
      // pagers.push({ page: pageCount });
      // //add next
      addPagers(1, [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ])

      console.log(start, end, pagers)
      return pagers
    })

    return {
      pagers,
    }
  },
}
</script>
