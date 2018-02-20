module.exports = function check(str, bracketsConfig) {
var b = str;
console.log(b);
//console.log(b.length);
//console.log(bracketsConfig);
b = b.split('');
var count = 0;
for (var i = 0; i < b.length; i++){
  if (b[i] === '5') {
    count++
  }
}
    console.log(count)

var c = b.length
while (c>1) {
  for (var i = 0; i < b.length; i++){
    if ((b[i] === "(" && b[i+1] === ")")
    || (b[i] === "[" && b[i+1] === "]")
    || (b[i] === "{" && b[i+1] ==="}")
    || (b[i] === "|" && b[i+1] ==="|")
    || Number(b[i]) && b[i] ==  b[i+1])
    b.splice(i,2)
    }

    c--
    var x = b.join("");
    console.log(x);
  }

if (b.length== 0) {console.log("true"); return true}
console.log("false");
return false
}
