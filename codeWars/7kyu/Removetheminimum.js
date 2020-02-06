function removeSmallest(numbers) {
    // var indexOfSmallest = 0;
    // var smallestNumber = numbers[0];
    // for (var i = 0; i < numbers.length; i++) {
    //     if (numbers[i] < smallestNumber) {
    //         smallestNumber = numbers[i];
    //         indexOfSmallest = i;
    //     }
    // }
    // numbers.splice(indexOfSmallest, 1);
    // return numbers;

    let numMin = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        if (numMin > numbers[i]) {
            numMin = numbers[i]
        }
    }
    console.log(numMin);


    let indekslow = numbers.indexOf(numMin)
    let result = []
    for (let j = 0; j < numbers.length; j++) {
        if (j != indekslow) {
            result.push(numbers[j])
        }
    }
    return result
}



console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
console.log(removeSmallest([]), [], "Wrong result for []");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
2. ======>
function removeSmallest(numbers) {
  var smallest;
  var newNums = [];
  numbers.forEach(function(num) {
    if (smallest > num || smallest === undefined) {
      smallest = num;
    }
  });
  var index = numbers.indexOf(smallest);
  numbers.forEach(function(n, i) {
    if (i !== index) {
      newNums.push(n);
    }
  });
  return newNums;
}
3. ======>
function removeSmallest(numbers) {
  if (!numbers.length)
    return [];
  let inx = 0;  
  const nums = Array.from(numbers, (x, i) => {  
    if (x < numbers[inx])
      inx = i;
    return x;
  });
  nums.splice(inx, 1);
  return nums;
}
*/