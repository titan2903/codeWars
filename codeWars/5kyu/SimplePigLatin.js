function pigIt(str) {
    var temp = ''
    var arr = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            temp += str[i]
        } else if (str[i] == ' ') {
            arr.push(temp)
            temp = ''
        }
    }
    arr.push(temp)
    // console.log(arr);

    let simbol = '';
    let tempBelakang = '';
    let tempDepan = '';
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (tempDepan.length == 0) {
                if (arr[i][j] == '!' || arr[i][j] == '?') {
                    simbol += arr[i][0]
                } else(
                    tempDepan += arr[i][0]
                )
            } else {
                tempBelakang += arr[i][j]
            }
        }
        // if (simbol.length >= 1) {
        //     output.push(simbol)
        // } else {
        //     output.push(`${tempBelakang}${tempDepan}ay`)
        // }
        // tempDepan = ''
        // tempBelakang = ''
    }
    console.log(simbol);
    // console.log(tempBelakang);
    // console.log(tempDepan);



    // console.log(output);

    let result = ''
    for (let i = 0; i < output.length; i++) {
        if (i == output.length - 1) {
            result += output[i]
        } else {
            result += output[i] + ' '
        }
    }
    // return result
}

console.log(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay')
console.log(pigIt('This is my string'), 'hisTay siay ymay tringsay')

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
2. ======>
function pigIt(str){
  result = str.split(' ')
  for (i = 0; i < result.length; i++) {
    result[i] = result[i].substring(1) + result[i].substring(0,1) + 'ay'
  }
  return result.join(' ')
}
3. ======>
function pigIt(str){
    var arrayStr = str.split(''); 
    var word = '';
    var sentence  = '';
    var begining  = true;
    var firstLetter = '';
    
    arrayStr.forEach(function(letter, i){  
        if (begining) {
            firstLetter = letter;
            begining = false;
        } else { 
            if (letter === ' ' || i == arrayStr.length) {
                sentence += firstLetter; 
                sentence += 'ay '; 
                firstLetter = '';
                begining = true;
            } else {
                sentence += letter;
            }
        } 
        if (i + 1 == arrayStr.length) {
            sentence += firstLetter; 
            sentence += 'ay'; 
        } 
    });
    return sentence;
}
*/