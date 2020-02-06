function find_average(array) {
    var count = 0
    for (let i = 0; i < array.length; i++) {
        count += array[i]
    }
    return count / array.length
}

console.log(find_average([1, 1, 1]), 1);
console.log(find_average([1, 2, 3]), 2);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}
2. ======>
find_average = a => a.reduce((s, e) => s + e, 0) / a.length;
3. ======>
function find_average(array) {
  return (Math.min(...array) + Math.max(...array)) / 2;
}
*/