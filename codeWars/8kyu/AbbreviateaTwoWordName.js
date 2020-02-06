function abbrevName(name) {
    nama = name.toUpperCase()
    var tempStr = '',
        newArr = [];
    for (let i = 0; i < nama.length; i++) {
        if (nama[i] != ' ') {
            tempStr += nama[i]
        } else if (nama[i] == ' ') {
            newArr.push(tempStr)
            tempStr = ''
        }
    }
    newArr.push(tempStr.toUpperCase())
    return `${newArr[0][0]}.${newArr[1][0]}`
}

console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("p Favuzzi"), "P.F");
console.log(abbrevName("David mendieta"), "D.M");



/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}
2. ======>
function abbrevName(name){
  return name.match(/\b(\w)/g).toString().toUpperCase().replace(',', '.');
}
3. ======>
function abbrevName(name){
    return (name[0]+'.'+name[name.indexOf(' ')+1]).toUpperCase();

}
*/