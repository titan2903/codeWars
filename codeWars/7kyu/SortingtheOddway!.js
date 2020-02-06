function sortItOut(array) {
    var arrOdd = [];
    var arrEven = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            arrOdd.push(array[i])
        } else {
            arrEven.push(array[i])
        }
    }
    // console.log(arrOdd);
    // console.log(arrEven);

    for (let i = 0; i < arrOdd.length; i++) {
        for (let j = i + 1; j < arrOdd.length; j++) {
            if (arrOdd[i] > arrOdd[j]) {
                var temp = arrOdd[i]
                arrOdd[i] = arrOdd[j]
                arrOdd[j] = temp
            }
        }
    }
    // console.log(arrOdd);

    for (let i = 0; i < arrEven.length; i++) {
        for (let j = i + 1; j < arrEven.length; j++) {
            if (arrEven[i] < arrEven[j]) {
                let temp = arrEven[i]
                arrEven[i] = arrEven[j]
                arrEven[j] = temp
            }
        }
    }
    // console.log(arrEven);

    for (let i = 0; i < arrEven.length; i++) {
        arrOdd.push(arrEven[i])
    }
    return arrOdd
}


console.log(sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78]), ([11, 33, 55, 55, 90.4, 78, 44, 22, 4]));
console.log(sortItOut([26, 243, 52, 2, 432414, 1, 11, 46, 32]), ([1, 11, 243, 432414, 52, 46, 32, 26, 2]));
console.log(sortItOut([19, 65, 88, 112, 60, 14, 33, 49, 88]), ([19, 33, 49, 65, 112, 88, 88, 60, 14]));
console.log(sortItOut([]), ([]))
console.log(sortItOut([68, 25, 99, 50, 10, 67, 2, 5, 8, 34, 67]), ([5, 25, 67, 67, 99, 68, 50, 34, 10, 8, 2]));

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function sortItOut(array){
   return array.filter(x => Math.floor(x) % 2 == 1)
               .sort((a, b) => a - b)
               .concat(array.filter(x => Math.floor(x) % 2 == 0)
                            .sort((a, b) => b - a));
   
}
2. ======>
function sortItOut(a) {
  return a.sort((a, b) => {
    let d = (b|0)%2 - (a|0)%2;
    if (d === 0) {
      return (a-b) * ((a|0)%2*2-1);
    }
    return d;
  });
}
3. ======>
function sortItOut(array){
  let odd = []
  let even = []
  array.forEach((number) => {
    if( number & 1){
      odd.push(number)
    }else{
      even.push(number)
    }
  })
  even.sort(function (a,b) {return b-a})
  odd.sort(function (a,b) {return a-b})
  let result = odd.concat(even)
  return result
}

*/