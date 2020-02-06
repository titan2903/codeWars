function addLength(str) {
    var array = []
    var tempStr = ''
    var count = 0;


    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            tempStr += str[i]
            count++
        } else if (str[i] == ' ') {
            tempStr += ' ' + count
            array.push(tempStr)
            count = 0
            tempStr = ''
        }
    }
    tempStr += ' ' + count
    array.push(tempStr)

    return array

}

console.log(addLength('apple ban'), ["apple 5", "ban 3"]);
console.log(addLength('you will win'), ["you 3", "will 4", "win 3"]);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function addLength(str){
  return str.split(' ').map(function(v){return v+' '+v.length})
}
2. ======>
var addLength = s => s.split(' ').map(x => x + ' ' + x.length);
3. ======>
*/