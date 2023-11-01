/*
// • Strict mode changes previously accepted "bad syntax" into real errors
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
// → ReferenceError: hasDriverLicense is not defined
if (hasDriversLicense) console.log("I can drive :D");

const interface = "Audio";
// → SyntaxError: Unexpected strict mode reserved word
const private = 534;
// → SyntaxError: Unexpected strict mode reserved word

// We wont receive these errors if we don't write 'use strict'
*/

/*
// Functions
"use strict";

function logger() {
  console.log("My name is Jonas");
}

// calling / running / invoking function
logger(); // → My name is Jonas
logger(); // → My name is Jonas

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges}`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleJuice); // → Juice with 5 apples and 0
console.log(appleOrangeJuice); // → Juice with 2 apples and 4
*/

/*
"use strict";

// Function declaration
// birthYear is a parameter (placeholder)
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

// 1991 is an argument, the actual value that we use to fill the parameter
const age1 = calcAge1(1999);
console.log(age1); // → 23

// Function expression (Anonymous function)
const calcAge2 = function (birthYear) {
  return 2022 - birthYear;
};

const age2 = calcAge2(1999);
console.log(age2); // → 23

// • In JavaScript functions are values

// Function declarations can be called before they are being declared
test(5, 8); // → 13

function test(a, b) {
  return console.log(a + b);
}
*/

/*
"use strict";

// Arrow function
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(1999);
console.log(age3); // → 23

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1999, "Pavel")); // → Pavel retires in 42 years
*/

/*
// Functions calling other functions
"use strict";

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
// → Juice with 8 pieces of apples and 12 pieces of oranges.
*/

/*
// Arrays
"use strict";

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends); // → ['Michael', 'Steven', 'Peter']
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]); // → Michael
console.log(friends[2]); // → Peter
console.log(friends.length); // 3
console.log(friends[friends.length - 1]); // → Peter

friends[2] = "Jay";
console.log(friends); // → ['Michael', 'Steven', 'Jay']

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas); // → ['Jonas', 'Schmedtmann', 46, 'teacher', Array(3)]
console.log(jonas.length); // → 5

const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3); // → 47 70 19

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages); // → [47, 70, 19]
*/

/*
// Basic array operations
"use strict";

const friends = ["Michael", "Steven", "Peter"];

// push - adds element to the end of the array
// ◦ returns length of the array
const newLength = friends.push("Jay");
console.log(friends); // → ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // → 4

// unshift - adds element to the beginning of the array
friends.unshift("John");
console.log(friends); // → ['John', 'Michael', 'Steven', 'Peter', 'Jay']

// pop - remove last element from the array
// ◦ returns the removed element
const removedElement = friends.pop();
console.log(friends); // → ['John', 'Michael', 'Steven', 'Peter']
console.log(removedElement); // → Jay

// pop - remove first element from the array
// ◦ returns the removed element
friends.shift();
console.log(friends); // → ['Michael', 'Steven', 'Peter']

// indexOf - element position in the array
console.log(friends.indexOf("Steven")); // → 1

// returns -1 for element not present in the array
console.log(friends.indexOf("Bob")); // → -1

// includes - checks if element present in the array
// ◦ uses strict equality
console.log(friends.includes("Peter")); // → true
console.log(friends.includes("Bob")); // → false

friends.push(23);
console.log(friends.includes(23)); // → true
console.log(friends.includes("23")); // → false
*/

/*
// Objects
"use strict";

// In array the order of elements matter because we access them using their order
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

//Object jonas has 5 property and the order of the property does not matter when we retrieve them
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2022 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};
*/

/*
"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2022 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

 console.log(jonas);  //→ {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 31,
//   job: 'teacher',
//   friends: Array(3)
// } 

// Dot notation
console.log(jonas.lastName); // → Schmedtmann

// Bracket notation (we can use expression inside the brackets)
console.log(jonas["lastName"]); // → Schmedtmann

const nameKey = "Name";
console.log(jonas["first" + nameKey]); // → Jonas
console.log(jonas["last" + nameKey]); // → Schmedtmann

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends"
);

console.log(jonas.interestedIn); // → undefined

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]); // → returns the value you entered
} else {
  console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);
//  → {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 31,
//   job: 'teacher',
//   friends: Array(3),
//   location: "Portugal",
//   twitter: "@jonasschmedtmann"
// } 

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
); // → Jonas has 3 friends, and his best friend is called Michael
*/

