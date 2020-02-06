function hasSubpattern(string) {
    var arr = []
    var str = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i + 1]) {
            str += string[i]
        } else if (string[i] != string[i + 1]) {
            arr.push()
        }
    }
}

console.log(hasSubpattern("a"), "a");
console.log(hasSubpattern("aaaa"), "a");
console.log(hasSubpattern("abcd"), "abcd");
console.log(hasSubpattern("babababababababa"), "ab");
console.log(hasSubpattern("bbabbaaabbaaaabb"), "ab");
console.log(hasSubpattern("123a123a123a"), "123a");
console.log(hasSubpattern("123A123a123a"), "111222333Aaa");
console.log(hasSubpattern("12aa13a21233"), "123a");
console.log(hasSubpattern("12aa13a21233A"), "111222333Aaaa");
console.log(hasSubpattern("abcdabcaccd"), "aaabbccccdd");