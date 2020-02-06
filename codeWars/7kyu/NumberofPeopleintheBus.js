var number = function (busStops) {
  var countRight = 0
  var countLeft = 0
  for (let i = 0; i < busStops.length; i++) {
    countLeft += busStops[i][0]
    countRight += busStops[i][1]
  }
  return countLeft - countRight
}

console.log(number([
  [10, 0],
  [3, 5],
  [5, 8]
]), 5);
console.log(number([
  [3, 0],
  [9, 1],
  [4, 10],
  [12, 2],
  [6, 1],
  [7, 10]
]), 17);
console.log(number([
  [3, 0],
  [9, 1],
  [4, 8],
  [12, 2],
  [6, 1],
  [7, 8]
]), 21);



/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
2. ======>
var number = function(busStops){
  var totalPeople = 0;
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}
3. ======>
var number = function(busStops){
  return busStops.map(x => x[0] - x[1]).reduce( (x, y) => x + y);
}
*/