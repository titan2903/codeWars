function reverseList(list) {
    var result = [];
    for (let i = list.length - 1; i >= 0; i--) {
        result.push(list[i])
    }
    return result
}


console.log(reverseList([1, 2, 3, 4]), [4, 3, 2, 1]);
console.log(reverseList([3, 1, 5, 4]), [4, 5, 1, 3]);