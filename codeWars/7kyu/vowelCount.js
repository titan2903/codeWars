/**
Return the number (count) of vowels in the given string.

We will consider a, u, e, i, o, and u as vowels for this Kata.

The input string will only consist of lower case letters and/or spaces.
 */


function getCount(str) {
    var vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'i' || str[i] == 'u' || str[i] == 'e' || str[i] == 'o') {
            vowelsCount += 1
        }
    }


    return vowelsCount;
}
console.log(getCount("abracadabra"), 5)

/**
cara orang lain

1.function getCount(str) {
return str.replace(/[^aeiou]/gi, '').length;
}

2.const getCount = str => str.replace(/[^aeiou]/g, '').length;

3.function getCount(str) {
    let n = str.match(/[aeiou]/ig);
    return n ? n.length : 0;
};

4.function getCount(str) {
var vowelsCount = 0;
for (index in str){
    switch (str[index]) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    vowelsCount++;
    break;
    }   
}
return vowelsCount;
}
 */