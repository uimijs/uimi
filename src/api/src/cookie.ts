
const set = (key: string, value: string, time: number, path = "/") => {
  let expire = ""
  if (time) {
    let data = new Date();
    data.setTime(data.getTime() + time);
    expire = ";expires=" + data.toUTCString() + ';path=' + path
  }
  document.cookie = key + "=" + value + expire
}
const get = (key: string) => {
  var arr: string[], reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) return (arr[2]);
  return undefined;
}
const remove = (key: string, path = "/") => {
  var data = new Date();
  data.setTime(data.getTime() - 1);
  var cval = get(key);
  if (cval != undefined) document.cookie = key + "=" + cval + ";expires=" + data.toUTCString() + ';path=' + path
}
export const cookie = {
  set,
  get,
  remove
}
