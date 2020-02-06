function biggestNum(a, b) {
    if (Number(a) > Number(b)) {
        return String(a)
    } else if (Number(a) < Number(b)) {
        return String(b)
    }
}


console.log(biggestNum("25", "7"), "25");
console.log(biggestNum("214", "507"), "507");