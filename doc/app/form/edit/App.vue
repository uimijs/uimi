<template>
  <p>
    <button class="btn btn-primary" type="button" @click="show = !show">
      Toggle second element
    </button>
  </p>

  <ui-collapse>
    <div v-show="show">
      <div class="card card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
        labore wes anderson cred nesciunt sapiente ea proident.Anim pariatur
        cliche reprehenderit, enim eiusmod high life accusamus terry richardson
        ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
        cred nesciunt sapiente ea proident.Anim pariatur cliche reprehenderit,
        enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident.Anim pariatur cliche reprehenderit, enim eiusmod
        high life accusamus terry richardson ad squid. Nihil anim keffiyeh
        helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
        proident.Anim pariatur cliche reprehenderit, enim eiusmod high life
        accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica,
        craft beer labore wes anderson cred nesciunt sapiente ea proident.Anim
        pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident.Anim pariatur cliche
        reprehenderit, enim eiusmod high life accusamus terry richardson ad
        squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
        cred nesciunt sapiente ea proident.Anim pariatur cliche reprehenderit,
        enim eiusmod high life accusamus terry richardson ad squid. Nihil anim
        keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident.Anim pariatur cliche reprehenderit, enim eiusmod
        high life accusamus terry richardson ad squid. Nihil anim keffiyeh
        helvetica, craft beer
      </div>
    </div>
  </ui-collapse>
</template>
<script>
import LeftMenu from "./LeftMenu.vue"
import { ref } from "vue"
export default {
  components: { LeftMenu },
  setup() {
    const show = ref(false)
    return {
      show,
    }
  },
}
</script>
<style lang="scss" scoped>
@import "./app.scss";
@import "./paper.scss";
</style>
