function testIt(arr) {
    let alpha = 'abcdefghij'
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if (!(Number(Number(arr[i])))) {
            return 'Invalid input!'
        }
    }
    return arr
}


//return arr?
console.log(testIt(["2", "3", "4"]), ["2", "3", "4"])
console.log(testIt(["5", "6", "7"]), ["5", "6", "7"])
//return arr.sort()?
console.log(testIt(["4", "3", "2"]), ["2", "3", "4"])
console.log(testIt(["5", "7", "6"]), ["5", "6", "7"])
//The problem is not so simple
//click "submit" try more testcases...