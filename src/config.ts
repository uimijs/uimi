export const prefix = "Ui"
export function test() {
  var str = "shouHou";
  //$1-第一个括号匹配的内容
  //这个实例，$1='H'
  str = str.replace(/([A-Z])/g, "-$1").toLowerCase();
  var str = "shou-hou";
  //$0-匹配的结果   $1-第一个括号匹配的内容
  //这个实例$0='-h' $1='h'
  str = str.replace(/-(\w)/g, function ($0, $1) {
    return $1.toUpperCase();
  });
}
