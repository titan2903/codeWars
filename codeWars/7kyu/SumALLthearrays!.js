function arraySum(arr) {
    var sum = 0;
    // this will grab the value at each index in each array
    for (var i = 0; i < arr.length; i++) {
        // targets each individual element in an array
        var element = arr[i];
        // this will check to see if the element is a number, and will increase the value of sum by that number.
        if (typeof element === 'number') {
            sum += element;
            // this will check to see if the element is an array, and will pass that array into the arraySum function, grabbing the return value and adding it to the sum.  
        } else if (Array.isArray(element)) {
            var returnValue = arraySum(element);
            sum += returnValue;
        }
    }
    // returns the sum of all of the number values in a given (nested) array
    return sum;
}

console.log(arraySum([1, 2]), 3);
console.log(arraySum([1, 2, 3]), 6);
console.log(arraySum([1, 2, [1, 2]]), 6);



/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function arraySum(arr) {
  return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
}
2. ======>
function arraySum(arr) {
  var output = 0;
  for (var i in arr) {
    var item = arr[i];
    if ( typeof(item) === "number"  )  { output += item;           }
    if ( item.constructor === Array )  { output += arraySum(item); }
  }
  return output;
}
3. ======>
function arraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += arraySum(arr[i]);
    } else if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  return sum;
}
*/