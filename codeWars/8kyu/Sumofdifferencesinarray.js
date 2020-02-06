function sumOfDifferences(arr) {
    arr.sort(function (a, b) {
        return b - a
    });
    let count = 0
    for (var i = 1; i < arr.length; i++) {
        count += (arr[i - 1] - arr[i])
    }
    return count
}


console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);

/*
function sumOfDifferences(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    var count = 0;
    for (let i = 1; i < arr.length; i++) {
        count += arr[i + 1] - arr[i]
    }
    return count
}

*/


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
2. ======>
function sumOfDifferences(arr) {
  arr.sort((a, b) => a - b);
  let b = 0;
  for(let a = arr.length - 1; a > 0; a--) {
    b += arr[a] - arr[a - 1];
  }
  return b;
}
3. ======>
function sumOfDifferences(arr) {
    let output = []
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    // console.log(temp)

    for (let i = 0; i < arr.length - 1; i++) {
        output.push(arr[i] - arr[i + 1])
    }

    for (let i = 0; i < output.length; i++) {
        result += output[i]
    }
    // console.log(output)
    return result
}
*/