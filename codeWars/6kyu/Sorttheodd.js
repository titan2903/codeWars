function sortArray(array) {
    var arrOdd = [];
    var arrEven = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            arrOdd.push(array[i])
        } else {
            arrEven.push(array[i])
        }
    }
  
    for (let i = 0; i < arrOdd.length; i++) {
        for (let j = i + 1; j < arrOdd.length; j++) {
            if (arrOdd[i] > arrOdd[j]) {
                let temp = arrOdd[i]
                arrOdd[i] = arrOdd[j]
                arrOdd[j] = temp
            }
        }
    }

    var result = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] % 2 === 0) {
            result.push(arrEven.shift());
        } else {
            result.push(arrOdd.shift());
        }
    }
    return result;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
console.log(sortArray([]), [])

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
2. ======>
function sortArray(array) {
  if(array.length == 0) {
    return array;
  }

  for(var i=0;i<array.length-1;i++)
  {
    for(var j = i; j < array.length; j++)
    {
      if((array[i] != 0) && (array[i] % 2 != 0) &&
        (array[j] != 0) && (array[j] % 2 != 0))
        {
          if(array[i] > array[j])
          {
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
          }
        }
    }
  }
  
  return array;
}
3. ======>
function sortArray(array) {
  var odd = array
    .filter(n => n % 2)
    .sort((a, b) => a - b);
    
  return array.map(n => n % 2 ? odd.shift() : n);
}
*/