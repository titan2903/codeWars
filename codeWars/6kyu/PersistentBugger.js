function persistence(num) {
    str = String(num)
    let numCal = 1;
    let count = 0;
    if (str.length == 1) {
        return count
    } else {
        count++
        for (let i = 0; i < str.length; i++) {
            numCal *= str[i]
        }
        return count + persistence(numCal)
    }
}

console.log(persistence(39), 3);
console.log(persistence(4), 0);
console.log(persistence(25), 2);
console.log(persistence(999), 4);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
}
2. ======>
function persistence(num) {
   var count = 0,temp;
   while(num>9){
     temp = num;
     num = 1;     
     do
     {
       num*= temp%10
       temp = Math.floor(temp/10)
     }
     while(temp)
     count++
   }
   
   return count;
}
3. ======>
function persistence(num) {
    if (num < 10)
        return 0;
    else {
        var m = 1;
        while (num / 10) {
            m = m * (num % 10);
            num = Math.floor(num / 10);
        }
        return 1 + persistence(m);
    }
}
4. ======>
function persistence (num) {
  num = num.toString()
  // Base case
  if (num.length === 1) return 0
  let multiply = 1
  for (let i = 0; i < num.length; i++) {
    multiply *= Number(num[i])
  }
  // Recursion
  return 1 + persistence(multiply)
}
*/