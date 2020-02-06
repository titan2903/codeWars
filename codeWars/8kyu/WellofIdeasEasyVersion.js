function well(x) {
    const goodIdeas = x.filter(idea => idea === 'good').length

    if (goodIdeas > 2) {
        return 'I smell a series!'
    }
    if (goodIdeas > 0) {
        return 'Publish!'
    } else {
        return 'Fail!'
    }

}



console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');


/*
=====SOAL======
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
*/
/*
CARA ORANG LAIN
1. ======>
function well(x){
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      count++;
      if (count == 3)
        break;
    }
  }
  return ['Fail!', 'Publish!', 'Publish!', 'I smell a series!'][count]
}
2. ======>
function well(x){
  const count = x.reduce((sum, cur)=> cur === 'good' ? ++sum : sum, 0);

  switch (count) {
      case 0:
        return 'Fail!';
      case 1:
      case 2:
        return 'Publish!';
    
      default:
        return 'I smell a series!';
    }
}
3. ======>
function well(x) {
  const n = x.reduce((n, x) => x === "good" ? n + 1 : n, 0)
  return n ? n > 2 ? "I smell a series!" : "Publish!" : "Fail!"
}
*/