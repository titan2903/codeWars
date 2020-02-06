function fakeBin(x) {
    let str = x.split('')
    let finalStr = ''
    for (let i = 0; i < str.length; i++) {
        let ind = str[i]
        if (ind < 5) {
            ind = 0
            finalStr += ind
        } else {
            ind = 1
            finalStr += ind
        }
    }
    return finalStr
}

console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
2. ======>
function fakeBin(str){
  var newStr = "";
  for(var i=0;i<str.length;i++){
    if(Number(str[i])>=5){
      newStr += "1"
    }
    else{
      newStr += "0";
    }
  }
  return newStr;
}
3. ======>
function fakeBin(x){
  let result = '';
  for(let i = 0; i < x.length; i++){
    x[i] < 5 ? result += 0 : result += 1;
  }
  return result;
}
*/