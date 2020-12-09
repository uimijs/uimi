import { isProxy, ref, reactive } from "vue";
export function initRefs(object: object, key: string) {
  if (!isProxy(object[key])) {
    //console.log("正在转换响应", object)
    object[key] = reactive(object[key])
  }
}
export function initRef(value: any) {
  if (!isProxy(value)) {
    console.log("正在转换响应", value)
    value = ref(value)
  }
}
