var min = function (list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] > list[j]) {
                let temp = list[i]
                list[i] = list[j]
                list[j] = temp
            }
        }
    }
    return list[0]
}

var max = function (list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[i] < list[j]) {
                let temp = list[i]
                list[i] = list[j]
                list[j] = temp
            }
        }
    }
    return list[0]
}


console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log(max([5]), 5);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
2. ======>
const min = (list) => list.reduce((min_val, val) => min_val <= val ? min_val : val);
const max = (list) => list.reduce((max_val, val) => max_val > val ? max_val : val);
3. ======>
const min = Function.apply.bind(Math.min, null);
const max = Function.apply.bind(Math.max, null);
*/