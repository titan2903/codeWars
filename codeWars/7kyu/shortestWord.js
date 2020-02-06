function findShort(s) {
    var output = [];
    var tempArr = [];
    var str = '';
    var count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] != ' ') {
            str += s[i]
            count += 1
        } else if (s[i] == ' ') {
            tempArr.push(str, count)
            count = 0
            str = ''
            output.push(tempArr)
            tempArr = []
        }
    }
    tempArr.push(str, count)
    output.push(tempArr)
    // console.log(output)

    for (let i = 0; i < output.length; i++) {
        for (let j = i + 1; j < output.length; j++) {
            if (output[i][1] > output[j][1]) {
                var temp = output[i]
                output[i] = output[j]
                output[j] = temp
            }
        }
    }


    return output[0][1]
}



console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);


/*
CAra orang lain:

function findShort(s){
  return s.split(' ').sort((a, b) => a.length - b.length)[0].length || 0;
}

const findShort = (s) =>  s.split(' ').reduce((r,c) => c.length < r ? c.length : r, s.length);


*/