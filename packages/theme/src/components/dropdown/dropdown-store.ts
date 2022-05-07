//纯粹为了好理解和树摇
export const dropdownData = {
  count: 0,
  showId: -1,
  getDropdownId() {
    this.count++
    return this.count
  },
  setShowId(id: number) {
    this.showId = id
  },
}
