

module.exports = function check(str, bracketsConfig) {
  var b = str;
  b = b.split('');
  var c = b.length
  while (c>1) {
  for (var i = 0; i < b.length; i++){
  for (var j = 0; j < bracketsConfig.length; j++){
  if ((b[i] === bracketsConfig[j][0]) && (b[i+1] === bracketsConfig[j][1])){
  b.splice(i,2)
  }
  }
  }
  c=c-2
  var x = b.join("");
  if (b.length == 0) {return true}
  }
  return false
  }
