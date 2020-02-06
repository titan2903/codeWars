function divisors(integer) {
    let arr = []
    for (let i = 2; i < integer; i++) {
        if (integer % i == 0) {
            arr.push(i)
        }
    };
    return (arr.length === 0) ? `${integer} is prime` : arr
}
console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function divisors(integer) {
    var divisors = [];
    for (var i = 2; i < integer - 1; i++){
        if (integer % i === 0) divisors.push(i);
    }
    if (divisors.length === 0) return '' + integer + ' is prime';
    return divisors;
}
2. ======>
function divisors(integer) {
  var matched = [], i = 1;
  
  while( ++i < integer ) {
    (integer % i !== 0 ) || matched.push(i); 
  }
  
  return matched.length <= 1 ? (integer + " is prime") : matched;
};
3. ======>
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};
*/