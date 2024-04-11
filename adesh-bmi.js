const calculateBMI = (weight, height) => {
  weight = parseFloat(weight);
  height = parseFloat(height);

  if (isNaN(weight) || weight <= 0)
    return "Weight should be a number and greater than 0";

  if (isNaN(height) || height <= 0)
    return "Height should be a number and greater than 0";

  if (height > 3) height = height / 100;
  if (weight / 1000 >= 1) weight = weight / 1000;

  return (weight / height ** 2).toFixed(2);
};

const interpretBMI = (bmi) => {
  if (bmi < 18.5) return "Underweight";
  else if (bmi >= 18.5 && bmi < 25) return "Normal weight";
  else if (bmi >= 25 && bmi < 30) return "Overweight";
  else return "Obese";
};

let yourWeight = 90; //kg or grams
let yourHeight = 1.91; //m or cm

const result = calculateBMI(yourWeight, yourHeight);

console.log(`Your BMI: ${result}. In simple words: ${interpretBMI(result)}.`);