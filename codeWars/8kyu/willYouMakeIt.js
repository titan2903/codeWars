const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump
};

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);

/*
Caara orang lain:

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  
  if ((mpg * fuelLeft)/distanceToPump>=1)
  {
    return true;
  }
  return false;
};



const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg*fuelLeft >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};


const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump;
*/