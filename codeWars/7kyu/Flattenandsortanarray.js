function flattenAndSort(array) {
    var output = []
    if (array.length == 0) {
        return []
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            output.push(array[i][j])
        }
    }

    for (let i = 0; i < output.length; i++) {
        for (let j = i + 1; j < output.length; j++) {
            if (output[i] > output[j]) {
                let temp = output[i]
                output[i] = output[j]
                output[j] = temp
            }
        }
    }
    return output
}



console.log(flattenAndSort([]), []);
console.log(flattenAndSort([
    [],
    [1]
]), [1]);

console.log(flattenAndSort([
    [3, 2, 1],
    [7, 9, 8],
    [6, 4, 5]
]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(flattenAndSort([
    [1, 3, 5],
    [100],
    [2, 4, 6]
]), [1, 2, 3, 4, 5, 6, 100]);


/*
Cara orang lain:
const flattenAndSort = array => [].concat(...array).sort((a,b)=>a-b)
*/