function getNumberFromString(s) {
    var res = '';
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '1' || s[i] == '2' || s[i] == '3' || s[i] == '4' || s[i] == '5' || s[i] == '6' || s[i] == '7' || s[i] == '8' || s[i] == '9' || s[i] == '0') {
            res += s[i];
        }
    }
    return Number(res);
}



console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);