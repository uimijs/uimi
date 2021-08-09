<template>
  <div class="container">
    <div class="input-group input-group-lg mt-5">
      <button class="btn btn-outline-secondary input-group-text" type="button">
        <i class="fa fa-cloud-upload"></i></button
      ><button class="btn btn-outline-secondary input-group-text" type="button">
        GET</button
      ><input
        type="text"
        class="form-control border-secondary"
        v-model="url"
      /><button
        class="btn btn-primary input-group-text"
        type="button"
        id="button-send"
        @click="getResponse"
      >
        <i class="fa fa-check"></i>
      </button>
    </div>
    <div id="request">
      <h3 class="mt-4 mb-3">Request</h3>
      <ul class="nav nav-tabs">
        <li class="nav-item"><a class="nav-link active">Body</a></li>
        <li class="nav-item"><a class="nav-link">Header</a></li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane content-tab show active">
          <textarea class="form-control request-content" rows="4"></textarea>
        </div>
      </div>
    </div>
    <div id="response">
      <h3 class="mt-4 mb-3">Response</h3>
      <ul class="nav nav-tabs">
        <li class="nav-item"><a class="nav-link active">Body</a></li>
        <li class="nav-item"><a class="nav-link">Header</a></li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane show active content-tab">
          <div class="response-content"><pre v-text="response"></pre></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { global } from "uimi"
import { reactive, ref } from "vue"
export default {
  setup() {
    const serverData = reactive({
      url: "app/data",
      getResponse(server) {
        this.server = server
      },
    })
    const url = ref("data/index/test?id=2")
    const response = ref("")
    const getResponse = () => {
      global.http
        .get(url.value)
        .then(result => {
          response.value = result
        })
        .catch(function (error) {
          response.value = error
        })
    }

    return {
      url,
      response,
      getResponse,
    }
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
