function include(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true
    }
  }
  return false
}

console.log(include([1, 2, 3, 4], 3), true)
console.log(include([1, 2, 4, 5], 3), false)


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function include(arr, item){
  return arr.includes(item);
}
2. ======>
function include(arr, item) {
  return arr.indexOf(item) >= 0;
}
3. ======>
function include(arr, item){
  return arr.some(n=>n===item);
}
*/