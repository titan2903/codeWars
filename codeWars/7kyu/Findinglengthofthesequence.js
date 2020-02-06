function lengthOfSequence(arr, n) {
    var index1 = arr.indexOf(n)
    var index2 = arr.indexOf(n, index1 + 1)
    var index3 = arr.indexOf(n, index2 + 1)
    if (index1 == -1 || index2 == -1 || index3 != -1) {
        return 0
    }
    return index2 - index1 + 1
}

console.log(lengthOfSequence([1, 1], 1), 2, 'Returns two when there are only two elements in the array');
console.log(lengthOfSequence([1, 2, 3, 1], 1), 4, 'Returns four for an array of length four and the number to be searched at the boundaries');
console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5), 5, 'Returns five');
console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7), 4, 'Returns four');


/*
Cara orang lain:

var lengthOfSequence = function (arr, n) {
    var hits = arr.filter(i => i === n).length;
    return hits === 2 ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 : 0;
};


var lengthOfSequence = function (arr, n) {
  
  return arr.filter((v) => (v === n)).length != 2 ? 0 : arr.lastIndexOf(n) - arr.indexOf(n) + 1;
  
};

*/