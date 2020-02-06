function tripledouble(num1, num2) {
    num1 = String(num1)
    num2 = String(num2)
    let arrNum1 = []
    let arrNum2 = []

    for (let i = 0; i < num1.length; i++) {
        let found = false
        for (let j = 0; j < arrNum1.length; j++) {
            if (num1[i] == arrNum1[j][0]) {
                arrNum1[j][1] += 1
                found = true
            }
        }
        if (!found) {
            arrNum1.push([num1[i], 1])
        }
    }
    // console.log(arrNum1);

    for (let i = 0; i < num2.length; i++) {
        let found = false
        for (let j = 0; j < arrNum2.length; j++) {
            if (num2[i] == arrNum2[j][0]) {
                arrNum2[j][1] += 1
                found = true
            }
        }
        if (!found) {
            arrNum2.push([num2[i], 1])
        }
    }
    // console.log(arrNum2);

    let searchNum1 = [];
    for (let i = 0; i < arrNum1.length; i++) {
        if (arrNum1[i][1] == 3) searchNum1.push(arrNum1[i])
    }
    console.log(searchNum1);

    let searchNum2 = [];
    for (let i = 0; i < arrNum2.length; i++) {
        if (arrNum2[i][1] >= 2) searchNum2.push(arrNum2[i])
    }
    console.log(searchNum2);

}

console.log(tripledouble(451999277, 41177722899), 1);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(12345, 12345), 0);
console.log(tripledouble(666789, 12345667), 1);
console.log(tripledouble(10560002, 100), 1);
console.log(tripledouble(1112, 122), 0);