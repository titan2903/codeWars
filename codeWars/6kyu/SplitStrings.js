function solution(str) {
    if (str.length % 2) {
        var newStr = str + '_';
    } else {
        var newStr = str.slice();
    }

    var arr = [];
    for (var i = 0; i < newStr.length; i += 2) {
        arr.push(newStr[i] + newStr[i + 1]);
    }
    return arr;
}


console.log(solution('abc')); // should return ['ab', 'c_']
console.log(solution('abcdef')); // should return ['ab', 'cd', 'ef']

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}
2. ======>
function solution(str){
  arr = [];
  for(var i = 0; i < str.length; i += 2){
    second = str[i+1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}
3. ======>
function solution(str){
console.log(str)
  let result = []
  for(let i = 0; i < str.length; i+=2){
    str[i+1] === undefined ? result.push(str[i] + '_') : result.push(str[i] + str[i+1])
  }
  return result
}
4. ===>
function solution(str){
  let output = []
  let temp = ''
  for (let i = 0; i < str.length; i += 2) {
    (i != str.length - 1) ? temp += str[i] + str[i + 1]: temp += `${str[i]}_`
    output.push(temp)
    temp = ''
  }
  return output
}
*/