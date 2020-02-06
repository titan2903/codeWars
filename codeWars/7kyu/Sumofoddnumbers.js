function rowSumOddNumbers(n) {
    var firstnum = n * n - n + 1
    var count = 0
    for (let i = 0; i < n; i++) {
        count += (firstnum + (i * 2))
    }
    return count
}

console.log(rowSumOddNumbers(1), 1);
console.log(rowSumOddNumbers(42), 74088);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function rowSumOddNumbers(n) {
  var start = n * n - n + 1;
  var result = 0;  
  
  for(i = 0; i < n; i++)
  {
    result =  result + (start + (i*2));
  }
    
   return result;
}
2. ======>
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
3. ======>
function rowSumOddNumbers(n) {
    // generate an array with values 0 to n
    return [...Array(n).keys()]
        // map over each value, calculate the first value in the "row", then add the required 
        // number of 2's to each so we generate all values for a given row
        .map((curr, idx) => Math.pow(n, 2) - (n - 1) + (idx * 2))
        // add them all together
        .reduce((prev, curr) => prev + curr, 0);
}
*/