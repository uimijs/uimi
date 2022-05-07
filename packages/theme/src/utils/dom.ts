const is_window = typeof window != 'undefined'
export const getTransitionTime = (el: HTMLElement) => {
  const getTimeout = (delays: string, durations: any[]) => {
    while (delays.length < durations.length) {
      delays = delays.concat(delays)
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])))
  }
  const toMs = (s: string) => Number(s.slice(0, -1).replace(',', '.')) * 1000
  const styles = window.getComputedStyle(el)
  const getStyleProperties = (key: string) => (styles[key] || '').split(', ')
  const transitionDelays = getStyleProperties('transitionDelay')
  const transitionDurations = getStyleProperties('transitionDuration')
  const transitionTimeout = getTimeout(transitionDelays, transitionDurations)
  const animationDelays = getStyleProperties('animationDelay')
  const animationDurations = getStyleProperties('animationDuration')
  const animationTimeout = getTimeout(animationDelays, animationDurations)
  const timeout = Math.max(transitionTimeout, animationTimeout)
  return timeout
}
//requestAnimationFrame是浏览器用于定时循环操作的一个接口，类似于setTimeout，主要用途是按帧对网页进行重绘
export const requestAnimFrame = is_window
  ? window.requestAnimationFrame || ((callback) => setTimeout(callback, 1000 / 60))
  : null

export const hasOwnProperty = Object.prototype.hasOwnProperty
export const hasOwn = (val: any, key: any) => hasOwnProperty.call(val, key)
export const isArray = Array.isArray
export const isMap = (val: any) => toTypeString(val) === '[object Map]'
export const isSet = (val: any) => toTypeString(val) === '[object Set]'
export const isDate = (val: any) => val instanceof Date
export const isFunction = (val: any) => typeof val === 'function'
export const isString = (val: any) => typeof val === 'string'
export const isSymbol = (val: any) => typeof val === 'symbol'
export const isObject = (val: any) => val !== null && typeof val === 'object'
export const isPromise = (val: Promise<any>) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}
export const objectToString = Object.prototype.toString
export const toTypeString = (value: any) => objectToString.call(value)

//const tokenTime = 2 * 60 * 60 * 1000
export function resolveJsonParse(str: string) {
  try {
    return JSON.parse(str)
  } catch (e) {
    return str
  }
}
// export const createScript = (function (oHead) {
//   function loadError(oError) {
//     throw new URIError("The script " + oError.target.src + " is not accessible.");
//   }
//   return function (sSrc, fOnload) {
//     var oScript = document.createElement("script");
//     //oScript.type = "text\/javascript";
//     oScript.onerror = loadError;
//     if (fOnload) { oScript.onload = fOnload; }
//     oHead.appendChild(oScript);
//     oScript.src = sSrc;
//   }
// })(document.head || document.getElementsByTagName("head")[0]);