/*
// Object Methods
"use strict";

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // Any function that is attached to an object is called a method
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },

  calcAge2: function () {
    return 2037 - this.birthYear;
  },

  calcAge3: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge3()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};

console.log(jonas.calcAge(1991)); // → 46
console.log(jonas["calcAge"](1991)); // → 46

// The method gets called multiple times (bad practice)
console.log(jonas.calcAge2()); // → 46
console.log(jonas.calcAge2()); // → 46
console.log(jonas.calcAge2()); // → 46

// The method gets called once and the value is stored as a property
console.log(jonas.calcAge3()); // → 46

console.log(jonas.age); // → 46
console.log(jonas.age); // → 46
console.log(jonas.age); // → 46

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"

console.log(jonas.getSummary()); // → Jonas is a 46-year old teacher, and he has a driver's license
*/

/*
// For loop
"use strict";

// console.log('Lifting weights repetition 1 🏋️‍♂️');
// console.log('Lifting weights repetition 2 🏋️‍♂️');
// console.log('Lifting weights repetition 3 🏋️‍♂️');
// console.log('Lifting weights repetition 4 🏋️‍♂️');
// console.log('Lifting weights repetition 5 🏋️‍♂️');
// console.log('Lifting weights repetition 6 🏋️‍♂️');
// console.log('Lifting weights repetition 7 🏋️‍♂️');
// console.log('Lifting weights repetition 8 🏋️‍♂️');
// console.log('Lifting weights repetition 9 🏋️‍♂️');
// console.log('Lifting weights repetition 10 🏋️‍♂️');

// For loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}
*/

/*
// Looping arrays, break, continue
"use strict";

const jonas = [
  "Jonas",
  "Schmedtmann",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], "-", typeof jonas[i]);

  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types); // → ['string', 'string', 'number', 'string', 'object']

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2022 - years[i]);
}

console.log(ages); // →  [31, 15, 53, 2]

// Continue and Break

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], "-", typeof jonas[i]);
  // → Jonas - string
  // → Schmedtmann - string
  // → teacher - string
}

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], "-", typeof jonas[i]);
  // → Jonas - string
  // → Schmedtmann - string
}
*/

/*
// Looping backwards, nested loops
"use strict";

const jonas = [
  "Jonas",
  "Schmedtmann",
  2022 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}
// → ['Michael', 'Peter', 'Steven']
// → teacher
// → 31
// → Schmedtmann
// → Jonas

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`------ Starting exercise ${exercise}`);

  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
  }
}
// → ------ Starting exercise 1
// → Lifting weights repetition 1 🏋️‍♂️
// → Lifting weights repetition 2 🏋️‍♂️
// → Lifting weights repetition 3 🏋️‍♂️
// → Lifting weights repetition 4 🏋️‍♂️
// → Lifting weights repetition 5 🏋️‍♂️
// → ------ Starting exercise 2
// → Lifting weights repetition 1 🏋️‍♂️
// → Lifting weights repetition 2 🏋️‍♂️
// → Lifting weights repetition 3 🏋️‍♂️
// → Lifting weights repetition 4 🏋️‍♂️
// → Lifting weights repetition 5 🏋️‍♂️
// → ------ Starting exercise 3
// → Lifting weights repetition 1 🏋️‍♂️
// → Lifting weights repetition 2 🏋️‍♂️
// → Lifting weights repetition 3 🏋️‍♂️
// → Lifting weights repetition 4 🏋️‍♂️
// → Lifting weights repetition 5 🏋️‍♂️
*/

/*
// While Loop
"use strict";

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`Loop is about to end..`);
}
*/

// 'use strict'

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function calcTip (bill){
//     let tip = 50 < bill && bill < 300 ? bill * 0.15 : bill * 0.2;
//     return tip;
// }

// for(let i = 0; i < bills.length; i++){
//     tips[i] = calcTip(bills[i]);
//     totals[i] = tips[i] + bills[i];
// }

// console.log(bills, tips, totals);

// function calcAverage(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;

// }

// console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals));

"use strict";

// const mark = {
//   fullname: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullname: "John Smith",
//   mass: 92,
//   height: 1.95,
//   // calcBMI : function(){
//   //     this.bmi = this.mass / this.height ** 2;
//   //     return this.bmi;
//   // }
// };

// // console.log(`${john.calcBMI() > mark.calcBMI() ? john.fullname : mark.fullname}'s BMI(${john.calcBMI() > mark.bmi ? john.calcBMI() : mark.calcBMI()}) is higher`)
// console.log(mark.calcBMI());
// // john.calcBMI();
// console.log(mark.calcBMI.call(john));

// if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s (${mark.bmi})`
//   );
// } else if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s (${john.bmi})`
//   );
// }

const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(mark.fullname);

console.log(mark["calcBMI"]());
