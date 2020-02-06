let replaceDots = function (str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '.') {
            str = str.replace('.', '-');
        }
    }
    return str
}


console.log(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
var replaceDots = function (s) {
  return s.replace(/\./g, '-');
};
2. ======>
var replaceDots = function(str) {
  return str.split('').map((ele)=>{
  if(ele==='.'){return '-'}else {return ele}
  }).join('')
}
3. ======>
var replaceDots = function(str) {
  var arr = [];
  var arr = str.split('');

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == '.') {
      arr[i] = '-';
    }
  }
  var str2 = arr.join(''); 
  console.log(str2);
  console.log(arr);
  return str2;
 
}
*/