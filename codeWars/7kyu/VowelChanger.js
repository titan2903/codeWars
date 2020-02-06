function vowelChange(str, vow) {
    var temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o' || str[i] == 'A' || str[i] == 'I' || str[i] == 'U' || str[i] == 'E' || str[i] == 'O') {
            temp += vow
        } else {
            temp += str[i]
        }
    }
    return temp
}

console.log(vowelChange("Hannah Hannah bo-bannah Banana fanna fo-fannah Fee, fy, mo-mannah. Hannah!", 'i'), 'Hinnih Hinnih bi-binnih Binini finni fi-finnih Fii, fy, mi-minnih. Hinnih!');
console.log(vowelChange('adira wants to go to the park', 'o'), 'odoro wonts to go to tho pork');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const vowelChange = (str, vow) => str.replace(/[aeiou]/ig, vow);
2. ======>
function vowelChange(str, vow) {
  const vowelsMapping = { 'a': vow, 'e': vow, 'i': vow, 'o': vow, 'u': vow };
  
  return str.split('').map(e => vowelsMapping[e] || e).join('');
}
3. ======>
function vowelChange(str, vow) {
  var testarray = str.split('')
  testarray.map((data, index) => {
    if (data == 'a' || data == 'i' || data == 'u' || data == 'e' || data == 'o') {
      testarray[index] = vow
    }
  })
  return testarray.join('')
}
*/