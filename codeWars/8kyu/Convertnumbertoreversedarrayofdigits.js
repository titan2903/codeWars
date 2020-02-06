function digitize(n) {
    //code here
    var str = String(n)
    var arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(Number(str[i]))
    }

    var tempArr = [];
    for (let j = arr.length - 1; j >= 0; j--) {
        tempArr.push(arr[j])
    }
    return tempArr

}

console.log(digitize(35231), [1, 3, 2, 5, 3]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}
2. ======>
function digitize(n) {
  //code here
  let numArr = [];
  
  while(n > 0){
    numArr.push(n % 10);
    
    n = Math.floor(n/10);
  }
  
  return numArr;
}
3. ======>
const digitize = n => `${n}`.match(/\d/g).reverse().map(n=>Number(n))
*/