//纯粹为了好理解和树摇
import { initRefs } from "../../utils/proxy";
export const treeData = {
  init() {
    initRefs(this, "show")
  },
  show: <Indexable<any>>{},
  updateShow(this: Indexable<any>, pid: string, id: string) {
    this.show[pid] = this.show[pid] !== id ? id : "-1";
  },
}
