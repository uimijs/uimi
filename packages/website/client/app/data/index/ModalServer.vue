<template>
  <div class="modal fade" :class="{ show: server.show }">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5
            class="modal-title"
            v-text="'数据源：' + (server.name || '')"
          ></h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <div class="row mb-2">
            <label class="col-form-label col-8">数据源名称</label>
            <div class="col-12">
              <input type="text" class="form-control" v-model="server.name" />
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-form-label col-8">数据库类型</label>
            <div class="col-12">
              <select class="form-control" v-model="server.type">
                <option value="mysql">MySQL</option>
                <option value="sqlsrv">SqlServer</option>
                <option value="oracle">Oracle</option>
                <option value="sqlite">SqLite</option>
                <option value="pgsql">PostgreSQL</option>
                <option value="mongo">MongoDb</option>
              </select>
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-form-label col-8">数据库地址</label>
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                v-model="server.hostname"
              />
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-form-label col-8">数据库端口</label>
            <div class="col-12">
              <input
                type="number"
                class="form-control"
                v-model.number="server.hostport"
              />
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-form-label col-8">数据库用户名</label>
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                v-model="server.username"
              />
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-form-label col-8">密码</label>
            <div class="col-12">
              <input
                type="password"
                class="form-control"
                v-model="server.password"
              />
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-form-label col-8">默认库名称</label>
            <div class="col-12">
              <input
                type="text"
                class="form-control"
                v-model="server.database"
              />
            </div>
          </div>
          <div class="row mb-2">
            <label class="col-form-label col-8">数据库编码格式</label>
            <div class="col-12">
              <select class="form-control" v-model="server.charset">
                <option value="">默认</option>
                <option value="utf8">utf8</option>
                <option value="gbk">gbk</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="saveServer">
            保存设置
          </button>
          <button type="button" class="btn btn-primary" @click="testServer">
            测试链接
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { toRef } from "vue"
export default {
  props: {
    server: {},
  },
  setup(props) {
    const closeModal = () => {
      props.server.show = false
    }
    const testServer = () => {
      console.log(props.server)
    }
    const saveServer = () => {
      console.log(props.server)
    }
    return {
      closeModal,
      testServer,
      saveServer,
    }
  },
}
</script>
