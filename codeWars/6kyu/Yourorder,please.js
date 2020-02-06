function order(words) {
    let arr = []
    let str = ''
    for (let i = 0; i < words.length; i++) {
        if (words[i] != ' ') {
            str += words[i]
        } else if (words[i] == ' ') {
            arr.push(str)
            str = ''
        }
    }
    arr.push(str)
    // console.log(arr);

    let arrOutput = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (Number(Number(arr[i][j]))) {
                arrOutput.push([arr[i], Number(arr[i][j])])
            }
        }
    }
    for (let i = 0; i < arrOutput.length; i++) {
        for (let j = i + 1; j < arrOutput.length; j++) {
            if (arrOutput[i][1] > arrOutput[j][1]) {
                let temp = arrOutput[i]
                arrOutput[i] = arrOutput[j]
                arrOutput[j] = temp
            }
        }
    }
    let result = ''
    for (let i = 0; i < arrOutput.length; i++) {
        if (i == arrOutput.length - 1) {
            result += arrOutput[i][0]
        } else {
            result += arrOutput[i][0] + ' '
        }
    }
    return result
}

console.log(order("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est")
// console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople")
// console.log(order(""), "")

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    
2. ======>
function order(words){
  var array = words.split(' ');
  var sortedArray = [];
  for(i = 0; i <= array.length; i++) {
    for(j = 0; j < array.length; j++) {
      if(array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j]);
      }
    }
  }
  return sortedArray.join(' ');
}
3. ======>
function order(words) {
    if(!words.length)
        return '';
    words = words.split(' '), res = [];
    for(var i=0; i<words.length; i++){
        var num = words[i].match(/[0-9]/g);
        res[Number(num[0])-1] = words[i];
    }
    return res.join(' ');
}
*/