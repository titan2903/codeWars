function checkVowel(string, position) {
    var vowel = 'aeiouAEIOU'

    for (let i = 0; i < vowel.length; i++) {
        if (string[position] == vowel[i]) {
            return true
        }
    }
    return false
}



console.log(checkVowel('cat', 1), true);
console.log(checkVowel('cat', 0), false);
console.log(checkVowel('cat', 4), false);
console.log(checkVowel('Amanda', -2), false);
console.log(checkVowel('Amanda', 0), true);
console.log(checkVowel('Amanda', 2), true);


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const checkVowel=(s,p)=>'aeiouAEIOU'.includes(s[p])
2. ======>
const checkVowel = (s, p) => /[aeiou]/i.test(s[p] || "")
3. ======>
function checkVowel(string, position) {
  return 'aeiouAEIOU'.indexOf(string[position]) !== -1;
};
*/