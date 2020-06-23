const quarterOf = (month) => {
    // Your code here
    if (12 / month >= 4) return 1
    if (12 / month >= 2) return 2
    if (12 / month >= 1.3) return 3
    else
        return 4
}


console.log(quarterOf(3), 1)
console.log(quarterOf(8), 3)
console.log(quarterOf(11), 4)