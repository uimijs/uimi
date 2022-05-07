<template>
  <div class="edit">
    <header class="navbar badge-primary px-5">
      <div>单据设置页面测试</div>
    </header>

    <div class="section">
      <!--left-->
      <left-menu></left-menu>
      <main class="center col scrollbar">
        <div class="page"></div>
      </main>
      <aside class="right scrollbar">
        <div class="form-group mt-2">
          <div
            class="input-group input-group-sm"
            data-toggle="collapse"
            data-target="#tree"
          >
            <input
              type="text"
              class="form-control"
              id="sub_items"
              child_data
              readonly
            />
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fa fa-chevron-down"></i>
              </span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
import LeftMenu from "./LeftMenu.vue"

export default {
  components: { LeftMenu },
}
</script>
<style lang="scss" scoped>
@import "./app.scss";
@import "./paper.scss";
</style>
