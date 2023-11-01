/*
// Destructuring Arrays

"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Storing every element in the array in different variables
const arr = [2, 3, 4];

// Old way of storing array values in different variables
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring example
const [x, y, z] = arr;
console.log(x, y, z); // → 2 3 4

// Original array is not affected
console.log(arr); // → (3) [2, 3, 4]

// Skipping values with destructuring
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // → Italian Vegetarian

// Swapping values with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary); // → Vegetarian Italian

// Destructuring values returned from a functions
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // → Garlic Bread Pizza

// Destructuring nested arrays (nested destructuring)
const nestedArr = [2, 4, [5, 6]];
const [i, , [j, k]] = nestedArr;
console.log(i, j, k); // → 2 5 6

// Default values for variables to avoid undefined
// Use this technique when you don't know the length of the array that will be returned
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // → 8 9 1
*/

/*
//Destructuring Objects
"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (fromStarter, fromMain) {
    return [this.starterMenu[fromStarter], this.mainMenu[fromMain]];
  },
  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order Received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered in ${address} at ${time}`
    );
  },
};

// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
// → Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Using different variable names than properties name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// → Classico Italiano {thu: {…}, fri: {…}, sat: {…}} (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']

// Default values + different variable names
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// → (0) [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// { a, b } = obj; cannot write it this way as when we start anything with {, js is expecting a code block.
// Solution to overcome this is to wrap everything inside ()
({ a, b } = obj);
console.log(a, b); // → 23 7

// Nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c); // → 11 23

// Check orderDelivery method
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
}); // → Order Received! Garlic Bread and Risotto will be delivered in Via del Sole, 21 at 22:30
*/

/*
// Spread Operator
"use strict";

// Spread Operator is used to expand an array into all its elements

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};

const arr = [7, 8, 9];

// Old way of adding new values to the start of an array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // → (5) [1, 2, 7, 8, 9]

// Adding new values to an array using spread operator
const newArr = [1, 2, ...arr];
console.log(newArr); // → (5) [1, 2, 7, 8, 9]

// Log individual values of an array
console.log(...newArr); // → 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu); // → (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// Spread Operator takes all the elements from an array and does not create a new variables.
// We can only use it in a place where we would write values separated by commas

// Array shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

// Join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//  Spread operator works on all Iterables
  //  Example: Arrays, Strings, Set, Maps
  //  Objects are not Iterables 
   console.log(..."string"); // → s t r i n g
   console.log([..."string"]); // → ['s', 't', 'r', 'i', 'n', 'g']
   
   const ingredients = ["mushrooms", "asparagus", "cheese"];
   restaurant.orderPasta(...ingredients);
   // → Here is your delicious pasta with mushrooms, asparagus, cheese
   
   // Since 2018 the spread operator also works on objects even though they are not iterables
   const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
   console.log(newRestaurant);
   // → {foundedIn: 1998, name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}
   
   // Object shallow copy
   const restaurantCopy = {...restaurant};   
*/

/*
// Rest Pattern
"use strict";

// Rest Patterns looks exactly like Spread Operator but does the opposite
// It collects multiple elements and converts them into an array
// It is called rest as it collects rest of the elements and club it together

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPizza: function(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

// REST, because on LEFT side of =
// Destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // → 1 2 (3) [3, 4, 5]

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // → Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // → {thu: {…}, fri: {…}}

// Functions
const add = function (...numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  console.log(sum);
};

add(2, 6); // → 8
add(5, 3, 7, 1); // → 16
add(1, 2, 5, 3, 2, 3, 4); // → 20

const x = [23, 5, 7];
add(...x); // → 35

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// → mushrooms
// → (3) ['onion', 'olives', 'spinach']

restaurant.orderPizza("mushrooms");
// → mushrooms
// → (0) []
*/

/*
// Short Circuting
"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

// Use ANY data type, return ANY data type, short-circuiting
// Short circuiting OR operator means that if the first value is
// a truthy value it will immediately return the first value 
console.log(3 || "Jonas"); // → 3
console.log("" || "Jonas"); // → Jonas
console.log(true || 0); // → true
console.log(undefined || null); // → null

console.log(undefined || 0 || "" || "Hello" || 23 || null); // → Hello

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // → 22

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // → 22

// Short circuiting AND operator means that if the first value is a falsy value
// it will immediately return the first value without checking the other values 
console.log(0 && "Jonas"); // → 0
console.log(7 && "Jonas"); // → "Jonas"
console.log("Hello" && 23 && null && "Jonas"); // → null

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach"); // → mushrooms (1) ['spinach']
}

// The if statement before gave same result as this line
restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach"); // → mushrooms (1) ['spinach']
*/

