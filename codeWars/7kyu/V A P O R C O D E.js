function vaporcode(string) {
    str = string.toUpperCase()
    // console.log(str);
    var result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            result += str[i]
        }
        //menyatukan semua huruf tanpa spasi
    }
    // console.log(result);

    var output = ''
    for (let i = 0; i < result.length; i++) {
        if (i == result.length - 1) {
            output += result[i]
        } else {
            output += result[i] + '  '
        }
        //menggabungkan ke dalam string output
    }
    return output
}

console.log(vaporcode("Let's go to the movies"), "L  E  T  '  S  G  O  T  O  T  H  E  M  O  V  I  E  S");
console.log(vaporcode("Why isn't my code working?"), "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?");

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function vaporcode(string) {
  return Array.from(string.replace(/\s+/g, "").toUpperCase()).join("  ")
}
2. ======>
function vaporcode(string) {
  var arr=[];
  for (var i=0; i<string.length; ++i)
    if (string[i]!=' ')
      arr.push(string[i].toUpperCase());
  return arr.join('  ');
}
3. ======>
function vaporcode(string) {
    string = string.toUpperCase()
    console.log(string)
  let str=""
for(let char of string){
  if(char != " "){
    str+=char + "  "}
} return str.slice(0, str.length-2)
   
}

*/