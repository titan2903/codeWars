function reverseMessage(str) {
    small = str.toLowerCase()
    var temp = ''
    var arr = []
    for (let i = small.length - 1; i >= 0; i--) {
        if (small[i] != ' ') {
            temp += small[i]
        } else if (small[i] == ' ') {
            arr.push(temp)
            temp = ''
        }
    }
    arr.push(temp)
    // console.log(arr)


    var output = ''
    var tempStr = ''
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if ([i][j] == [i][0]) {
                tempStr += arr[i][j].toUpperCase()
            } else {
                tempStr += arr[i][j]
            }
        }
        if (i == arr.length - 1) {
            output += tempStr
            // tempStr = ''
        } else {
            output += tempStr + ' '
            tempStr = ''
        }

    }
    return output

}

console.log(reverseMessage('AaaaA'), 'Aaaaa')
console.log(reverseMessage('Hello there'), 'Ereht Olleh')
console.log(reverseMessage('Pl34k78j'), 'J87k43lp')
console.log(reverseMessage('Reverse this message!'), '!egassem Siht Esrever')
console.log(reverseMessage('Today is the 14th of January!'), '!yraunaj Fo Ht41 Eht Si Yadot')
console.log(reverseMessage('hty56hA T76#Td'), 'Dt#67t Ah65yth')
console.log(reverseMessage(''), '')

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function reverseMessage(str) {
  return str.toLowerCase().split('').reverse().join('')
            .replace(/(^|\s+)[a-z]/g, c => c.toUpperCase());
}
2. ======>
function reverseMessage(str) {
  return str.split("").reverse().join("").toLowerCase().split(" ").map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(" ");
}
3. ======>
String.prototype.toTitleCase = function() {
  return this[0] === undefined ? "" : this[0].toUpperCase() + this.slice(1);
}

const reverseMessage = s => s.split(" ").reverse().map(s => s.toLowerCase().split("").reverse().join("").toTitleCase()).join(" ");
*/