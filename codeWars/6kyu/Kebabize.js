function kebabize(str) {
    let temp = '';
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[i].toUpperCase() && !(Number(Number(str[i]))) && str[i] != '0') {
            temp += str[i]
        } else if (str[i] == str[i].toUpperCase() && !(Number(Number(str[i]))) && str[i] != '0') {
            if (temp) {
                arr.push(temp)
            }
            temp = ''
            temp += str[i].toLowerCase()
        }
    }
    arr.push(temp)
    // console.log(arr);


    let output = '';
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1 || arr.length == 1) {
            output += arr[i]
        } else {
            output += arr[i] + '-'
        }
    }
    return output
}


console.log(kebabize('myCamelCasedString'), 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');


/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function kebabize(str) {
  return str.replace(/[^a-z]/ig, '').
         replace(/^[A-Z]/, c => c.toLowerCase()).
         replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}
2. ======>
function kebabize(str) {
  return str.replace(/[0-9]/g, '').splitOnCase().filter(a => !!a).join('-').toLowerCase();
}

Object.defineProperty(String.prototype, 'splitOnCase', {
  value:function() {
    var arr = [], lst = 0;
    
    for(var key in this)
      if(this[key] === this[key].toUpperCase())
        arr.push(this.slice(lst, +key)), lst = +key;
    
    return arr.push(this.slice(lst)), arr;
  }
});
3. ======>
function kebabize(str) {
  // return
  var vocal = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var angka = '0123456789'
    var tempArray = str.split('')
    for (var i = 0; i < tempArray.length; i++) {
        for (var j = 0; j < angka.length; j++) {
            if (tempArray[i] === angka[j]) {
                tempArray[i] = ''
            }
        }
    }
    var tempStr = tempArray.join('')
    var result = ''
    // console.log(tempStr)
    for (var i = 0; i < tempStr.length; i++) {
        var temp = tempStr[i].toLowerCase()
        for (var j = 0; j < vocal.length; j++) {
            if (i !== 0) {
                if (tempStr[i] === vocal[j] ) {
                    result += '-' + tempStr[i].toLowerCase()
                    temp = ''
                }

            }
        }
        result += temp
    }
    console.log(result)
      return result
}
*/