/*
// The Nullish Coalescing
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

restaurant.numGuests = 0;

const guest = restaurant.numGuests || 10;
console.log(guest);

// Nullish : null or undefined( NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
// logical assignment operator

"use strict";

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazaa",
  owner: "Giovanni Rossi",
};

// Using Logical OR operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Using Logical OR assignment operator (||=)
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log(rest1); // → {name: 'Capri', numGuests: 20}
console.log(rest2); // → {name: 'La Piazaa', owner: 'Giovanni Rossi', numGuests: 10}

const rest3 = {
  name: "Loopeze",
  numGuests: 0,
};

// Using Nullish assignment operator (null or undefined)
rest3.numGuests ??= 10;
console.log(rest3); // → {name: 'Loopeze', numGuests: 0}

// Assigning a value to a variable if it is currently truthy
// Using Logical AND operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// Using Logical AND assignment operator (&&=)
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
console.log(rest1.owner); // → undefined
console.log(rest2.owner); // → <ANONYMOUS>
*/

/*
// Looping Arrays
"use strict";

const menu = ["Pizza", "Pasta", "Risotto"];

for (const item of menu) console.log(item);
// → Pizza
    //  Pasta
    //  Risotto 

     for (const item of menu.entries()) console.log(item);
      // → (2) [0, 'Pizza']
          // (2) [1, 'Pasta']
          // (2) [2, 'Risotto'] 
     
     console.log(menu.entries()); // → Array Iterator
*/

/*
// Enhanced Object Literals
"use strict";

// Computing property names
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
*/

/*
// Optional Chaining
"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of weekDays) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Jonas", email: "hello@jonas" }];

// Solution 1
console.log(users[0]?.name ?? "User array empty");

// Solution 2
if(users.length > 0) console.log(users[0].name);
else console.log('Users array empty');
*/

/*
// Looping Objects
"use strict";

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Property KEYS - Object.keys(object)
const properties = Object.keys(openingHours);
console.log(properties); // → (3)[("thu", "fri", "sat")];

console.log(`We are open on ${properties.length} days`);
// → We are open on 3 days

for (const day of Object.keys(openingHours)) {
  console.log(day);
}
// → thu
    //  fri
    //  sat 

// Property VALUES - Object.values(object)
const values = Object.values(openingHours);
console.log(values); // → (3) [{…}, {…}, {…}]

// Property KEYS and VALUES - Object.entries(object)
const entries = Object.entries(openingHours);
console.log(entries); // → (3) [Array(2), Array(2), Array(2)]

for (const [day, {open, close}] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
// → On thu we open at 12 and close at 22
    //  On fri we open at 11 and close at 23
    //  On sat we open at 0 and close at 24 
*/

/*
"use strict";

// Set is a collection of unique values
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);
console.log(ordersSet);
// → Set(3) {size: 3, Pasta, Pizza, Risotto}
console.log(new Set("Jonas"));
// → Set(5) {size: 5, J, o, n, a, s}

// 1. Get the size of the set
console.log(ordersSet.size); // → 3

// 2. Check if an element is in the set
console.log(ordersSet.has("Pizza")); // → true
console.log(ordersSet.has("Bread")); // → false

// 3. Add new element to a set
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
// Check if the Garlic bread is add only once
console.log(ordersSet);
// → Set(4) {size: 4, Pasta, Pizza, Risotto, Garlic Bread}

// 4. Delete an element from the set
ordersSet.delete("Risotto");
// Check if the Risotto is deleted
console.log(ordersSet);
// → Set(3) {size: 3, Pasta, Pizza, Garlic Bread}

// NOTE: Retrieve data from set - Sets do not have indexes

// 5. Delete all the elements of the set
ordersSet.clear();

// Loop over sets
for (const order of ordersSet) console.log(order);
// → Pasta
    //  Pizza
    //  Garlic Bread 

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);
// → Set(3) {size: 3, Waiter, Chef, Manager}

// Conversion from set to array - use destructuring
console.log([...staffUnique]); // → (3) ['Waiter', 'Chef', 'Manager']
console.log("Unique positions are", staffUnique.size); // → Unique positions are 3
console.log(new Set("jonassschmedtmann").size); // → 11
*/

