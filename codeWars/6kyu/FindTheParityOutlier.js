function findOutlier(integers) {
    var isOdd = true;
    if (integers[0] % 2 == 0) {
        // even
        if (integers[1] % 2 == 0) {
            // even even
            isOdd = false;
        } else {
            // even odd
            if (integers[2] % 2 == 0) {
                // if even odd even, return odd
                return integers[1];
            } else {
                // else if even odd odd, return even
                return integers[0];
            }
        }
    } else {
        // odd
        if (integers[1] % 2 == 0) {
            // odd even
            if (integers[2] % 2 == 0) {
                // if odd even even, return odd
                return integers[0];
            } else {
                // if odd even odd, return even
                return integers[1];
            }
        }
    }

    if (isOdd == true) {
        for (var i = 2; i < integers.length; i++) {
            if (integers[i] % 2 == 0) return integers[i];
        }
    } else {
        for (var i = 2; i < integers.length; i++) {
            if (integers[i] % 2 != 0) return integers[i];
        }
    }
}


console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2, 6, 8, 10, 3]), 3)
console.log(findOutlier([0, 0, 3, 0, 0]), 3)
console.log(findOutlier([1, 1, 0, 1, 1]), 0)

/*
=====SOAL======
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/
/*
CARA ORANG LAIN
1. ======>
function findOutlier(int){
  var even = int.filter(a=>a%2==0);
  var odd = int.filter(a=>a%2!==0);
  return even.length==1? even[0] : odd[0];
}
2. ======>
function findEvenNum(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return arr[i];
    }
  }
}

function findOddNum(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return arr[i];
    }
  }
}
function findOutlier(integers) {
  var evenCount = 0;
  var oddCount = 0;
  for (var i = 0; i < integers.length + 1; i++) { // + 1 for arrays that have only 3 elements
    if (evenCount > 1) {
      return findOddNum(integers);
    }
    if (oddCount > 1) {
      return findEvenNum(integers);
    }
    if (integers[i] % 2 === 0) {
      evenCount++;
    }
    if (integers[i] % 2 !== 0) {
      oddCount++;
    }
}
3. ======>
let findOutlier = function (integers) {
    let o = [], e = []
    let len = integers.length
    for (let i = 0; i < len; i++)(integers[i] % 2 == 0) ? e.push(integers[i]) : o.push(integers[i])
    return (e.length == 1) ? e[0] : o[0]
}
*/