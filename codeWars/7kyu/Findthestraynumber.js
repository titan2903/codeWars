function stray(numbers) {
    let strayChar = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (strayChar !== numbers[i]) {
            return strayChar = numbers[i];
        }
    }
    return 0;

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[i + 1]) {
            if (numbers[i] === numbers[i + 2]) {} else {
                return numbers[i + 2];
            }
        } else if (numbers[i] !== numbers[i + 2]) {
            return numbers[i]
        }
    }
}

console.log(stray([1, 1, 2]), 2);
console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function stray(nums){
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return nums.filter(x => x == max).length == 1 ? max : min
}
2. ======>
function stray(numbers){
  for (var i in numbers){
     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
  }
}
3. ======>
function stray(numbers) {
  var a = numbers.sort();
  
  if(a[0] != a[1]) {
    return a[0]
  } 
  return a[a.length-1]
}

4. =====>
const stray = nums => nums.reduce((a, b) => a ^ b);
*/