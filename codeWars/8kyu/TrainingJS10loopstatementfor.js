function pickIt(arr) {
    var odd = [],
        even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            odd.push(arr[i])
        } else {
            even.push(arr[i])
        }

    }




    return [odd, even];
}


console.log(pickIt([1, 2]), [
    [1],
    [2]
]);
console.log(pickIt([1, 2, 3]), [
    [1, 3],
    [2]
]);
console.log(pickIt([3, 2, 1]), [
    [3, 1],
    [2]
]);
console.log(pickIt([10, 20, 30]), [
    [],
    [10, 20, 30]
]);
console.log(pickIt([11, 21, 31]), [
    [11, 21, 31],
    []
]);
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]), [
    [1, 5, 1, 1],
    [8, 4, 6]
]);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function pickIt(arr){
  var odd=[],even=[];
  for (i of arr) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  
  
  return [odd,even];
}
2. ======>
3. ======>
*/