function reverseIt(data) {
    let newString = '',
        string = data;
    if (typeof data !== 'string' && typeof data !== 'number') return data;
    if (typeof data == 'number') string += '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i]
    }
    return typeof data === 'number' ? +newString : newString
}

console.log(reverseIt('Hello'), "olleH", 'Not quite')
console.log(reverseIt(314159), 951413, 'Not quite')
console.log(reverseIt("314159"), "951413", 'Not quite')
console.log(reverseIt([]), [], 'Not quite')