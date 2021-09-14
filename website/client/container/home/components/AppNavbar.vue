<template>
  <ul class="navbar-nav me-auto">
    <li class="nav-item">
      <a class="nav-link" @click="showMinMenu">
        <i class="fa fa-dedent"></i>
      </a>
    </li>
  </ul>
  <ul class="navbar-nav">
    <!-- .app-bar-menu -->
    <li class="nav-item">
      <ui-dropdown>
        <a class="nav-link">
          <i class="fa fa-envelope"></i>
        </a>
        <span class="badge rounded-pill bg-danger">99+</span>
        <ui-dropdown-menu>
          <a class="dropdown-item">测试</a>
          <a class="dropdown-item">测试</a>
          <a class="dropdown-item">测试</a>
        </ui-dropdown-menu>
      </ui-dropdown>
    </li>
    <li class="nav-item">
      <ui-dropdown>
        <a class="nav-link">
          <i class="fa fa-bell"></i>
        </a>
        <span class="badge rounded-pill bg-danger">99+</span>
        <ui-dropdown-menu class="dropdown-menu-right">
          <a class="dropdown-item">测试</a>
          <a class="dropdown-item">测试</a>
          <a class="dropdown-item">测试</a>
        </ui-dropdown-menu>
      </ui-dropdown>
    </li>
    <li class="nav-item">
      <a class="nav-link">
        <i class="fa fa-cog"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link">
        <i class="fa fa-arrows-alt"></i>
      </a>
    </li>
  </ul>
</template>
<script>
import { computed, toRefs } from "vue"
export default {
  props: {},
  setup(props) {
    const showMinMenu = () => {
      document.querySelector(".sidebar").classList.toggle("sidebar-min")
    }
    return { showMinMenu }
  },
}
</script>
