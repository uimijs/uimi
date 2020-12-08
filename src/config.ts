export const prefix = "Ui"
export function toPascalCase(str:string) {
  var tf = str.split('-');
  var len = tf.length;
  //	console.log(tf);
  for (var i = 0; i < len; i++) {
    var k = tf[i].charAt(0);
    k = k.toUpperCase();
    tf[i] = tf[i].replace(tf[i].charAt(0), k);
    // console.log(tf[i]);
  }
  //	console.log(tf);
  str = '';
  for (var j = 0; j < len; j++) {
    str += tf[j];
  }
  // console.log(str);
  return str;
}
