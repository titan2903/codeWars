function pipeFix(numbers) {
    var first = numbers[0]
    var last = numbers[numbers.length - 1]

    var arr = []
    for (let i = first; i <= last; i++) {
        arr.push(i)
    }
    return arr
}


console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(pipeFix([1, 2, 3, 12]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(pipeFix([6, 9]), [6, 7, 8, 9]);
console.log(pipeFix([-1, 4]), [-1, 0, 1, 2, 3, 4]);
console.log(pipeFix([1, 2, 3]), [1, 2, 3]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function getMaxOfArray(numbers) {
  return Math.max.apply(null, numbers);
}

function getMinOfArray(numbers) {
  return Math.min.apply(null, numbers);
}

function pipeFix(numbers){
  var newArray = [];
  var min = getMinOfArray(numbers);
  var max = getMaxOfArray(numbers);
  for (var i = min; i <= max; i++) {
    newArray.push(i);
  }
  return newArray;
}
2. ======>
function pipeFix(numbers){
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i+1]-1 && i < numbers.length-1 ) {
      numbers.splice(i+1,0,numbers[i]+1);
    }  
  }
  return numbers;
}
3. ======>
function pipeFix(numbers){
  var n_array = [];
  for(var i=numbers[0];i<=numbers[numbers.length-1];i++){
    n_array.push(i);
  }
  return n_array;
}
*/