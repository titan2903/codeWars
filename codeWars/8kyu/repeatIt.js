var repeatIt = function (str, n) {
    var temp = ''
    for (let i = 0; i < str.length; i++) {
        temp += str[i * n]

    }
    return temp
}


console.log(repeatIt("*", 3), "***", 'Returned unexpected value')
console.log(repeatIt("Hello", 11), "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello", 'Returned unexpected value')