/* Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall. */

"use strict";

function calcBMI() {
  this.bmi = this.mass / this.height ** 2;
  return this.bmi;
}

const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI,
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI,
};

console.log(
  `${john.calcBMI() > mark.calcBMI() ? john.fullname : mark.fullname}'s BMI(${
    john.calcBMI() > mark.bmi ? john.calcBMI() : mark.calcBMI()
  }) is higher`
);

mark.calcBMI();
john.calcBMI();
// once the function is called bmi will be stored in the object and we don't have to call the function every time we need the value.

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s (${mark.bmi})`
  );
} else if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi})`
  );
}
