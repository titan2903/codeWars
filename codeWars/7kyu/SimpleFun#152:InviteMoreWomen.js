function inviteMoreWomen(L) {
    var count = 0;
    for (let i = 0; i < L.length; i++) {
        count += L[i]
    }
    if (count <= 0) {
        return false
    } else if (count > 0) {
        return true
    }
}


console.log(inviteMoreWomen([1, -1, 1]), true)
console.log(inviteMoreWomen([1, 1, 1]), true)
console.log(inviteMoreWomen([-1, -1, -1]), false)
console.log(inviteMoreWomen([1, -1]), false)