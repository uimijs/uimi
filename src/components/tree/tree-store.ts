export const treeData: Indexable<any> = {
  show: {},
  updateShow(this: Indexable<any>, pid: string, id: string) {
    this.show[pid] = this.show[pid] !== id ? id : "-1";
  },
}
