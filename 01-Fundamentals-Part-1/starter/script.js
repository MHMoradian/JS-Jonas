/*
let jonas_matilda = "JM";
let $function = 27;
let person = "jonas";
let PI = 3.1415;
let myFirstJob = "Coder";
let myCurrentJob = "Teacher";
let job1 = "programmer";
let job2 = "teacher";
console.log(myFirstJob);

// Variable naming convention
// 1- Variables name should not start with a number let 5name = "George" is going to through a syntax error

// 2- Variable names can contain letters, numbers, underscores or $ (dollar) sign if I try to declare a variable name first&name is going to through an error on the console

// 3- Variable names should not be same to reserved language words for example <i>new</i> or <i>function</i>.

// 4- Variable names should not start with uppercase letter let Person, usually this syntax is being used for classes in JS

// 5- Constants should be written in uppercase, so it is easy to understand that the value store is not going to change. let PI = 3.14

// 6- Variables name should be descriptive
*/

/*
// Every value is either object or primitive value

// Object Example:
let me = {
  name: "Jonas",
};

// Primitive Example:
let name = "Jonas";

// There are 7 primitive data type
// 1. Number → Floating point number, Used for decimals and integers
// 2. String → Sequence of characters. Used in single/double quotes
// 3. Boolean → logical data type for decision making. true or false.
// 4. Undefined → Value taken by a variable that is not yet defined ('empty value'). Example: let children;
// 5. Null → Also means 'empty value'
// 6. Symbol (ES2015) → Not useful for us. Just defines value which is unique and cannot be changed
// 7. BigInt (ES2020) → Larger integers than the Number type can hold

// JS has dynamic typing:
// We do not to define the data type of the value stored in a variable. It is determined automatically.
// Value has data type in JS and not variable.
// We can assign new value with different data type to same variable but can leads to some error.

let isCodingFun = true;
console.log(isCodingFun); // true

// typeof determines what type of data is being used
console.log(typeof true); // boolean
console.log(typeof "text"); // string
console.log(typeof 23); // number

// re-assigning new value to variable
isCodingFun = "Yes!";
console.log(isCodingFun); // Yes!

// Undefined values
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1991;
console.log(year); // 1991

// error with typeof
console.log(typeof null); // Object
// It should not return typeof as object. Since it is legacy issue. It is still present in JS.
*/

/*
// Three different ways to declare variables in javascript

// Mutable variable - use let
let age = 30;
age = 31;

// Immutable variable - use const
const birthYear = 1991;
birthYear = 1990; // Throws an error

// Function-scoped variable - use var (legacy)
var job = "Programmer";
job = "Teacher";

// Difference between let and var is that let is block scope while var is function scope

function varTest() {
  var x = 1;
  {
    var x = 2; // same variable!
    console.log(x); // 2
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2; // different variable
    console.log(x); // 2
  }
  console.log(x); // 1
}

// Assigning variables without a declarator declares them as global properties of the window object (not recommended)
function noDeclaratorTest() {
  x = 5;
}
noDeclaratorTest();
console.log(x); // 5

// When to use let and const for array and objects.
// There is no preferred one, its based on your choice of usage for that array or object. You have to understand mutation and reassigning clearly.

// Mutation - updates the values present in the memory

// Reassign - variable points to new memory locations where new values are stored

// Let - offers both mutation and reassiging

// Const - offers mutation but not reassiging

// Both - do not offer redeclaring

// If your usecase only needs mutation, you can go for const. if you need reassigning then go for let.

// LET

let condiments = ["Ketchup", "Soy Sauce", "Sriracha"];

// Mutation possible
condiments[0] = "Mayo";
console.log(condiments); //=> [ 'Mayo', 'Soy Sauce', 'Sriracha' ]

// Re-assigning possible
condiments = ["Mayo"];
console.log(condiments); //=> [ 'Mayo' ]

// Re-declaring not possible
//let condiments = [] //=> SyntaxError: Identifier 'condiments' has already been declared

// CONST

const utensils = ["Fork", "Chopsticks", "Spork"];

// Mutation Possible
utensils[2] = "Spoon";
console.log(utensils); //=> [ 'Fork', 'Chopsticks', 'Spoon' ]
utensils.length = 0;
console.log(utensils); //=> [ ]

// Re-assigning not possible
//utensils = ['Spoon']; //=> TypeError: Assignment to constant variable.

// Re-declaring not possible
//const utensils = {} //=> SyntaxError: Identifier 'condiments' has already been
*/

/*
// An operator allows us to transform values or combine values

// Arithmetic operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // x = 15
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // x = x * 4 = 100
console.log(x);
x++; // x = x + 1 = 101
console.log(x);
x--; // x = x - 1 = 100
console.log(x);
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=, ==, ===, !=, !==
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);

// Logical operators
const a = 5, b = 3;
console.log(a < 6 && b < 5); // true

// logical AND
console.log(true && true); // true
console.log(true && false); // false

// logical OR
console.log(true || false); // true

// logical NOT
console.log(!true); // false
*/

