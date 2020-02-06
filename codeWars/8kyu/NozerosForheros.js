function noBoringZeros(n) {
    var num = String(n)
    var str = ''


    for (let i = 0; i < num.length; i++) {
        if (num[i] == '0' && num[i + 1] == '0') {
            if (num[i + 2] == '0') {
                return Number(str)
            } else {
                return Number(str)
            }
        } else {
            if (i == num.length - 1 && num[i] == '0') {
                return Number(str)
            } else {
                str += num[i]
            }
        }
    }
    return Number(str)
}





console.log(noBoringZeros(1450), 145)
console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(1050), 105)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(-105), -105)
console.log(noBoringZeros(0), 0)


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}

2. ======>
function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10
  }
  return n
}
3. ======>
function noBoringZeros(n) {
  return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}
*/