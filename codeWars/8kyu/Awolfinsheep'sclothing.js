function warnTheSheep(queue) {
    let count = 0
    if (queue[queue.length - 1] == 'wolf') return "Pls go away and stop eating my sheep"
    for (let i = queue.length - 1; i >= 0; i--) {
        if (queue[i] != 'wolf') {
            count++
        } else {
            return `Oi! Sheep number ${count}! You are about to be eaten by a wolf!`
        }
    }
}


console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]), "Oi! Sheep number 2! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
console.log(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}
2. ======>
function warnTheSheep(queue) {
    let sheepIndex = queue.length - queue.indexOf('wolf') - 1;
    if (sheepIndex === 0)
        return 'Pls go away and stop eating my sheep';
    return `Oi! Sheep number ${sheepIndex}! You are about to be eaten by a wolf!`;
}
3. ======>
function warnTheSheep(queue) {
  let {length} = queue;
  length--;
  if(queue[length] === 'wolf') return "Pls go away and stop eating my sheep";
  for(let i = length; i >= 0; i--){
    if(queue[i] === 'wolf'){
      return `Oi! Sheep number ${length-i}! You are about to be eaten by a wolf!`;
    }
  }
}
*/