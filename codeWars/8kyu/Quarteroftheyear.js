const quarterOf = (month) => {
    // Your code here
    if (12 / month >= 4) return 1
    if (12 / month >= 2) return 2
    if (12 / month >= 1.3) return 3
    else
        return 4
}