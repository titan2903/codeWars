function wordSearch(query, seq) {
    query = query.toLowerCase()

    let arr = []
    for (let i = 0; i < seq.length; i++) {
        // console.log(seq[i]);
        if (seq[i].toLowerCase().indexOf(query) !== -1) {
            arr.push(seq[i])
        }
    }

    if (arr.length === 0) {
        arr.push('Empty')
    }
    return arr
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
console.log(wordSearch("aB", ["za", "ab", "abc", "zab", "zbc"]), ["ab", "abc", "zab"])
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]), ["aB", "Abc", "zAB"])
console.log(wordSearch("abcd", ["za", "aB", "Abc", "zAB", "zbc"]), ["Empty"])