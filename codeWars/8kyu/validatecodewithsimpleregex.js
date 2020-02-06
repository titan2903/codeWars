function validateCode(code) {
    var str = code.toString()
    if (str[0] === "1" || str[0] === "2" || str[0] === "3") {
        return true
    }
    return false
}




console.log(validateCode(123), true);
console.log(validateCode(248), true);
console.log(validateCode(8), false);
console.log(validateCode(321), true);
console.log(validateCode(9453), false);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function validateCode (code) {return /^[123]/.test(code)}
2. ======>
function validateCode (number) {
  var validate = number
    .toString()
    .charAt(0)
    .match(/[1-3]/g);
  
  if(validate) {
    return true;
  } else {
    return false;
  }
}
3. ======>
function validateCode (code) {
  let res = (code + '').split('')[0];
  return (res => 1) && (res < 4);
}
*/