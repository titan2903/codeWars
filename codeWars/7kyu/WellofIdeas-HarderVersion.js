function well(x) {
    var good = 0;
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            if (x[i][j] === "good" || x[i][j] === "gOOd" || x[i][j] === "GOOD") {
                good++;
            }

        }
    }
    good;
    if (good === 0) return "Fail!";
    if (good > 2) return "I smell a series!";
    if (good >= 1 && good <= 2) return "Publish!";
}


console.log(well([
    ['bad', 'bAd', 'bad'],
    ['bad', 'bAd', 'bad'],
    ['bad', 'bAd', 'bad']
]), 'Fail!');
console.log(well([
    ['gOOd', 'bad', 'BAD', 'bad', 'bad'],
    ['bad', 'bAd', 'bad'],
    ['GOOD', 'bad', 'bad', 'bAd']
]), 'Publish!');
console.log(well([
    ['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'],
    ['bad'],
    ['gOOd', 'BAD']
]), 'I smell a series!');

/*
=====SOAL======
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, GOOD and gOOd all count as a good idea). All inputs may not be strings.
*/
/*
CARA ORANG LAIN
1. ======>
function well(x){
console.log(x)
var nilai = 'fail!'
count = 0;
    for(i = 0; i < x.length; i++){
        for(j = 0; j < x[i].length; j++){
        netral = x[i][j].toString().toLowerCase();
            if(netral == 'good'){
                count ++
            }
        }
        if(count > 2){
            nilai = 'I smell a series!'
        } else if (count >=1){
            nilai = 'Publish!'
        } else
          nilai = 'Fail!'
    }
    return nilai
}
2. ======>
function well(x) {
  let match = (''+x).match(/good/gi) || []
  if (match.length == 0) return 'Fail!'
  if (match.length <= 2) return 'Publish!'
  return 'I smell a series!'
}
3. ======>
function well(ideas){
  let good = 0;
  
  for (let i = 0, lenX = ideas.length; i < lenX; i++) {
    for (let j = 0, lenY = ideas[i].length; j < lenY; j++) {
      if (('' + ideas[i][j]).toLowerCase() === 'good' && ++good > 2) {
        return 'I smell a series!';
      }
    }
  }
    
  return good ? 'Publish!' : 'Fail!';
}
*/