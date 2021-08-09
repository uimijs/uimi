import { hasOwn, resolveJsonParse, isObject } from "@utils/dom";
import { cookie } from "./cookie";
export const getCache = (type: string, key: string, defaultValue: any) => {
  if (type == 'cookie') return resolveJsonParse(cookie.get(key)) || defaultValue;
  if (type == 'local') return resolveJsonParse(window.localStorage.getItem(key)) || defaultValue
  if (type == 'session') return resolveJsonParse(window.sessionStorage.getItem(key)) || defaultValue
}
export const setCache = (type: string, key: string, value: any) => {
  if (type == 'cookie') cookie.set(key, JSON.stringify(value), 2 * 60 * 60 * 1000);
  if (type == 'local') window.localStorage.setItem(key, JSON.stringify(value))
  if (type == 'session') window.sessionStorage.setItem(key, JSON.stringify(value))
}
export function createLocalStorage(cof = {}) {
  const target = {}
  for (var key in cof) {
    const defaultValue = getCache(cof[key].type, key, cof[key].default)
    if (typeof cof[key].default == "object") {
      target[key] = new Proxy(defaultValue, {
        set(target, xkey: string, value, receiver) {
          const ret = Reflect.set(target, xkey, value)
          setCache(cof[key].type, key, target)
          //console.log("set....", key, xkey, value, target)
          return ret
        },
      })
    } else {
      target[key] = defaultValue
    }
  }
  console.log("target", target)
  return new Proxy(target, {
    // get(target, key: string, receiver) {
    //   console.log("get", key)
    //   // if (hasOwn(cof, key)) {
    //   //   return getCache(cof[key].type, key, cof[key].default)
    //   // }
    //   return Reflect.get(target, key)
    // },
    set(target, key: string, value, receiver) {
      //console.log("set", key, value)
      const ret = Reflect.set(target, key, value)
      if (hasOwn(cof, key)) setCache(cof[key].type, key, value)
      return ret
    },
    // deleteProperty(target, propKey) {
    //   return true
    // }
  })
}
