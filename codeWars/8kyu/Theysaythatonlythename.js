function isOpposite(s1, s2) {
    if (s1 == s2 || s1.toLowerCase() !== s2.toLowerCase()) {
        return false
    }

    for (let i = 0; i < s1.length; i++) {
        if (s1.charAt(i) == s2.charAt(i)) {
            return false
        }
    }
    return true
}





console.log(isOpposite("ab", "AB"), true);
console.log(isOpposite("aB", "Ab"), true);
console.log(isOpposite("aBcd", "AbCD"), true);
console.log(isOpposite("aBcde", "AbCD"), false);
console.log(isOpposite("AB", "Ab"), false);
console.log(isOpposite("", ""), false);