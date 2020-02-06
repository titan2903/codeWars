function firstReverseTry(arr) {
    //coding and coding..
    var temp = [];
    for (i = 0; i < arr.length; i++) {
        if (i == 0) {
            temp.push(arr[arr.length - 1])
        } else if (i == arr.length - 1) {
            temp.push(arr[0])
        } else {
            temp.push(arr[i])
        }
    }
    return temp
}



console.log(firstReverseTry([1, 2, 3, 4, 5]), [5, 2, 3, 4, 1])
console.log(firstReverseTry([]), [])
console.log(firstReverseTry([111]), [111])
console.log(firstReverseTry([23, 54, 12, 3, 4, 56, 23, 12, 5, 324]), [324, 54, 12, 3, 4, 56, 23, 12, 5, 23])
console.log(firstReverseTry([-1, 1]), [1, -1])

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function firstReverseTry(arr) {
  if (arr.length > 1) {
    var first = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = first;
  }
  return arr
}
2. ======>
function firstReverseTry(arr) {
  return arr.length > 1 ? arr.slice(-1).concat(arr.slice(1, -1), arr[0]) : arr
}
3. ======>
function firstReverseTry(arr) {

  let copy = arr.slice();
  if (!copy.length) return [];
  
  copy[0] = arr[arr.length - 1];
  copy[arr.length - 1] = arr[0];
  
  return copy;
    
}
*/