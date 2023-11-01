/*
// Default Parameters
"use strict";

const bookings = [];

const createBooking = function (
  flightNum = "1",
  numPassengers = 1,
  price = 200 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123"); // → {flightNum: 'LH123', numPassengers: 1, price: 200}
createBooking("LQ712", 2, 800); // → {flightNum: 'LQ712', numPassengers: 2, price: 800}
createBooking("LB251", 5); // → {flightNum: 'LB251', numPassengers: 5, price: 1000}

// Skipping parameters
createBooking("LR715", undefined, 600); // → {flightNum: 'LR715', numPassengers: 1, price: 600}
*/

/*
// Value Reference Parameters
"use strict";

const flight = "LH234";
const pavel = {
  name: "Pavel Georgiev",
  passport: 412525323,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 412525323) {
    console.log("Checked in");
  } else {
    console.log("Wrong passport!");
  }
};

checkIn(flight, pavel); // → Checked in
console.log(flight); // → LH234
console.log(pavel); // → {name: 'Mr. Pavel Georgiev', passport: 412525323}

// Is's the same as doing...
const flightNum = flight;
const passenger = pavel;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(pavel);
checkIn(flight, pavel); // → Wrong passport!

//passing a primitive type to the function, is the same as creating a copy and using that copy. so, the original won't change
//passing an object to the function creates another pointer to that object. so, the changes happen in that object
*/

/* No code here

First class functions:
• Javascript treats functions as first class citizens
• This means that functions are simple values
• Functions are just another "type" of object

High-order functions:
• Function that receives another function as an argument, that returns a new function, or both.
• This is possible because of first class functions 

 addEventListener('click', greet)
 addEventListener is a higher-order function and greet function is a call-back function
*/

/*
// Functions accepting callback functions
"use strict";

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(str);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);
// → JavaScript is the best!
    //  Transformed string: JAVASCRIPT is the best!
    //  Transformed by: upperFirstWord 

     transformer("JavaScript is the best!", oneWord);
     // → JavaScript is the best!
        //   Transformed string: javascriptisthebest!
        //   Transformed by: oneWord 
     
     // JS uses callback all the time
     const high5 = function () {
       console.log("Hi 5!");
     };
     
     ["Pavel", "Martha", "Adams"].forEach(high5);
     // → Hi 5!
        //   Hi 5!
        //   Hi 5! 
*/

/*
// Functions returning functions
"use strict";

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
greeterHey("Pavel"); // → Hey Pavel
greet("Hello")("Pavel"); // → Hello Pavel

const greet2 = (greeting) => {
  return (name) => {
    console.log(`${greeting} ${name}`);
  };
};

greet2("Hello")("Pavel"); // → Hello Pavel
*/

/*
// Call and apply methods
"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Pavel Georgiev");
// → Pavel Georgiev booked a seat on Lufthansa flight LH

const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  booking: [],
};

const book = lufthansa.book;
// Does NOT Work
// Book is a regular function and not a methode hence,
// doesn't work because "this" in regular functions call points to undefined
// book(23, "Sarah Williams");

// Call method
// calls the function and "this" will point to the first parameter in call method
book.call(eurowings, 23, "Sarah Williams");
// → Sarah Williams booked a seat on undefined flight EW

book.call(lufthansa, 230, "Mary Cooper");
// → Mary Cooper booked a seat on Lufthansa flight LH

// Apply Method (not used in modern JavaScript)
// the only difference with call method is that it takes an array for the second parameter
const flightData = [538, "George Cooper"];
book.apply(eurowings, flightData);
// → George Cooper booked a seat on undefined flight EW

book.call(eurowings, ...flightData);
// → George Cooper booked a seat on undefined flight EW
*/

/*
// 
"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNumber}`, name });
  },
};

const eurowings = {
  name: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

// Bind method
// returns the book function with This set to the argument passed in
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, "Steven Williams");
console.log(eurowings);

const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Schmedtmann");
bookEW23("Martha Cooper");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
*/

/*
// Immdiately invoked function expressions
"use strict";

const runOnce = function () {
  console.log("This will never run again");
};

runOnce(); // → This will never run again

//Immediately invoked function expression
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})(); // → This will never run again

console.log(isPrivate); // → ReferenceError

// Arrow function
(() => console.log("This will never run again"))(); // → This will never run again

{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(isPrivate); // → ReferenceError
console.log(notPrivate); // → 46
*/

/*
// Closures
// A closure makes a function remember all the variables that existed at the function's birthplace by the time it was created.
// • A function has access to the variable environment of the execution context in which it was created even after that execution context is gone.
// • Closure: variable environment attached to the function, exactly as it was at the time and place the function was created.
// • The closure has priority over the scope chain.
// • console.dir() - allows us to look at the closure of a function  

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// secureBooking()(); // =>1
// secureBooking()(); // =>1

// // Any function always has access to the variable environment of the execution context in wich the function was created
// // in the case of booker, it was born in the execution context of secureBooking, therefore it has access to passengerCount variable
// const booker = secureBooking();
// // the execution context of secureBooking is already gone at this point and passengersCount will not be redefined.
// booker(); // =>1
// booker(); // =>2

// // with console.dir we can  look into functions' properties
// console.dir(booker);

"use strict";

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // → 46
console.dir(f); // → [[Scopes]] → Closure(g)

// When we re-assigning a function to a new value than the old closure disappears.
h();
f(); // → 1554
console.dir(f); // → [[Scopes]] → Closure(h)

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function() {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000)

  console.log(`Will start boarding in $${wait} seconds`);
};

// // closure has priority over global variable
// const perGroup = 1000;// perGroup is still n / 3
boardPassengers(180, 3);
// → Will start boarding in $3 seconds
    //  We are now boarding all 180 passengers
    //  There are 3 groups, each with 60 passengers 
*/
