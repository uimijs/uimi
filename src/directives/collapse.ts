export default {
  beforeMount(el: any, { value }: any) {
    el.classList.add("collapse")
    if (value) el.classList.add("show")
  },
  beforeUpdate(el: HTMLElement, { value, oldValue }: any) {
    if (!value === !oldValue) return;
    el.style.height = value ? "0" : el.scrollHeight + "px"
    el.classList.replace("collapse", "collapsing")
    el.classList.toggle("show")
  },
  updated(el: HTMLElement, { value, oldValue }: any) {
    if (!value === !oldValue) return;
    const styles: any = window.getComputedStyle(el);
    const timeout = Number(styles.transitionDuration.slice(0, -1).replace(',', '.')) * 1000;
    el.style.height = value ? el.scrollHeight + "px" : "0"
    setTimeout(() => {
      el.classList.replace("collapsing", "collapse")
      el.style.height = "";
    }, timeout);
  },
}
