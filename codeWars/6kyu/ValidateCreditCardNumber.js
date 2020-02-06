function validate(n) {
    str = n.toString().split('')
    let output = 0
    for (let i = 0; i < str.length; i++) {
        if (str.legth % 2 != 0) {
            if (i % 2 == 1) str[i] *= 2
            if (str[i] > 9) str[i] -= 9
        } else {
            if (str.length % 2 == 0 || i % 2 == 0 || i == 0) str[i] *= 2
            if (str[i] > 9) str[i] -= 9
        }
        output += parseInt(str[i])
    }
    return output % 10 == 0
}

console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);