function mxdiflg(a1, a2) {
    // a1 += a2
    // a1.split(' ')
    // var arr = []
    // var str = ''
    // for (let i = 0; i < a1.length; i++) {
    //     if (a1[i] != ' ') {
    //         str += a1[i]
    //     } else if (a1[i] == ' ') {
    //         arr.push(str)
    //         str = ''
    //     }
    // }
    // arr.push(str)
    // console.log(a1);

    // var count = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     count += arr[i].length
    // }

    // console.log(count);
    if (!a1.length || !a2.length) return -1
    let a3 = a1.concet(a2)
    return a3


}


var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2), 13);