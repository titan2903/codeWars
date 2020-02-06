function spinWords(word) {
    var kasih = word.split(' ');
    for (var i = 0; i < kasih.length; i++) {
        if (kasih[i].length >= 5) {
            var temp = '';
            for (var j = 0; j < kasih[i].length; j++)
                temp = kasih[i][j] + temp;
            kasih[i] = temp;
        }
    }
    return kasih.join(' ');
}





console.log(spinWords("Welcome"), "emocleW");
console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
console.log(spinWords("This is a test"), "This is a test");
console.log(spinWords("This is another test"), "This is rehtona test");
console.log(spinWords("You are almost to the last test"), "You are tsomla to the last test");
console.log(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
console.log(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function spinWords(str) {
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5)
      strArr[i] = strArr[i].split('').reverse().join('');
  }
  return strArr.join(' ');
}
2. ======>
function spinWords(str){
  return str.replace(/\w{5,}/g, function(w) {
    return w.split('').reverse().join('');
  });let arr = str.split('')
    let finalStr = ''
    for (let i = 0; i < arr.length; i++) {
        var word = arr[i]
        if (word.length < 5) {
            finalStr += word + ' ';
        } else {
            for (let j = word.length - 1; j >= 0; j--) {
                finalStr += word[j]
            }
            finalStr += ' '
        }
    }
    return finalStr.slice(0, finalStr.length - 1)
}
3. ======>
function spinWords(x){
 return x.split(' ').map((x) => x.length >= 5 ? x.split('').reverse().join('') : x).join(' ')
}
4. =======>
function spinWords(word) {
    var kasih = word.split(' ');
    for(var i=0; i<kasih.length; i++){
        if(kasih[i].length >= 5){
            var temp = '';
            for(var j=0; j<kasih[i].length; j++)
                temp = kasih[i][j] + temp;
            kasih[i] = temp;
        }
    }
    return kasih.join(' ');
}
*/