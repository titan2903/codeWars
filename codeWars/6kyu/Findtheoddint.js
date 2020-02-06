function findOdd(arr) {
  // var count = 0
  // for (let i = 0; i < A.length; i++) {
  //   for (let j = 0; j < A.length; j++) {
  //     if (A[i] == A[j]) {
  //       count++
  //     }
  //   }
  //   if (count % 2 != 0) {
  //     return A[i]
  //   }
  // }
  // console.log(count);
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}


console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
console.log(findOdd([3, 14, 16, 17, 6, 7, 9, 6]));
//                    1               2   3       4

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
2. ======>
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
3. ======>
function findOdd(arr) {
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
}
4. =====>
function findOdd(A) {
  //happy coding!
  var x = 0;
  for (var i = 0; i < A.length; i++) {
    x = x ^ A[i];
  }
  return x;
}
5. =====>
function findOdd(A) {
    var countOccurencesOfInt = 0;
    for (let i = 0; i < A.length; i++) {
        var currentIterationInt = A[i];
        for (let j = 0; j < A.length; j++) {
            if (currentIterationInt == A[j]) {
                countOccurencesOfInt++;
            }
        }
        if (countOccurencesOfInt % 2 != 0) {
            return currentIterationInt;
        }
    }
}
*/