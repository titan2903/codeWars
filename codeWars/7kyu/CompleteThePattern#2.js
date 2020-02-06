function pattern(n) {
    // n = String(n)
    var output = "";
    for (let i = n; i > 0; i--) {
        output = ""
        for (let j = 1; j < n; j++) {
            output += j
        }
        n++
    }
    console.log(output);
}


console.log(pattern(1), "1");
console.log(pattern(2), "21\n2");
console.log(pattern(5), "54321\n5432\n543\n54\n5");