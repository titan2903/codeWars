function friend(friends) {
    //your code here
    var result = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4) {
            result.push(friends[i])
        }
    }
    return result
}

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function friend(friends){
  return friends.filter(n => n.length === 4)
}
2. ======>
const friend = friends => friends.filter(friend => friend.length == 4);
3. ======>
function friend(friends){
  //your code here
  var realFriends = [];
  for(i=0; i<friends.length; i++){
    if(friends[i].length == 4 && isNaN(friends[i])){
      realFriends.push(friends[i]);
    }
  }
  
  return realFriends
}
*/