function monkeyCount(n) {
  var tempArr = []
  for (let i = 1; i <= n; i++) {
    tempArr.push(i)
  }
  return tempArr
}




console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
console.log((monkeyCount(3)), [1, 2, 3]);
console.log((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);


/*
Cara orang lain:

function monkeyCount(n) {
 var monkeys = [];
 for(var i=1; i<n+1; i++){
   monkeys.push(i);
 }
 return monkeys;
}



function monkeyCount(n) {
  for (var i = 0, arr = []; i < n; arr.push(++i));
  
  return arr;
}
*/