function longest(s1, s2) {
    s1 += s2
    var arr = []
    for (let i = 0; i < s1.length; i++) {
        var find = false
        for (let j = 0; j < arr.length; j++) {
            if (s1[i] == arr[j]) {
                find = true
            }
        }
        if (find == false) {
            arr.push(s1[i])
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    var str = ''
    for (let i = 0; i < arr.length; i++) {
        str += arr[i]
    }
    return str
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
2. ======>
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

3. ======>
const longest = (s1, s2) => Array.from(s1 + s2)
  .sort()
  .filter((x, i, a) => x !== a[i-1])
  .join('');

*/