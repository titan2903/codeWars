function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    var arr = []
    for (let i = 0; i < birds.length; i++) {
        let status = true
        for (let j = 0; j < geese.length; j++) {
            if (birds[i] == geese[j]) {
                status = false
            }
        }
        if (status == true) {
            arr.push(birds[i])
        }
    }
    return arr
};


console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]), ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]);

console.log(gooseFilter(["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]), ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]);


console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]), []);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter( bird => geese.indexOf(bird) < 0 );
};
2. ======>
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for (var i=0; i<birds.length; i++){
    for (var j=0; j<geese.length; j++){
      if (birds[i] === geese[j]){
        birds.splice(i, 1)
        i--
      }
    }
  }
  return birds
};
3. ======>
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var result = [];
  for (var i = 0; i < birds.length; i++) {
    console.log(birds[i]);
    if (!geese.includes(birds[i])) {
     result.push(birds[i])
    }
  }
  return result;
}
4.========>
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  var nonGeese = [];

  for (var i = 0; i < birds.length; i++) {
    var bird = birds[i];
    if (geese.indexOf(bird) === -1) {
      nonGeese.push(bird);
    }
  }
  return nonGeese;
};

*/