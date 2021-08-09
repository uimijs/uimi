 <template>
  <!-- .app-nav-card -->
  <nav class="nav-label d-flex p-1">
    <a class="btn">
      <ui-icon name="angle-left"></ui-icon>
    </a>
    <div class="nav col">
      <div
        class="nav-underline d-inline-flex flex-nowrap"
        style="transform: translateX(0)"
      >
        <a
          class="btn bg-white ms-1"
          v-for="(menu, index) in appItem"
          :key="menu.link"
          :class="{ active: index === appShow }"
          @click="showMenu(menu)"
        >
          <ui-icon name="refresh" @click="refresh(index)"></ui-icon>
          <span v-text="menu.name"></span>
          <ui-icon
            v-if="index"
            name="close"
            @click.stop="removeMenu(index)"
          ></ui-icon>
        </a>
      </div>
    </div>
    <a class="btn">
      <ui-icon name="angle-right"></ui-icon>
    </a>
    <a class="btn disabled">
      <ui-icon name="angle-down"></ui-icon>
    </a>
  </nav>
  <main class="app-body ratio">
    <iframe
      v-for="(menu, index) in appItem"
      :key="menu.link"
      v-show="index === appShow"
      :src="menu.link"
    >
    </iframe>
  </main>
</template>
<script>
import { useRoute, useRouter } from "vue-router"
import { ref, markRaw, watch, toRefs, computed } from "vue"
import { state , actions } from "../../store"
export default {
  props: {},
  setup(props) {
    const { userInfo, appMenu, appShow, appItem } = toRefs(state)
    const { showMenu, removeMenu } = actions
    const route = useRoute()
    const router = useRouter()
    const refresh = index => {
      const iframe = document.querySelectorAll(".app-body iframe")[index]
      iframe.contentWindow.location.reload(true)
    }
    return { appItem, appShow, refresh, showMenu, removeMenu }
  },
}
</script>
