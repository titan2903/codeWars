function palindrome(num) {
    var str = String(num)
    var result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    console.log(result);

}

console.log(palindrome(1212), true);
console.log(palindrome(89698), true);
console.log(palindrome(7653356), true);
console.log(palindrome(100134), false);
console.log(palindrome(13598), false);
console.log(palindrome("ACCDDCCA"), "Not valid");
console.log(palindrome("1212"), "Not valid");
console.log(palindrome(-4505), "Not valid");