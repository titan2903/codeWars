function repeatStr(n, s) {
  var a = [];
  while (a.length < n) {
    a.push(s);
  }
  return a.join('');
}


console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");

/*
Cara Orang lain:

function repeatStr (n, s) {
  return s.repeat(n);
}

function repeatStr (n, s) {
var str="";
for(var i=0; i < n; i++)
  str+=s;
  return str;
}


repeatStr = (n, s) => s.repeat(n)
*/