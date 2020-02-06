function reverseWords(str) {
    var string = '';
    var arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            string += str[i]
        } else if (str[i] == ' ') {
            arr.push(string)
            string = ''
        }
    }
    arr.push(string)
    console.log(arr);


    var result = ''
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i == 0) {
            result += arr[i]
        } else {
            result += arr[i] + ' '
        }
    }
    return result
}




console.log(reverseWords("hello world!"), "world! hello")
console.log(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda")
console.log(reverseWords("foobar"), "foobar")
console.log(reverseWords("kata editor"), "editor kata")
console.log(reverseWords("row row row your boat"), "boat your row row row")

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function reverseWords(str){
  return str.split(" ").reduce((a,v)=>[v].concat(a), []).join(" ");
}
2. ======>
function reverseWords(str) {
    return str.split(' ').reduce((res, word) => word ? word + ' ' + res : res)
}
3. ======>
function reverseWords(str){
  return str.split(/\s/).reverse().join(' ')
}
*/