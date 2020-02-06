function disemvowel(str) {
    var result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != 'a' && str[i] != 'i' && str[i] != 'u' && str[i] != 'e' && str[i] != 'o' && str[i] != 'A' && str[i] != 'I' && str[i] != 'U' && str[i] != 'E' && str[i] != 'O') {
            result += str[i]
        }
    }
    return result
}

console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
2. ======>
const disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let newStr = '';
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {
      newStr += char;
    }
  }
    return newStr;
    
  
};
3. ======>
function disemvowel(str) {
  var strippedString = str.split('');
  var newArr = [];
  for(var i = 0; i < strippedString.length; i++){
    var st = strippedString[i].toLowerCase();
    if((st === "a") || (st === "e") || (st === "i") ||(st === "o") || (st === "u")){
      //do nothing
    }
    else{
      newArr.push(strippedString[i]);
    }
  }
  return newArr.join("");
}
4.========>
function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
  str = str.split('a').join('');
  str = str.split('e').join('');
  str = str.split('i').join('');
  str = str.split('o').join('');
  str = str.split('u').join('');
  str = str.split('A').join('');
  str = str.split('E').join('');
  str = str.split('I').join('');
  str = str.split('O').join('');
  str = str.split('U').join('');  
  return str;
}
*/