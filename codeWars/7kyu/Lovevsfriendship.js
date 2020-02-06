function wordsToMarks(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == "a") {
            count += 1
        } else if (string.charAt(i) == "b") {
            count += 2
        } else if (string.charAt(i) == "c") {
            count += 3
        } else if (string.charAt(i) == "d") {
            count += 4
        } else if (string.charAt(i) == "e") {
            count += 5
        } else if (string.charAt(i) == "f") {
            count += 6
        } else if (string.charAt(i) == "g") {
            count += 7
        } else if (string.charAt(i) == "h") {
            count += 8
        } else if (string.charAt(i) == "i") {
            count += 9
        } else if (string.charAt(i) == "j") {
            count += 10
        } else if (string.charAt(i) == "k") {
            count += 11
        } else if (string.charAt(i) == "l") {
            count += 12
        } else if (string.charAt(i) == "m") {
            count += 13
        } else if (string.charAt(i) == "n") {
            count += 14
        } else if (string.charAt(i) == "o") {
            count += 15
        } else if (string.charAt(i) == "p") {
            count += 16
        } else if (string.charAt(i) == "q") {
            count += 17
        } else if (string.charAt(i) == "r") {
            count += 18
        } else if (string.charAt(i) == "s") {
            count += 19
        } else if (string.charAt(i) == "t") {
            count += 20
        } else if (string.charAt(i) == "u") {
            count += 21
        } else if (string.charAt(i) == "v") {
            count += 22
        } else if (string.charAt(i) == "w") {
            count += 23
        } else if (string.charAt(i) == "x") {
            count += 24
        } else if (string.charAt(i) == "y") {
            count += 25
        } else if (string.charAt(i) == "z") {
            count += 26
        }
    }

    return count
}

console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
2. ======>
function wordsToMarks(str)
{
  var sum = 0;
  for (let i = 0; i < str.length; i++)
    sum += str.charCodeAt(i) - 96;
  return sum;
}
3. ======>
function wordsToMarks(string){
  //your code here
  var aBet = "abcdefghijklmnopqrstuvwxyz", ctr=0;
  
  for (i=0; i < aBet.length; i++)
    {
      for (j=0; j < string.length; j++)
        {
          if (aBet.charAt(i) === string.charAt(j))
            ctr+= i+1;
        } 
    }
    return ctr;
}
*/