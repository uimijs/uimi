<template>
  <div class="container-fluid">
    <div class="row">
      <div class="d-flex col" style="max-width: 20rem">
        <div
          class="flex-fill w-100 card"
          style="overflow-y: scroll; height: calc(100vh - 3rem)"
        >
          <div class="card-header">
            <div class="card-actions float-right">
              <div class="dropdown">
                <a aria-haspopup="true" class aria-expanded="false">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </a>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  class="dropdown-menu dropdown-menu-right"
                >
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Another Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Something else here
                  </button>
                </div>
              </div>
            </div>
            <!--名称-->
            <h5 class="mb-0 card-title">工作流分类</h5>
          </div>
          <div class="card-body py-0">
            <input type="text" class="form-control mb-3" placeholder="搜索" />
            <!--结构-->
            <ui-tree
              :data="flowList"
              pidKey="parentid"
              pid="0"
              :clickMenu="getFlow"
              accordion
            ></ui-tree>
          </div>
        </div>
      </div>
      <div class="d-flex col">
        <div class="flex-fill w-100 card">
          <div class="card-header">
            <div class="card-actions float-right">
              <div class="dropdown">
                <a aria-haspopup="true" class aria-expanded="false">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="12" r="1" />
                  </svg>
                </a>
                <div
                  tabindex="-1"
                  role="menu"
                  aria-hidden="true"
                  class="dropdown-menu dropdown-menu-right"
                >
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Another Action
                  </button>
                  <button
                    type="button"
                    tabindex="0"
                    role="menuitem"
                    class="dropdown-item"
                  >
                    Something else here
                  </button>
                </div>
              </div>
            </div>
            <h5 class="mb-0 card-title">流程列表</h5>
          </div>
          <div class="card-body py-0">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>流程ID</th>
                    <th>流程类别</th>
                    <th>流程名称</th>
                    <th>描述</th>
                    <th>排序</th>
                    <th>状态</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(tr, index) in Flow" :key="index">
                    <td v-text="tr.id"></td>
                    <td v-text="tr.sort_id"></td>
                    <td v-text="tr.flow_name"></td>
                    <td v-text="tr.flow_desc"></td>
                    <td v-text="tr.sort_order"></td>
                    <td v-text="tr.status"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center">
              <ui-pagination
                class="ms-auto mb-0"
                :pagerCount="5"
                :currentPage="3"
                :pageCount="10"
              ></ui-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, markRaw, reactive, onMounted, getCurrentInstance } from "vue"
//import yunxi from "@yunxioa/api"
export default {
  setup() {
    const internalInstance = getCurrentInstance()
    //console.log(internalInstance.appContext.config.globalProperties)
    const http = getCurrentInstance().appContext.config.globalProperties.$http
    const flowList = ref({})

    const Flow = ref({})
    const depid = ref("-1")
    // http
    //   .get("/auth")
    //   .then(result => {
    //     console.log(result)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    http
      .get("/workflow/index/list")
      .then(result => {
        if (result.errcode === 0) {
          flowList.value = result.data
          console.log(flowList.value)
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    function getFlow(menu) {
      console.log(menu)
      http
        .get("/workflow/index/getflow", { params: { id: menu.id } })
        .then(result => {
          if (result.errcode === 0) {
            Flow.value = result.data
            console.log(Flow.value)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    return {
      flowList,
      Flow,
      // depid,
      getFlow,
    }
  },
}
</script>
<style lang="scss">
.tree {
  .nav-link {
    //display: inline-block;
    padding: 0.5rem 0;
    .fa {
      margin-right: 0.25rem;
      width: 1.25em;
      text-align: center;
    }
  }
  .fa-angle-down {
    right: 0;
    top: 0.75rem;
  }
}
.table th,
.table td {
  vertical-align: middle;
}
</style>
