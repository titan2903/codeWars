function iqTest(numbers) {
    var str = '';
    var arr = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] != ' ') str += numbers[i]
        else if (numbers[i] == ' ') arr.push(Number(str)), str = ''
    }
    arr.push(Number(str))
    // console.log(arr);

    let iEven = []
    let iOdd = []
    for (let i = 0; i < arr.length; i++) {
        (arr[i] % 2 == 0) ? iEven.push(i + 1): (arr[i] % 2 != 0) ? iOdd.push(i + 1) : 0
    }
    // console.log(iEven);
    // console.log(iOdd);
    return (iEven.length == 1) ? iEven[0] : iOdd[0]
}


console.log(iqTest("2 4 7 8 10"), 3);
console.log(iqTest("1 2 2"), 1);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}
2. ======>
function iqTest(numbers){
  numbers = numbers.split(' ')
  
  var evens = []
  var odds = []
  
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] & 1) {
      odds.push(i + 1)
    } else {
      evens.push(i + 1)
    }
  }
  
  return evens.length === 1 ? evens[0] : odds[0]
}
3. ======>
function iqTest(numbers){
  var nums = numbers.split(" ").map(x => x % 2);  
  var sum = nums.reduce((a,b) => a + b);  
  var target = sum > 1 ? 0 : 1;
  
  return nums.indexOf(target) + 1;
}
*/