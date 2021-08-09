<template>
  <ul class="pagination">
    <li class="page-item me-1">
      <span class="page-link border-0">共 {{ pageCount }} 条</span>
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
    <li class="page-item ms-1">
      <a class="page-link dropdown-toggle">{{ pageSize }}条/页</a>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item">20条</a>
        <a class="dropdown-item">30条</a>
        <a class="dropdown-item">40条</a>
        <a class="dropdown-item">50条</a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    total: Number, //总条目数
    pageSize: { type: Number, default: 20 }, //每页显示条目个数
    pageCount: Number, //总页数
    currentPage: Number, //当前页数
    pagerCount: Number, //页码按钮数量
    hiddenMore: Boolean,
  },
  computed: {
    pagers() {
      const currentPage = this.currentPage
      const pagerCount = this.pagerCount
      const pageCount = this.pageCount
      const pagers = []
      const step = Math.ceil(pagerCount / 2) - 1 //步长

      let start = currentPage - step
      if (start < 1) start = 1
      let end = start + pagerCount - 1
      if (end >= pageCount) end = pageCount

      start = end - pagerCount + 1
      if (start < 1) start = 1
      for (let i = start; i <= end; i++) {
        let arr = { page: i }
        if (this.currentPage == i) arr.active = true
        pagers.push(arr)
      }
      //add pager
      function addPagers(step, opts = []) {
        let pagerStart = currentPage - step
        if (pagerStart < 1) pagerStart = 1
        let left = { page: pagerStart }
        if (opts[0]) left.text = opts[0]
        if (pagerStart == currentPage) left.disabled = true
        if (pagerStart == start || 1) console.log("start多余")

        pagers.unshift(left)
        let pagerEnd = currentPage + step
        if (pagerEnd > pageCount) pagerEnd = pageCount
        let right = { page: pagerEnd }
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
    },
  },
  methods: {
    onPagerClick(page) {
      this.currentPage = page
    },
  },
}
</script>
