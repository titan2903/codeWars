function minValue(values) {
    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            if (values[i] > values[j]) {
                let temp = values[i]
                values[i] = values[j]
                values[j] = temp
            }
        }
    }

    var tempStr = '';
    for (let i = 0; i < values.length; i++) {
        if (values[i] != values[i - 1]) {
            tempStr += values[i]
        }
    }
    return Number(tempStr)
}


console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);
console.log(minValue([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 0);


/*
Cara orang lain:

const minValue = array => parseInt(Array.from(new Set(array)).sort((a, b) => a - b).join``);


function minValue(values){
  let noDuplicateArray = [...new Set(values)];
  let sortedArray = noDuplicateArray.sort((a, b) => a - b);
  let joinedArray = sortedArray.join('');
  let convertedToInterger = parseInt(joinedArray);
  return convertedToInterger;
}
*/