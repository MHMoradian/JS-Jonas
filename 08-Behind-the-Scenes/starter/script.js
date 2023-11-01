/*
// Scoping
"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output); // → You are 46, born in 1991

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW  variable with same name as outer scope's variable.
      const firstName = "Steven";
      // Reassigning out scope's variable
      output = "NEW OUTPUT";
      const str = `oh, and you're a millenial, ${firstName}`;
      console.log(str); // → oh, and you're a millenial, Steven
      function add(a, b) {
        return a + b;
      }
    }

    console.log("millenial", millenial); // → millenial true
    console.log("output", output); // → output NEW OUTPUT
  }

  printAge();
  return age;
}

const firstName = "Jonas";
calcAge(1991);
*/

/*
// Hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//Of note however, is the fact that the hoisting mechanism only moves the declaration. The assignments are left in place.

console.log(typeof variable); // Output: undefined
// In JavaScript, an undeclared variable is assigned the value undefined at execution and is also of type undefined.

console.log(variable); // Output: ReferenceError: variable is not defined
// In JavaScript, a ReferenceError is thrown when trying to access a previously undeclared variable.

console.log(hoist); // Output: undefined
var hoist = 'The variable has been hoisted.';
// We expected the result of the log to be: ReferenceError: hoist is not defined, but instead, its output is undefined.
// Why has this happened?
// JavaScript has hoisted the variable declaration. This is what the code above looks like to the interpreter:
var hoist;
console.log(hoist); // Output: undefined
hoist = 'The variable has been hoisted.';
// Because of this, we can use variables before we declare them. However, we have to be careful because the hoisted variable is initialised with a value of undefined. The best option would be to declare and initialise our variable before use.

// Note that let and const variables are not hoisted
// Also function expressions are not hoisted


"use strict";

function hoist() {
  a = 20;
  var b = 100;
  let c = 20;
}

hoist();

console.log(a);

// assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed. This means that, all undeclared variables are global variables.
// Accessible as a global variable outside hoist() function
// Output: 20


console.log(b);
console.log(c);

//Since it was declared, it is confined to the hoist() function scope.
//We can't print it out outside the confines of the hoist() function.
// Output: ReferenceError: b/c is not defined



// Variables
console.log(me); // → undefined
// console.log(job); // → reference error
// console.log(year); // → reference error

var me = "Jonas";
let job = "teacher";
const year = 1991;

// Functions

console.log(addDecl(2, 3)); // → 5
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCard(); //numproduct is undefined so the condition is met
var numProducts = 10;
function deleteShoppingCard() {
  console.log("All products deleted!"); // → All products deleted!
}

var x = 1;
let y = 1;
const z = 1;

console.log(x === window.x); // → true
console.log(y === window.y); // → false
console.log(z === window.z); // → false
*/

/*
// This keyword
"use strict";

console.log(this); // → Window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //This is undefined
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
  // → This is pointing to Window Object because arrow functions do not get their own this keyword, they use their parent context.
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // Points to Jonas object
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};
// Method borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge(); // → It will call the birth year of Matilda

const f = jonas.calcAge();
f(); // → Regular function calling there is no owner and this keyword is undefined
*/

/*
// regular vs arrow functions (this keyword)
"use strict";

// If we use var window.firstName will print "Matilda" and this is one more reason not to use var
let firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    // Method -> this points to jonas
    console.log(this);
    console.log(2037 - this.year);

    // Regular function call -> this is undefined
    // const isMillenial = function () {
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution, use the arrow function
    // Arrow function -> this is the this of surrounding function (jonas)
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  // You should never use arrow functions as methods
  greet: () => console.log(`Hey ${this.firstName}`),
  greetDecl: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
// this.firstName will check automatically on the parent scope which is window.firstName
jonas.greet();
jonas.greetDecl();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
var addArrow = (a, b) => {
  // arguments keyword is only available in regular functions
  console.log(arguments);
  return a + b;
};

addArrow(2, 5, 8);
*/

/*
"use strict";

// Primitives vs. Objects

let age = 30;
let oldAge = age;

age = 31;
console.log(age); // → 31
console.log(oldAge); // → 30

const me = {
  name: "Jonas",
  age: 30,
};
const friend = me;

friend.age = 27;

console.log("Friend:", friend); // → Friend: {name: 'Jonas', age: 27}
console.log("Me", me); // → Me {name: 'Jonas', age: 27}


// Primitives vs. Objects in Practice

// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName); // → Davis Williams

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
// → Before marriage: {firstName: 'Jessica', lastName: 'Davis', age: 27}
console.log("After marriage: ", marriedJessica); 
// → After marriage:  {firstName: 'Jessica', lastName: 'Davis', age: 27}

// Copying objects
const jessica2 = {
  firstName: "Jessica2",
  lastName: "Williams2",
  age: 27,
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis2";
console.log("Before marriage:", jessica2);
// → Before marriage: {firstName: 'Jessica2', lastName: 'Williams2', age: 27}
console.log("After marriage: ", jessicaCopy);
// → After marriage:  {firstName: 'Jessica2', lastName: 'Davis2', age: 27}

// Copying objects
const jessica3 = {
  firstName3: "Jessica3",
  lastName3: "Williams3",
  age3: 27,
  family3: ["Alice3", "Bob3"],
};
const jessicaCopy3 = Object.assign({}, jessica3); // shallow copy, copies correctly only first level properties
jessicaCopy3.lastName3 = "Davis3";
jessicaCopy3.family3.push("Mary3");
jessicaCopy3.family3.push("John3");
console.log("Before marriage3:", jessica3);
// → Before marriage3: {firstName3: 'Jessica3', lastName3: 'Williams3', age3: 27, family3: Array(4)}
console.log("After marriage3: ", jessicaCopy3);
// → After marriage3:  {firstName3: 'Jessica3', lastName3: 'Davis3', age3: 27, family3: Array(4)}
*/
