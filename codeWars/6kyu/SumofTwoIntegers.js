function add(x, y) {
    if (x == 0) return b;
    if (y == 0) return a;

    while (y != 0) {
        var carry = x & y;
        x ^= y;
        y = carry << 1;
    }

    return x;
}

console.log(add(-14, -16), -30);
console.log(add(-50, -176), -226);
console.log(add(-10, -29), -39);
console.log(add(1, 2), 3)
console.log(add(5, 19), 24)
console.log(add(23, 17), 40)
console.log(add(-13, 13), 0);
console.log(add(-27, 18), -9);
console.log(add(-90, 30), -60);