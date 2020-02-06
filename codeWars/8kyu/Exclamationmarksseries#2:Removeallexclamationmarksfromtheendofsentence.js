function remove(s) {
    var str = '';
    var arr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            str += s[i]
        } else if (s[i] == ' ') {
            arr.push(str)
            str = ''
        }
    }
    arr.push(str)
    // console.log(arr)

    var str = ''
    for (let i = arr.length - 1; i >= 0; i--) {
        // for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][1] != '!') {
            str += arr[i]
        }
        // }
    }
    console.log(str);

}


console.log(remove("Hi!"), "Hi")
console.log(remove("Hi!!!"), "Hi")
console.log(remove("!Hi"), "!Hi")
console.log(remove("!Hi!"), "!Hi")
console.log(remove("Hi! Hi!"), "Hi! Hi")
console.log(remove("Hi"), "Hi")