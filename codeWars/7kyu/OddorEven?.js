function oddOrEven(array) {
    //enter code here
    var count = 0;
    for (let i = 0; i < array.length; i++) {
        count += array[i]
    }

    if (count % 2 == 0) return 'even'
    else if (count % 2 != 0) return 'odd'
}


console.log(oddOrEven([0]), 'even')
console.log(oddOrEven([1]), 'odd')
console.log(oddOrEven([]), 'even')
console.log(oddOrEven([0, 1, 5]), 'even')
console.log(oddOrEven([0, 1, 3]), 'even')
console.log(oddOrEven([1023, 1, 2]), 'even')
console.log(oddOrEven([0, -1, -5]), 'even')
console.log(oddOrEven([0, -1, -3]), 'even')
console.log(oddOrEven([-1023, 1, -2]), 'even')
console.log(oddOrEven([0, 1, 2]), 'odd')
console.log(oddOrEven([0, 1, 4]), 'odd')
console.log(oddOrEven([1023, 1, 3]), 'odd')
console.log(oddOrEven([0, -1, 2]), 'odd')
console.log(oddOrEven([0, 1, -4]), 'odd')
console.log(oddOrEven([-1023, -1, 3]), 'odd')

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function oddOrEven(arr) {
  return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}
2. ======>
function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++)
  {result+=array[i];}
  if (result%2 == 0)
  {return "even";}
  else{return "odd";}
}
3. ======>
const oddOrEven=arr=>["even","odd"][Math.abs(arr.reduce((a,b)=>a+b,0))%2];
*/