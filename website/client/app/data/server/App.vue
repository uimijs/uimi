<template>
  <div class="alert alert-info">标签的参数很重要，非工程人员禁止修改！</div>
  <div class="container-fluid">
    <div class="card shadow-sm my-3">
      <div class="card-body clearfix">
        <div class="float-start">
          <div class="btn-group">
            <button type="button" class="btn btn-light">BOM标签修改</button
            ><button type="button" class="btn btn-light">工单标签修改</button
            ><button type="button" class="btn btn-light">BIN号标签修改</button>
          </div>
        </div>
        <div class="float-end">
          <!--v-if-->
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              style="min-width: 280px"
            /><span class="input-group-text bg-light">快速查询</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>品号</th>
              <th>品名</th>
              <th>规格</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
    <div class="alert alert-danger">
      查询结果仅显示前十条，更精准请输入完整的信息！
    </div>
    <button id="addtd" class="btn btn-primary">增加栏目</button>
    <button id="deltd" class="btn btn-primary">删除栏目</button>
    <button id="save" class="btn btn-primary">保存标签</button>
    <div class="row my-3">
      <div class="col-lg">
        <div class="card label ratio" style="width: 130mm; height: 90mm">
          <iframe
            src="labelset.html"
            frameborder="0"
            border="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
      <div class="col-lg">
        <div class="card label" style="width: 130mm; height: 90mm">
          <img
            class="img-fluid"
            id="lbimg"
            src="标签模板.png"
            onerror="onerror=null;src='标签模板.png'"
          />
        </div>
      </div>
    </div>
    <div class="alert alert-info">标签预览基本与实际一致，请注意字数设定！</div>
  </div>
</template>
<script>
import { global } from "uimi"
import { reactive } from "vue"
export default {
  setup() {
    const serverData = reactive({
      serverlist: {},
      server: {},
      checkserver(server) {
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
.avatar {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  margin-bottom: 0;
  text-align: center;
  font-size: 0.75rem;
  border-radius: 50%;
  background-color: #007bff;
  color: #fff;
  overflow: hidden;
  span {
    width: 1.5rem;
  }
  img {
    width: 100%;
    height: 100%;
    vertical-align: top;
  }
}
</style>
