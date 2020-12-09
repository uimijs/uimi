//纯粹为了好理解和树摇
import { initRefs } from "../../utils/proxy";
export const dropdownData = {
  init() {
    initRefs(this, "show")
  },
  show: {
    list: 0,
    id: -1
  },
}

