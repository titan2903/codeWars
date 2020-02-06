// function seatsInTheater(nCols, nRows, col, row) {
//     return (nRows - row) * (nCols - (col - 1))
// }

seatsInTheater = (nCols, nRows, col, row) => (nRows - row) * (nCols - (col - 1))



console.log(seatsInTheater(16, 11, 5, 3), 96)
console.log(seatsInTheater(1, 1, 1, 1), 0)
console.log(seatsInTheater(13, 6, 8, 3), 18)
console.log(seatsInTheater(60, 100, 60, 1), 99)
console.log(seatsInTheater(1000, 1000, 1000, 1000), 0)

/*
Cara orang lain:
seatsInTheater = (a, b, c, d) => (a - c + 1) * (b - d);

const seatsInTheater = (a,b,c,d) => (a-c+1)*(b-d);

function seatsInTheater(nCols, nRows, col, row) {
  //coding and coding..
  if ( !(1 <= nCols <= 1000) ) {
      return false;
  }
  if ( !(1 <= nRows <= 1000) ) {
      return false;
  }
  if ( !(1 <= row <= nRows) ) {
      return false;
  }
  if ( !(1 <= col <= nCols) ) {
      return false;
  }
  return (nCols - col + 1) * (nRows - row);  
}



*/