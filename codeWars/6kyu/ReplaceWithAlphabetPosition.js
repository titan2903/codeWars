function alphabetPosition(text) {
    textKecil = text.toLowerCase()
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    var arr = [];
    for (let i = 0; i < textKecil.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (textKecil[i] == alpha[j]) {
                arr.push(j + 1)
            }
        }
    }

    var str = '';
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1 || arr.length == 1) {
            str += arr[i]
        } else {
            str += arr[i] + ' '
        }
    }
    return str
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
console.log(alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}
2. ======>
function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++){
    var code = text.toUpperCase().charCodeAt(i)
    if (code > 64 && code < 91) result += (code - 64) + " ";
  }
  return result.slice(0, result.length-1);
}
3. ======>
function alphabetPosition(text) {
    let charArr = []
    
    for (char of text.toLowerCase()){
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
        charArr.push(char.charCodeAt(0) - 96)
    }
    }
    return charArr.join(" ");
}
*/