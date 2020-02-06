function checkAlive(health) {
    // if (health > 0) {
    //     return true
    // } else {
    //     return false
    // }
    return health > 0
}

console.log(checkAlive(5), true)
console.log(checkAlive(0), false)