<template>
  <div class="container-fluid pt-2">
    <div
      class="card shadow-sm mb-2"
      v-for="btnGroup in btnData"
      :key="btnGroup"
    >
      <div class="card-body clearfix">
        <div class="float-start">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-light"
              v-for="btn in btnGroup['left']"
              :key="btn"
              v-text="btn.name"
            ></button>
          </div>
        </div>
        <div class="float-end" v-if="btnGroup['right']">
          <div
            class="btn-group"
            v-if="btnGroup['right'][0]['type'] == 'default'"
          >
            <button type="button" class="btn btn-light">高级查询</button>
          </div>
          <div
            class="input-group"
            v-if="btnGroup['right'][0]['type'] == 'fast'"
          >
            <input type="text" class="form-control" style="min-width: 280px" />
            <span class="input-group-text bg-light">快速查询</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card shadow-sm mb-2">
      <div class="card-body">
        <div class="d-flex mb-2">
          <div class="btn-group">
            <button type="button" class="btn btn-primary">新增</button>
            <button type="button" class="btn btn-success">修改</button>
            <button type="button" class="btn btn-danger">删除</button>
          </div>
          <ui-pagination
            class="ms-auto mb-0"
            :total="reportData.total"
            :pageSizes="reportData.per_page"
            :currentPage="reportData.current_page"
            :pageCount="reportData.last_page"
            :onPagerClick="onPagerClick"
          ></ui-pagination>
        </div>
        <div class="table-responsive">
          <ui-table :data="tableData"> </ui-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { global } from "uimi"
import { ref, reactive } from "vue"
export default {
  setup() {
    const btnData = ref([
      {
        left: [
          { name: "待指派", sql: "" },
          { name: "已指派" },
          { name: "已接受" },
          { name: "进行中" },
          { name: "异常工单" },
          { name: "未完成工单" },
          { name: "已完成工单" },
        ],
        right: [
          {
            type: "default",
          },
        ],
      },
      {
        left: [
          { name: "全部" },
          { name: "我创建的" },
          { name: "我负责的" },
          { name: "我协同的" },
        ],
        right: [
          {
            type: "fast",
          },
        ],
      },
    ])
    const tableData = ref({})
    const reportData = ref({
      total: 0,
      per_page: 20,
      current_page: 1,
      last_page: 1,
      data: {},
    })

    const onPagerClick = (page, pageSize) => {
      global.http
        .get("data/index/test", { params: { id: 2, page, pageSize } })
        .then(result => {
          console.log(result)
          tableData.value = result.data.data
          reportData.value = result.data
        })
        .catch(function (error) {
          console.log(error)
        })

      //alert(page)
    }
    onPagerClick()
    return {
      btnData,
      tableData,
      reportData,
      onPagerClick,
    }
  },
}
</script>
