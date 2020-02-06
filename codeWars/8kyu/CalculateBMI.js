function bmi(weight, height) {
    let bmiTotal = (weight / (height * height))
    if (bmiTotal <= 18.5) return "Underweight"
    if (bmiTotal <= 25.0) return "Normal"
    if (bmiTotal <= 30.0) return "Overweight"
    if (bmiTotal > 30) return "Obese"
}

console.log(bmi(80, 1.80), "Normal");

/*
=====SOAL======
Write function bmi that calculates body mass index (bmi = weight / height ^ 2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/
/*
CARA ORANG LAIN
1. ======>
function bmi(weight, height) {
  var formula = (weight / Math.pow(height, 2));
  switch (true) {
    case formula <=18.5:
    return 'Underweight';
    case formula <=25.0:
    return 'Normal';
    case formula <=30:
    return 'Overweight';
    default:
    return 'Obese';
    
  }
}
2. ======>
function bmi(weight, height) {
  
var bmi  = weight/(height*height);

 return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

}
3. ======>
bmi = (w, h) => (w = w / h / h) > 30 ? 'Obese' : w > 25 ? 'Overweight' : w > 18.5 ? 'Normal' : 'Underweight';
*/