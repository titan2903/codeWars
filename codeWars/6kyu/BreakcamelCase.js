// complete the function
function solution(string) {
  let newString = string.split('')
  // console.log(newString);

  let str = '';
  for (let i = 0; i < newString.length; i++) {
    if (/[A-Z]/.test(newString[i]) == true) {
      str += ' ' + newString[i]
    } else {
      str += newString[i]
    }
  }
  return str
}

console.log(solution('camelCasing'), 'camel Casing')

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}
2. ======>
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
3. ======>
function solution(string) {
    return string.split('').map(s => {
      if(s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90)
        return ' ' + s;
      else
        return s;
    }).join('');
}

*/