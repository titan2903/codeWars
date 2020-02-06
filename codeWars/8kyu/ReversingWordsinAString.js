function reverse(string) {
    var temp = [];
    var str = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] != ' ') {
            str += string[i]
        } else if (string[i] == ' ') {
            temp.push(str)
            str = ''
        }
    }
    temp.push(str)

    var output = ''
    for (let j = temp.length - 1; j >= 0; j--) {
        if (j == 0) {
            output += temp[j]
        } else {
            output += temp[j] + ' '
        }
    }
    return output

}



console.log(reverse('I am an expert at this'), 'this at expert an am I');
console.log(reverse('This is so easy'), 'easy so is This');
console.log(reverse('no one cares'), 'cares one no');
console.log(reverse(''), '');
console.log(reverse('CodeWars'), 'CodeWars');


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function reverse(string){
  return string.replace(/\s+/g, ' ').split(' ').reverse().join(' ');
}
2. ======>
const reverse = string => String(string.split(" ").reverse().join(" "));
3. ======>
function reverse(string){
  return string.split(' ').filter(x => Boolean(x)).reverse().join(' ');
}
*/