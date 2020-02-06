var countChange = function (money, coins, i = 0) {
  // if (money < 0) return 0;
  // if (money === 0) return 1;
  if (i === coins.length && money > 0) {
    return 0;
  } else if (money < 0) {
    return 0
  } else if (money === 0) {
    return 1
  }

  return countChange(money - coins[i], coins, i) + countChange(money, coins, i + 1);
}

console.log(countChange(4, [1, 2]), 3, 'Simple case')
console.log(countChange(10, [5, 2, 3]), 4, 'Another simple case')
console.log(countChange(11, [5, 7]), 0, 'No change')

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
var countChange = function(money, coins) {
  if(money < 0 || coins.length === 0)
    return 0
  else if(money === 0)
    return 1
  else
    return countChange(money - coins[0], coins) + countChange(money, coins.slice(1))
}
2. ======>
let countChange = (amount, coins) => {
  let [coin, ...rest] = coins
  if (!coin)       return 0
  if (amount <  0) return 0
  if (amount == 0) return 1
  return countChange(amount - coin, coins) + 
         countChange(amount, rest)
}
3. ======>
var countChange = function(money, coins) {
 var arr = new Array(money+1).fill(0);
  arr[0]=1;
  for(let i=0;i<arr.length;i++){
    for(let j=coins[i];j<=money;j++)
      arr[j]+=arr[j-coins[i]];
  }
  return arr[money]
}
*/