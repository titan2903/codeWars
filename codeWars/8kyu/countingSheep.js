function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var count = 0;
    // var arr = [];
    for (let i = 0; i < arrayOfSheep.length; i++) {
        // console.log(arrayOfSheep[i]);

        if (arrayOfSheep[i] == true) {
            count++
        }
    }
    // console.log(arr);
    return count

}

var array1 = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
];

console.log(countSheeps(array1), 17, "There are 17 sheeps in total")