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
            <!--公司名称-->
            <h5 class="mb-0 card-title" v-text="corpname"></h5>
          </div>
          <div class="card-body py-0">
            <input type="text" class="form-control mb-3" placeholder="搜索" />
            <!--组织结构-->
            <ui-tree
              :data="depList"
              pidKey="parentid"
              pid=1
              :clickMenu="getUsers"
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
            <h5 class="mb-0 card-title">部门用户</h5>
          </div>
          <div class="card-body py-0">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th colspan="2">姓名</th>
                    <th>职位</th>
                    <th>工号</th>
                    <th>手机</th>
                    <th>邮箱</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(tr, index) in users" :key="index">
                    <td>
                      <ui-avatar :src="tr.avatar" :name="tr.name"></ui-avatar>
                    </td>
                    <td v-text="tr.name"></td>
                    <td v-text="tr.position"></td>
                    <td v-text="tr.jobnumber"></td>
                    <td v-text="tr.mobile"></td>
                    <td v-text="tr.email"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="d-flex justify-content-center">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#">
                    <i class="fa fa-angle-left"></i>
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">•••</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">100</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    <i class="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
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
    const depList = ref({})
    const corpname = ref("")
    const users = ref({})
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
      .get("/main/department/list")
      .then(result => {
        if (result.errcode === 0) {
          depList.value = result.data
          console.log(depList.value)
          corpname.value = result.data[0].name
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    function getUsers(menu) {
      //获取部门用户列表
      console.log(depid.value)
      if (depid.value != menu.id) {
        depid.value = menu.id
        http
          .get("/main/department/user", {
            params: {
              id: menu.id,
            },
          })
          .then(result => {
            console.log(result)
            if (result.errcode === 0) {
              users.value = markRaw(result.data)
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
    return {
      depList,
      corpname,
      users,
      // depid,
      getUsers,
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
