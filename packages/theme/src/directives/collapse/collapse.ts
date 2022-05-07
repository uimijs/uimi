import { getTransitionTime, requestAnimFrame } from '&/utils/dom'
export default {
  beforeMount(el: HTMLElement, { value }: any) {
    el.classList.add('collapse')
    if (value) el.classList.add('show')
  },
  beforeUpdate(el: HTMLElement, { value, oldValue }: any) {
    if (!value === !oldValue) return
    if (value) (el.style.height = '0'), el.classList.add('show')
    else el.style.height = `${el.scrollHeight}px`
    el.classList.replace('collapse', 'collapsing')
  },
  updated(el: HTMLElement, { value, oldValue }: any) {
    if (!value === !oldValue) return
    //渲染时间够了就不用请求size了
    //防止丢帧卡顿
    requestAnimFrame(() => (el.style.height = value ? `${el.scrollHeight}px` : '0'))
    const timeout = getTransitionTime(el)
    setTimeout(() => {
      if (!value) el.classList.remove('show')
      el.classList.replace('collapsing', 'collapse')
      el.style.height = ''
    }, timeout)
  },
}
