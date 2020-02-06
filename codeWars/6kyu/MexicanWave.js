function wave(str) {
    let finalArr = []
    for (let i = 0; i < str.length; i++) {
        let arr = str.split('')
        if (arr[i] == ' ') {
            continue
        }
        arr[i] = arr[i].toUpperCase()
        finalArr.push(arr.join(''))
    }
    return finalArr
}

// result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("hello"));

// result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
console.log(wave("codewars"));



/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function wave (text) {
  // in this exercise we are putting the split inside of the for loop, bevause for each time we want to add the whole word )
  let finalArray = []
for ( let i = 0; i < text.length; i++) {
    let arr = text.split('')
    //console.log(arr)
    if ( arr[i] === ' ') { // in case the element is an empty string we just skip that element and we are goig to the next one
       continue
    }
    arr[i] = arr[i].toUpperCase() // we split the word(text) every time. For the index 0, we are gonna add the whole word, then we change the current element to uppercase. ( arr[i] = arr[i].toUpperCase). The next time the for loop is gonna run for the i 1, We are goinna split the word into arr and we are gonna change the current element which is the 1 at the index 1 in capital 
    console.log(arr)
    finalArray.push(arr.join(''))// we have to change them to strings bevause they are arrays thats why we use join
}
    return finalArray
}
2. ======>
function wave(str){
    let result = [];
    
    str.split("").forEach((char, index) => {
        if (/[a-z]/.test(char)) {
            result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
        }
    });
    
    return result;
}
3. ======>
function wave(str){
  var temp = []
  var counter = 0
  var result = []
  for (var i = 0; i < str.length; i++) {
    temp.push ([])
    for (var j = 0; j < str.length; j++) {
      if (i === counter && j === counter) {
        temp[i].push (str[j].toUpperCase())
      }
      else {
        temp[i].push (str[j])
      }
    }
    counter++
  }
  for (var i = 0; i < temp.length; i++) {
    result.push (temp[i].join(""))
  }
  var final = []
  for (var i = 0; i < result.length; i++) {
    if (result[i] !== str) {
      final.push (result[i])
    }
  }
  return final
}
*/