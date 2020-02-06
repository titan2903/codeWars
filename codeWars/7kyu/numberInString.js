function solve(s) {
    // var tempStr = '';
    // var newArr = [];
    // for (let i = 0; i < s.length; i++) {
    //     if (tempStr) {
    //         if (Number(s[i])) {
    //             tempStr += s[i]
    //             // console.log(tempStr);
    //             // console.log(typeof tempStr);
    //         } else {
    //             newArr.push(Number(tempStr))
    //             tempStr = ''
    //         }
    //     } else if (Number(Number(s[i]))) {
    //         tempStr += s[i]
    //     }
    // }
    // newArr.push(Number(tempStr))
    // console.log(newArr);

    numArr = [];
    var num = "";
    for (var i = 0; i < s.length; i++) {

        if (!isNaN(s[i]) && isNaN(s[i + 1])) {
            num += s[i];
            numArr.push(parseInt(num));
            num = "";
        } else if (!isNaN(s[i])) {
            num += s[i];
        }
    }

    // console.log('Cek Tipe Data : ', typeof s[2]);
    // console.log('Kondisi : ', typeof Number(s[2]));



    for (let i = 0; i < numArr.length; i++) {
        for (let j = i + 1; j < numArr.length; j++) {
            if (numArr[i] < numArr[j]) {
                let temp = numArr[i]
                numArr[i] = numArr[j]
                numArr[j] = temp
            }
        }
    }
    // console.log(numArr)
    return numArr[0]
}
console.log(solve('gh012cdy695m1ddd8009'), 695);
// console.log(solve('2ti9iei7qhr5'), 9);
// console.log(solve('vih61w8oohj5'), 61);
// console.log(solve('f7g42g16hcu5'), 42);
// console.log(solve('lu1j8qbbb85'), 85);