function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let currentHeight = 0;
    for (var i = 1;; i++) {
        currentHeight += upSpeed;
        if (currentHeight >= desiredHeight) {
            break;
        } else {
            currentHeight -= downSpeed;
        }
    }
    return i;
}


console.log(growingPlant(100, 10, 910), 10)
console.log(growingPlant(10, 9, 4), 1)

/*
=====SOAL======
pasteDisini
*/
/*
CARA ORANG LAIN
1. ======>
function growingPlant(upSpeed, downSpeed, desiredHeight) {  
  var i = 1;
  for (var height = upSpeed; height < desiredHeight; height = height + upSpeed){
    height = height - downSpeed;
    i++;   
  }
  return i;
}
2. ======>
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  if (downSpeed > upSpeed) {
    return -1;
  }
  
  let height = downSpeed;
  let days = 0;
  do {
    days++;
    height -= downSpeed;
    height += upSpeed;
  } while (height < desiredHeight)
  
  return days;
}
3. ======>
const growingPlant = (u, d, y) => 1 + (y > u ? Math.ceil((y - u)/(u - d)) : 0);
*/