/*
// Operator precedence is a collection of rules in JavaScript that reflect conventions about which procedure to perform first in a given mathematical expression.

// MDN → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

// String concatenation with variables
const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

// String interpolation
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

// Multi-line string before ES6
console.log("string with \n\
multiple \n\
lines");

// Multi-line template string
console.log(`String with
multiple
lines`);
*/

/*
const age = 20;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start driving license 🚗"); // <= Gets printed
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft}`);
}

// Conditionally assigning values
const birthYear = 1994;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`Person is born in ${century} century`);
// Output: Person is born in 20 century
*/

/*
// Type conversion
// • When we manually convert from one type to the another

// We can convert strings to numbers by using the build-in Number() function
console.log(Number("1991") + 18); // → 2009

// We can convert numbers to strings by using the build-in String() function
console.log(String(23) + 23); // → "2323"

// There are certain types that are impossible to convert.
console.log(Number("Jonas")) // → NaN
// • It is good to note that NaN actually means an invalid number because if you
//use the typeof operator to check the data type, the result is a number.


// Type coercion
// • When JS automatically converts the types behind the scene

// The + operator in JS triggers an coercion to strings
console.log("1991" + 18); // → "199118"

// The -, *, and / operators in JS trigger an coercion to numbers
console.log("20" - "10" - 3) // → 7
console.log("20" * "2") // → 40
console.log("20" / "2") // → 10


// Practice
const n = "1" + 1; // → "11"
console.log(n - 1); // → 10

console.log(2 + 3 + 4 + "5") // → "95"

console.log("10" - "4" - "3" - 2 + "5") // → 15
*/

/*
// • Falsy values are values that are not exactly false but will
// become false when they are converted to a Boolean. In JavaScript there
// are over 6 falsy values: undefined , null , NaN , 0 , "" (empty string), and false 
console.log(Boolean(0)); // → false;
console.log(Boolean(undefined)); // → false

// Everything else is called: Truthy values
console.log(Boolean("Jonas")); // → true
console.log(Boolean({})); // → true

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!"); // → You should get a job!
}
// • The result is false because in a logical context of an if/else statement
//condition, JavaScript will try to coerce any value (in this case: 0) into a Boolean,
//and this happens using the falsy & truthy value rules. 
*/

/*
// The strict equality operator does not perform a type coercion
console.log(18 === "18"); // → false

// The loose equality operator does perform a type coercion
console.log(18 == "18"); // → true

let favorite = prompt("What's your favorite number?");
console.log(favorite); // → the number you entered
console.log(typeof favorite); // → string
favorite = Number(favorite);

if (favorite === 9) {
  console.log("Cool, 9 is my favorite number as well!");
} else if (!isNaN(favorite)) {
  console.log(`${favorite} is also a cool number :)`);
} else {
  console.log("The value you entered is not a number :(");
}

if (favorite !== 9) {
  console.log("Why not 9?");
}
*/

/*
// Boolean logic
const age = 16;
const a = age >= 20; //false
const b = age < 30; //true

// NOT operator
console.log(!a); //true

// AND operator
console.log(a && b); //false
console.log(!a && b); //true

// OR operator
console.log(a || b); //true
console.log(a || !b); //false
*/

/*
//logical operators
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // → false
console.log(hasDriversLicense || hasGoodVision); // → true
console.log(!hasDriversLicense); // → false

const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive..."); // → Someone else should drive...
}
*/

/*
// Switch statement
const day = "thursday";

// • Switch statement does strict comparison ===
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday": // • We can have more than one true cases
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid date!");
}

// Replace the code above with an if/else statement
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid date!");
}
*/

/*
// • An expression is a piece of code that produces a single value
console.log(3 + 4);
console.log(1991);
console.log(true && false && !false);

// • Statement is a bigger piece of code that is executed and which does
//not produce a value on itself 
if (23 > 10) { // This statement doesn't produce a value
    const str = "23 is bigger"; // It only declares this variable
  }
  
  // foo(if () {return 2}) // Throws an error
  
  // • JavaScript expects statements and expressions in different places for
  //e.g. in template literals we can use only expressions, but not statements 
  const expression1 = "Jonas";
  const expression2 = 2037 - 1991;
  console.log(`My name is ${expression1} and I am ${expression2} years old`);
*/

/*
// conditional ternary operator
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷") // → I like to drink wine 🍷
  : console.log("I like to drink water 💧");

// Operators always produce a value
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink); // → wine 🍷

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2); // → wine 🍷

// We can use ternary operator in template literals, 
// because all operators are expressions 
console.log(`I like to drink ${drink}`); // → wine 🍷
*/
