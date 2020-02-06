function indexOf(head, value) {
    var count = 0;
    for (let i = 0; i <= head.length; i++) {
        if (head[1] === value) {
            count++
            return count
        }
    }
    return -1
}



console.log(indexOf(null, 17), -1);
console.log(indexOf(listFromArray([1, 2, 3]), 2), 1);
console.log(indexOf(listFromArray(['aaa', 'b', 'abc']), 'aaa'), 0);
console.log(indexOf(listFromArray([17, '17', 1.2]), 17), 0);
console.log(indexOf(listFromArray([17, '17', 1.2]), '17'), 1);
console.log(indexOf(listFromArray([1, 2, 3, 3]), 3), 2);