/*
"use strict";

// Map is a data structure that we use to map values to keys, the keys can be of any type

// 1. Create a map
const rest = new Map();
console.log(rest); // → Map(0) {size: 0}

// 2. Add elements to map using set method
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("closed", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
console.log(rest); // → Map(8) {size: 8, name => Classico Italiano, 1 => Firenze, Italy, ...}

// 3. Get the element from the map
console.log(rest.get("name")); // → Classico Italiano
console.log(rest.get(true)); // → We are open :D
console.log(rest.get(1)); // → Firenze, Italy

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // → We are closed :(

// 4. Check if a met contains a certain key
console.log(rest.has("categories")); // true

// 5. Delete a key from the map
rest.delete(2);
console.log(rest); // → Map(7) {size: 7, name => Classico Italiano, 1 => Firenze, Italy, ...}

// 6. Check the size of the map
console.log(rest.size); // → 7

// 7. Delete all element in the map
rest.clear();

// Use arrays and objects as map
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest); // → Map(1) {size: 1, (2) [1, 2] => Test}
console.log(rest.get([1, 2])); // → undefined
console.log(rest.get(arr)); // → Test

// Second way of populating maps
const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again!"],
]);
console.log(question); // → Map(7) {size: 7, question => What is th…language?, 1 => C, ...}

for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
// → Answer 1: C
    //  Answer 2: Java
    //  Answer 3: JavaScript 

     const answer = Number(prompt("Your answer"));
     console.log(answer);
     console.log(question.get(question.get("correct") === answer));
     
     // Convert map to array
     console.log(...question); // → (7) [Array(2), Array(2), Array(2), ...]
     console.log([...question.keys()]); // → (7) ['question', 1, 2, 3, 'correct', true, false]
     console.log([...question.values()]); // → (7) ['What is th…language?', 'C', 'Java', ...]
*/

/*
// String
"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]); // → A
console.log("B737"[0]); // → B
console.log(plane.length); // → 4
console.log("B737".length); // → 4

// Get the position in which a letter is inside a string
console.log(airline.indexOf("r")); // → 6
console.log(airline.lastIndexOf("r")); // → 10
console.log(airline.lastIndexOf("Portugal")); // → 8

console.log(airline.slice(4)); // → Air Portugal
console.log(airline.slice(4, 7)); // → Air

console.log(airline.slice(0, airline.indexOf(" "))); // → TAP
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // → PORTUGAL

console.log(airline.slice(-2)); // → al
console.log(airline.slice(1, -1)); // → AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat");
  } else {
    console.log("You got lucky");
  }
};

checkMiddleSeat("11B"); // → You got the middle seat
checkMiddleSeat("23C"); // → You got lucky
checkMiddleSeat("3E"); // → You got the middle seat

// Wherever we call a method to a string javascript behind
// the scenes convert this string to an object and when the
// operation is over javascript convert back the string object to a primitive 
console.log(new String("jonas"));
console.log(typeof new String("jonas")); //object
console.log(typeof new String("jonas").slice(1)); //string


const airline = "TAP Air Portugal";
console.log(airline.toLowerCase()); // → tap air portugal
console.log(airline.toUpperCase()); // → TAP AIR PORTUGAL

// Fix capitalization in name
const passenger = "jOnAS";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect); // → Jonas

// Check email
const email = "hello@jonas.io";
const loginEmail = " Hello@Jonas.IO \n";
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email); // → true

// Replacing
const priceGB = "288,98£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS); // → 288.98$

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replaceAll("door", "gate"));
// → All passengers come to boarding gate 23. Boarding gate 23!

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320")); // → true
console.log(plane.startsWith("Air")); // → true

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
} // → Part of the NEW Airbus family

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board!");
  } else {
    console.log("Welcome abroad!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket knife");
// → You are NOT allowed on board!
checkBaggage("Socks and camera");
// → Welcome abroad!
checkBaggage("Got some snacks and a gun for protection");
// → You are NOT allowed on board!


"use strict";

console.log("a+very+nice+string".split("+"));
// → (4) ['a', 'very', 'nice', 'string']

// Split and Join
const [firstName, lastName] = "Pavel Georgiev".split(" ");
const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName); // → Mr. Pavel GEORGIEV

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }

  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis"); // → Jessica Ann Smith Davis
capitalizeName("pavel georgiev"); // → Pavel Georgiev

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(25, "+")); // → +++++++++++Go to gate 23!
console.log(message.padEnd(25, "+")); // → Go to gate 23!+++++++++++

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(32415216)); // → ****5216
console.log(maskCreditCard("62416278")); // → ****6278

// Repeat
const message2 = "foo ";
console.log(message2.repeat(5)); // → foo foo foo foo foo

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5); // → There are 5 planes in line 🛩🛩🛩🛩🛩
planesInLine(3); // → There are 3 planes in line 🛩🛩🛩
planesInLine(12); // → There are 12 planes in line 🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩🛩
*/
