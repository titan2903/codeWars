function Word2Num(str) {
    var numbers = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
    };
    return {
        valueOf: () => numbers[str],
        toString: () => str,
    };
}







/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function Word2Num (str) {
    function Numword () {
        this.valueOf = () => ["zero","one","two","three","four","five","six","seven","eight","nine","ten"].indexOf(str)
        this.toString = () => str
    }
    return new Numword(str)
}
2. ======>
class Numeral {
  constructor(word) {
    this.word = word
    this.value = Numeral.values[word]
  }
  
  toString() {
    return this.word
  }
  
  valueOf() {
    return this.value
  }
}

Numeral.values = {
  zero: 0,  one: 1,  two: 2,  three: 3,  four: 4,
  five: 5,  six: 6,  seven: 7,  eight: 8,  nine: 9,
  ten: 10,
}

function Word2Num(str) {
  return new Numeral(str)
}
3. ======>
Word2Num=s=>({valueOf:()=>'zeontwthfofisiseeinite'.search(s[0]+s[1])/2,toString:()=>s})
*/