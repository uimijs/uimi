import PerfectScrollbar from 'perfect-scrollbar'

const elScrollBar = (el) => {
  if (el._ps_ instanceof PerfectScrollbar) {
    el._ps_.update()
  } else {
    el._ps_ = new PerfectScrollbar(el, { suppressScrollX: true })
  }
}
export default {
  inserted(el: Element) {
    const rules = ['fixed', 'absolute', 'relative']
    if (!rules.includes(window.getComputedStyle(el, null).position)) {
      console.error(`perfect-scrollbar所在的容器的position属性必须是以下之一：${rules.join('、')}`)
    }
    elScrollBar(el)
  },
  componentUpdated(el: Element, binding: any, vnode: any) {
    try {
      vnode.context.$nextTick(() => {
        elScrollBar(el)
      })
    } catch (error) {
      console.error(error)
      elScrollBar(el)
    }
  },
}
