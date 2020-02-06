function reverser(sentence) {
    var str = '';
    var temp = [];
    if (sentence.length == ' ') {
        return sentence
    }
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] != ' ') {
            str += sentence[i]
        } else if (sentence[i] == ' ') {
            temp.push(str)
            str = ''
        }
    }
    temp.push(str)
    // console.log(temp);

    var tempStr = ''
    var result = []
    for (let i = 0; i < temp.length; i++) {
        for (let j = temp[i].length - 1; j >= 0; j--) {
            tempStr += temp[i][j]
        }
        result.push(tempStr)
        tempStr = ''
    }
    // console.log(result);

    for (let i = 0; i < result.length; i++) {
        if (i == result.length - 1) {
            tempStr += result[i]
        } else {
            tempStr += result[i] + ' '
        }
    }
    // <--- proses join --->
    return tempStr
}


console.log(reverser("Hi mom"), 'iH mom');
console.log(reverser("friendzone"), 'enozdneirf');
console.log(reverser(" "), ' ');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function reverser(sentence) {
  return  (sentence.split(" ")).map(x=>x.split("").reverse().join("")).join(" ")
}
2. ======>
// reverse the letters in the sentence
function reverser(sentence) {
  return sentence.split(/\s/).map((word) => {
    return word.split('').reverse().join('');
  }).join(' ');
}
3. ======>
// reverse the letters in the sentence
function reverser(sentence) {
  var split = sentence.split(" ");
  return split.map((word) => reverse(word)).join(" "); 
}

function reverse(word) {
  if (word.length === 0) {
    return "";
  } else {
    return word[word.length - 1].concat(reverse(word.slice(0, word.length - 1)));
  }
}
*/