function howMuchILoveYou(num) {
    const phrases = [
        'not at all',
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly',
    ]
    return phrases[num % 6]

}


console.log(howMuchILoveYou(7), "I love you")
console.log(howMuchILoveYou(3), "a lot")
console.log(howMuchILoveYou(6), "not at all")

/*
=====SOAL======
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
*/
/*
CARA ORANG LAIN
1. ======>
const howMuchILoveYou=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]
2. ======>
function howMuchILoveYou(nbPetals) {
    var digit = nbPetals > 6 ? nbPetals % 6 : nbPetals;
    
    return digit % 6 === 0 ? "not at all" :
           digit % 5 === 0 ? "madly" :
           digit % 4 === 0 ? "passionately" :
           digit % 3 === 0 ? "a lot" :
           digit % 2 === 0 ? "a little" :
           "I love you";
}
3. ======>
function howMuchILoveYou(nbPetals) {
  
 let resto = nbPetals % 6;
 
 switch (resto) {
  case 0:
    return 'not at all'
  case 1:
    return 'I love you'
  case 2:
    return 'a little'
  case 3:
    return 'a lot'
  case 4:
    return 'passionately'
  case 5:
    return 'madly'
  
  default:
    return 
 }
}
*/