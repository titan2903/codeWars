function moveZeros(arr) {
    var tempZero = [];
    var array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0 && arr[i] != false && arr[i] != []) {
            tempZero.push(arr[i])
        } else {
            array.push(arr[i])
        }
    }

    for (let i = 0; i < tempZero.length; i++) {
        array.push(tempZero[i])
    }
    return array
}


console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
console.log(moveZeros(["a", "b", null, "c", "d", 1, false, 1, 3, [], 1, 9, {}, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
console.log(moveZeros([1, null, 2, false, 1, 0, 0]));