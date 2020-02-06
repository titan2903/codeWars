var stringToNumber = function (str) {
    var output = '';
    for (let i = 0; i < str.length; i++) {
        output += str[i]
    }
    return Number(output)
}

console.log(stringToNumber("1234"), 1234)
console.log(stringToNumber("605"), 605)
console.log(stringToNumber("1405"), 1405)
console.log(stringToNumber("-7"), -7)


/**
var stringToNumber = function(str){
return +str;
}

var stringToNumber = Number;

stringToNumber=s=>+s
 */