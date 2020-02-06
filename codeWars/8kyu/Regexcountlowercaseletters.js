function lowercaseCount(str) {
    //How many?
    var count = 0
    var alpha = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (str[i] == alpha[j]) {
                count++
            }
        }
    }
    return count

}

console.log(lowercaseCount("abc"), 3);
console.log(lowercaseCount("abcABC123"), 3);
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 3);
console.log(lowercaseCount(""), 0)
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"), 0)
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}
2. ======>
const lowercaseCount = str => str.replace(/[^a-z]/g, '').length;
3. ======>
function lowercaseCount(str) {
  return Array.from(str).reduce((n, c) => n + ("a" <= c && c <= "z" ? 1 : 0), 0)
}
*/