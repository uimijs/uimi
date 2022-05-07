<template>
  <div class="container-fluid">
    <div class="d-flex">
      <div
        class="flex-fill card"
        style="max-width: 20rem; height: calc(100vh - 20px)"
      >
        <div class="card-header">
          <div class="card-actions float-end">
            <div class="dropdown">
              <a>
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
            </div>
          </div>

          <h5 class="mb-0 card-title">数据源管理</h5>
        </div>
        <div class="card-body">
          <div class="d-grid gap-2">
            <button
              type="button"
              class="btn btn-outline-info mb-2"
              @click="createServer"
            >
              新建数据源
            </button>
          </div>
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(item, index) in serverlist"
              :key="index"
              :class="{ active: item == server }"
              @click="checkServer(item)"
            >
              <i class="fa fa-database me-2" aria-hidden="true"></i>
              <span v-text="item.name"></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-fill card mx-2">
        <div class="card-header border-bottom mb-2">
          <div class="card-actions float-end">
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
            </div>
          </div>
          <h5 class="mb-0 card-title">数据源</h5>
        </div>
        <div class="card-body"></div>
      </div>
    </div>
    <modal-server :server="server"></modal-server>
  </div>
</template>
<script>
import { global } from "uimi"
import { reactive } from "vue"
import ModalServer from "./ModalServer.vue"
export default {
  components: {
    ModalServer,
  },
  setup() {
    const serverData = reactive({
      serverlist: {},
      server: {},
      createServer() {
        this.server = {
          show: true,
        }
      },
      checkServer(server) {
        server.show = true
        this.server = server
      },
    })

    global.http
      .get("/data/server/list")
      .then(result => {
        if (result.errcode === 0) {
          serverData.serverlist = result.data
        }
      })
      .catch(function (error) {
        console.log(error)
      })
    return serverData
  },
}
</script>
<style lang="scss">
.tree {
  .nav-link {
    .fa {
      margin-right: 0.25rem;
      width: 1.25em;
      text-align: center;
    }
  }
  .has-child {
    &:before {
      border-width: 0.1rem 0.1rem 0 0;
    }

    &.active:before {
      transform: rotate(135deg);
      top: 1.125rem;
    }
  }
}
.table th,
.table td {
  vertical-align: middle;
}
.list-group-item {
  cursor: pointer;
}
.col-form-label {
  text-align: right;
}
</style>
