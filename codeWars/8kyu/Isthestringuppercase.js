String.prototype.isUpperCase = function () {
    var str = 'abcdefghijklmnopqrstuvwxyz'

    function aaa(value, str) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == value) {
                return i
            }
        }
        return -1
    }

    for (let i = 0; i < this.length; i++) {
        if (aaa(this[i], str) > -1) {
            return false
        }
    }
    return true



    // var alpha2 = 'abcdefghijklmnopqrstuvwxyz'
    // for (let i = 0; i < this.length; i++) {
    //     if (alpha2.indexOf(this[i]) > -1) {
    //         return false
    //     }
    // }
    // return true

    // for (let i = 0; i < this.length; i++) {
    //     if (this[i] != this[i].toUpperCase()) {
    //         return false
    //     }
    // }
    // return true
}





console.log('c'.isUpperCase(), false, 'c is not upper case');
console.log('C'.isUpperCase(), true, 'C is upper case');
console.log('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
// console.log('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
// console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
// console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
// console.log('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
// console.log('hello world'.isUpperCase(), false, 'hello world is not upper case');
// console.log('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
// console.log('hello World'.isUpperCase(), false, 'hello World is not upper case');
// console.log('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
// console.log('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
// console.log('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
// console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
// console.log('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
// console.log('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
// console.log('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
// console.log('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
// console.log('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
// console.log('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
// console.log('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
// console.log('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
// console.log('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
// console.log('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};
2. ======>
String.prototype.isUpperCase = function() {
    return this.valueOf().toUpperCase() === this.valueOf();
};
3. ======>
String.prototype.isUpperCase=function() {return this==this.toUpperCase()}
*/