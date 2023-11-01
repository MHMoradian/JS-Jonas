/*
// Simple array methods
"use strict";

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

let arr = ["a", "b", "c", "d", "e"];

// SLICE
console.log(arr.slice(2)); // → (3) ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // → (2) ['c', 'd']
console.log(arr.slice(-2)); // → (2) ['d', 'e']
console.log(arr.slice(1, -2)); // → (2)[("b", "c")];
// Shallow copy of an array
console.log(arr.slice()); // → (5) ['a', 'b', 'c', 'd', 'e']

// SPLICE - Mutates the original array
console.log(arr.splice(2)); // → (3) ['c', 'd', 'e']
console.log(arr); // → (2) ['a', 'b']
arr.splice(-1);
console.log(arr); // → (1) ["a"];
// // the second argument in splice method will remove that many elements from the beginning position wich is the first argument.
// console.log(arr.splice(1, 1));

// REVERSE - Mutates the original array
const arr2 = ["j", "i", "h", "g", "f"];
arr2.reverse();
console.log(arr2); // → (5) ['f', 'g', 'h', 'i', 'j']

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // → (6) ['a', 'f', 'g', 'h', 'i', 'j']

// JOIN
console.log(letters.join("-")); // → a-f-g-h-i-j

// AT
const arr = [23, 11, 64];
console.log(`First element at array ${arr} is ${arr[0]}`);
// → First element at array 23,11,64 is 23
console.log(arr.at(0)); // → 23

// Get the last element of the array in case we do not know the length of the array
console.log(arr.slice(-1)[0]); // → 64
console.log(arr.at(-1)); // → 64

console.log("pavelgeorgiev".at(0)); // → p
*/

/*
// forEach Method
// loops over the array and for every element executes the callback function passed to it.
// It can also pass in the current_element,index and the array (in order) to the callback function as argument.
movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  }
});

// Equivelant to
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
  }
}

// forEach with maps and sets
const currencies = new Map([
  ["USD", "United States Dollar"],
  ["EURO", "Euro"],
  ["GBP", "Pound Sterling"],
]);
// loops over the array and for every array inside the initial array executes the callback function passed to it.
// It can also pass in the value, key and the map (in order) to the callback function as argument.
currencies.forEach(function (value, key, map) {
  console.log(key, value);
  console.log(map);
});
//  → USD: United States Dollar
    //  EURO: Euro
    //  GBP: Pound Sterling


// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD']);
// currenciesUnique.forEach(function (value, key, set) {
//   // key and value are the same here. it only exists to remain consistent with other forEach loops.
//   console.log(key, value);
//   console.log(set);
// });
*/

/*
// // DATA TRANSFORMATION
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// MAP
// another method to loop over arrays
// Similar to forEach but with the difference that  map creates a brand new array based on the original array.
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);
// → (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, ...]

// Equivelant to
const movementsUsdfor = [];
for (const mov of movements) {
  movementsUsdfor.push(mov * eurToUsd);
}
console.log(movementsUsdfor);
// → (8) [220.00000000000003, 495.00000000000006, -440.00000000000006, ...]


// FILTER
// filters for elements in the original array wich satisfy a certain condition
// creates a brand new array with the elements of original array that met the condition
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);
// → (5) [200, 450, 3000, 70, 1300]

// Equivelant to
const depositsFor = [];
for (const mov of movements) {
  mov > 0 && depositsFor.push(mov);
}

console.log(depositsFor); // → (5) [200, 450, 3000, 70, 1300]

// REDUCE
// boils down all the elements of the original array to a single value
// the first argument of the reduce method is a callback function and the second argument is the starting position
// First argument of the call back function is accumulater is the return value of the previous calculation
const balance = movements.reduce(function (accumulater, mov, i, arr) {
  return accumulater + mov;
}, 0);
console.log(balance);

// Equivelant to
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2); // → 3840

const maximum = movements.reduce(function (acc, mov) {
  if (mov > acc) return mov;
  else return acc;
}, movements[0]);
console.log(maximum);

// Take all the movement deposists and convert them to USD and add them all up.
// Using chaninig

const totalDepositsUSD = movements
  .filter(function (mov) {
    return mov > 0;
  })
  .map(function (mov) {
    return mov * 1.1;
  })
  .reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

// console.log(totalDepositsUSD);


// FIND
// retrieves one element of an array based on a condition
// it only retrieves the first element that meet the condition
const firstWithdrawal = movements.find(function (mov) {
  return mov < 0;
});
console.log(firstWithdrawal);

const account = accounts.find(function (account) {
  return account.owner === 'Jessica Davies';
});
console.log(account);

// FINDINDEX
// Works like find but returns the index instead of the element

// SOME
// With includes method, we can check if a value is inside the array
// With some method, we can check for a condition instead
console.log(movements.includes(-130));
// Check if there are any deposits in the movements array
const anyDeposits = movements.some(function (mov) {
  return mov > 0;
});
console.log(anyDeposits);

// EVERY
// Works like some with the difference that it only returns true if every element of the array meet the condition
console.log(
  movements.every(function (mov) {
    return mov > 0;
  })
);

// FLAT
// flatens the arrays inside the array
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// goes only one level deep by default
console.log(arrDeep.flat());
// But we can specify the level
console.log(arrDeep.flat(2));

// FLATMAP
// combine the flat and map method in one method
// its the map method but at the end flatens the results

// SORT
// strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// Mutates the original array
console.log(owners);

// // numbers
// //it converts all elements to string and sort based on that
// console.log(movements.sort());
// // We can fix this by passing in a compare callback function into sort method
// // The function first argument is the current element and the second argument is the next element
// // if we return a negative value, then a will be sorted before b
// // and the opposite if we return a positive value
// // Basically if we return positive the elements are switched
// movements.sort(function (a, b) {
//   //ascending order (small to large)
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

// //Improved version
// movements.sort(function (a, b) {
//   // if a > b => a - b is positive
//   // if a < b => a - b is negative
//   return a - b;
// });
// console.log(movements);

// //descending
// movements.sort(function (a, b) {
//   // if a > b => b - a is negative
//   // if a < b => b - a is positive
//   return b - a;
// });
// console.log(movements);
*/

/*
// GENERATING ARRAYS PROGRAMMATICALLY
// so far we created arrays manually
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// PROGRAMMATICALLY
// passing one element to array constructor creates an empty array with that length
const x = new Array(7);
console.log(x);
// calling functions on the empty array do nothing
console.log(x.map(() => 5));

// except we can use FILL method
// fills all 7 elements with 1
x.fill(1);
console.log(x);
// the second parameter of fill function determines the beginning position
// the third parameter of fill function determines the end position

x.fill(1, 3, 5);
console.log(x);
// Also works on non-empty arrays
arr.fill(23, 4, 6);
console.log(arr);

// Array.from()
// first parameter is an object with length property and the second parameter is a callback function (just like the callback function of map method)
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, function (_, i) {
  return i + 1;
});
console.log(z);

// its perfect to convert other iterables to array
// the example is movementsUI
*/

'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// console.log(arr.slice(2));

// console.log(arr.slice(2, 4));

// console.log(arr.slice(-1));

// console.log(arr.slice(-2));

// console.log(arr.slice(1, -2));

// // Shallow copy of an array
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// console.log(arr.splice(2));
// // works like slice but the spliced part will be removed from the original array
// console.log(arr);
// // the second argument in splice method will remove that many elements from the beginning position wich is the first argument.
// console.log(arr.splice(1, 1));

// // REVERSE
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// // reverse method actually mutates the original array
// console.log(arr2);

// // CONCAT
// arr = ['a', 'b', 'c', 'd', 'e'];
// const letters = arr.concat(arr2);
// console.log(letters);
// // Equivelant to
// const letters2 = [...arr, ...arr2];
// console.log(letters2);

// // JOIN
// console.log(letters.join(' - '));

// // AT
// const arr3 = [23, 11, 64];
// console.log(arr3.at(0));
// // Equivelant to
// console.log(arr3[0]);

// console.log(arr3.at(-1));
// // Equivelant to
// console.log(arr3[arr3.length - 1]);
// // or
// console.log(arr3.slice(-1)[0]);

// // Also works on strings
// console.log('Jonas'.at(0));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // forEach
// // loops over the array and for every element executes the callback function passed to it.
// // It can also pass in the current_element,index and the array (in order) to the callback function as argument.
// movements.forEach(function (movement, i) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
//   }
// });

// // Equivelant to
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: you deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: you withdrew ${Math.abs(movement)}`);
//   }
// }

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // forEach with maps and sets
// // loops over the array and for every array inside the initial array executes the callback function passed to it.
// // It can also pass in the value, key and the map (in order) to the callback function as argument.
// currencies.forEach(function (value, key, map) {
//   console.log(key, value);
//   console.log(map);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'USD']);
// currenciesUnique.forEach(function (value, key, set) {
//   // key and value are the same here. it only exists to remain consistent with other forEach loops.
//   console.log(key, value);
//   console.log(set);
// });

// // DATA TRANSFORMATION
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// // MAP
// // another method to loop over arrays
// // Similar to forEach but with the difference that  map creates a brand new array based on the original array.
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movements);
// console.log(movementsUSD);

// // FILTER
// // filters for elements in the original array wich satisfy a certain condition
// // creates a brand new array with the elements of original array that met the condition
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// // REDUCE
// // boils down all the elements of the original array to a single value
// // the first argument of the reduce method is a callback function and the second argument is the starting position
// // First argument of the call back function is accumulater is the return value of the previous calculation
// const balance = movements.reduce(function (accumulater, mov, i, arr) {
//   return accumulater + mov;
// }, 0);
// console.log(balance);

// const maximum = movements.reduce(function (acc, mov) {
//   if (mov > acc) return mov;
//   else return acc;
// }, movements[0]);
// console.log(maximum);

// // Take all the movement deposists and convert them to USD and add them all up.
// // Using chaninig

// const totalDepositsUSD = movements
//   .filter(function (mov) {
//     return mov > 0;
//   })
//   .map(function (mov) {
//     return mov * 1.1;
//   })
//   .reduce(function (acc, mov) {
//     return acc + mov;
//   }, 0);

// console.log(totalDepositsUSD);

// // FIND
// // retrieves one element of an array based on a condition
// // it only retrieves the first element that meet the condition
// const firstWithdrawal = movements.find(function (mov) {
//   return mov < 0;
// });
// console.log(firstWithdrawal);

// const account = accounts.find(function (account) {
//   return account.owner === 'Jessica Davies';
// });
// console.log(account);

// // FINDINDEX
// // Works like find but returns the index instead of the element

// // SOME
// // With includes method, we can check if a value is inside the array
// // With some method, we can check for a condition instead
// console.log(movements.includes(-130));
// // Check if there are any deposits in the movements array
// const anyDeposits = movements.some(function (mov) {
//   return mov > 0;
// });
// console.log(anyDeposits);

// // EVERY
// // Works like some with the difference that it only returns true if every element of the array meet the condition
// console.log(
//   movements.every(function (mov) {
//     return mov > 0;
//   })
// );

// // FLAT
// // flatens the arrays inside the array
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// // goes only one level deep by default
// console.log(arrDeep.flat());
// // But we can specify the level
// console.log(arrDeep.flat(2));

// // FLATMAP
// // combine the flat and map method in one method
// // its the map method but at the end flatens the results

// // SORT
// // strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// // Mutates the original array
// console.log(owners);

// // numbers
// //it converts all elements to string and sort based on that
// console.log(movements.sort());
// // We can fix this by passing in a compare callback function into sort method
// // The function first argument is the current element and the second argument is the next element
// // if we return a negative value, then a will be sorted before b
// // and the opposite if we return a positive value
// // Basically if we return positive the elements are switched
// movements.sort(function (a, b) {
//   //ascending order (small to large)
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);

// //Improved version
// movements.sort(function (a, b) {
//   // if a > b => a - b is positive
//   // if a < b => a - b is negative
//   return a - b;
// });
// console.log(movements);

// //descending
// movements.sort(function (a, b) {
//   // if a > b => b - a is negative
//   // if a < b => b - a is positive
//   return b - a;
// });
// console.log(movements);

// GENERATING ARRAYS PROGRAMMATICALLY
// so far we created arrays manually
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// PROGRAMMATICALLY
// passing one element to array constructor creates an empty array with that length
const x = new Array(7);
console.log(x);
// calling functions on the empty array do nothing
console.log(x.map(() => 5));

// except we can use FILL method
// fills all 7 elements with 1
x.fill(1);
console.log(x);
// the second parameter of fill function determines the beginning position
// the third parameter of fill function determines the end position

x.fill(1, 3, 5);
console.log(x);
// Also works on non-empty arrays
arr.fill(23, 4, 6);
console.log(arr);

// Array.from()
// first parameter is an object with length property and the second parameter is a callback function (just like the callback function of map method)
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, function (_, i) {
  return i + 1;
});
console.log(z);

// its perfect to convert other iterables to array
// the example is movementsUI

// APP
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Creating DOM element
const displayMovements = function (movements, sort = false) {
  // Empty whatever is inside containerMovements
  containerMovements.innerHTML = '';

  // since the sort method mutates the array and we don't want that, we create a copy with slice method first
  const movs = sort
    ? movements.slice().sort(function (a, b) {
        return a - b;
      })
    : movements;

  movs.forEach(function (mov, i) {
    // determining the type of movement
    const type = mov < 0 ? 'withdrawal' : 'deposit';

    // the html we want to create
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    // first argument is the position where we want to create, second argument is what we want to create.
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

// Creating username
// Steve Thomas Williams => stw

// // a simple version
// const createUsernames = function (user) {
//   const username = user
//     .toLocaleLowerCase()
//     .split(' ')
//     .map(function (word) {
//       return word[0];
//     })
//     .join('');

//   return username;
// };
// console.log(createUsernames('Steve Thomas Williams'));

// final version
const createUsernames = function (accounts) {
  const usernames = [];
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(function (word) {
        return word[0];
      })
      .join('');

    usernames.push(account.username);
  });
};
createUsernames(accounts);
console.log(accounts);

// // if we wanted to add balance property for each account
// const calcDisplayBalance = accounts.forEach(function (account) {
//   account.balance = account.movements.reduce(function (acc, mov) {
//     return acc + mov;
//   });
// });
// console.log(accounts);

// Calculate the balance of movements for the logged in account and display it
const calcDisplayBalance = function (account) {
  account.balance = account.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${account.balance}€`;
};
// calcDisplayBalance(account1.movements);

// calculate all the incomes(total of deposits), outcomes(total of withdrawals) and the interest(1.2 percent on each deposit and only pais the interest if the interest is atleast one euro)
// For the user logged in
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = account.movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    });
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = account.movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (deposit) {
      return (deposit * account.interestRate) / 100;
    })
    .filter(function (interest) {
      return interest >= 1;
    })
    .reduce(function (acc, interest) {
      return acc + interest;
    });
  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);

// LOGIN
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Since btnLogin belongs to a form element the default behavior when clicked is to reload the page.
  // TO prevent that (prevent form from submitting)
  // In forms hitting 'enter' also triggers the submit button
  e.preventDefault();

  // Find the account that user is trying to access
  currentAccount = accounts.find(function (account) {
    return account.username === inputLoginUsername.value;
  });
  console.log(currentAccount);

  // if the account exists and the pin matches
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input feilds
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    //Display movements
    //Display balance
    //Display summary
    updateUI(currentAccount);
  }
});

function updateUI(account) {
  //Display movements
  displayMovements(account.movements);
  //Display balance
  calcDisplayBalance(account);
  //Display summary
  calcDisplaySummary(account);
}

// TRANSFER
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recipient = accounts.find(function (account) {
    return account.username === inputTransferTo.value;
  });
  // the amount must be positive
  //check if user has enough money to make the transaction
  // A user can't transfer money to its own account
  if (
    amount > 0 &&
    recipient &&
    currentAccount.balance >= amount &&
    recipient?.username !== currentAccount.username
  ) {
    //Add negative movement to current user movements
    currentAccount.movements.push(-1 * amount);
    // add poisitive movement to recipient movements
    recipient.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }

  // clear inputs
  inputTransferAmount.value = '';
  inputTransferTo.value = '';
});

// Close account
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  // check if credentials are correct
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const accountIndex = accounts.findIndex(function (account) {
      return account.username === currentAccount.username;
    });
    // Delete user
    accounts.splice(accountIndex, 1);

    // Log user out
    containerApp.style.opacity = 0;
  }
});

// Request loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  // amount requested must be positive
  // the loan will be granted if there is atleast one deposit worth ten percent of the amount requested
  if (
    amount > 0 &&
    currentAccount.movements.some(function (mov) {
      return mov >= amount * 0.1;
    })
  ) {
    // Add a positive movement to the current account
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);

    // Clear input feild
    inputLoanAmount.value = '';
  }
});

// The bank wants to calculate the balance of all the movements by every account
const allAccountsMovements = accounts.map(function (account) {
  return account.movements;
});
console.log(allAccountsMovements);

const balanceAllMovements = allAccountsMovements
  .flat()
  .reduce(function (acc, mov) {
    return acc + mov;
  });
console.log(balanceAllMovements);

// WITH FLATMAP
const balanceAllMovements2 = accounts
  .flatMap(function (account) {
    return account.movements;
  })
  .reduce(function (acc, mov) {
    return acc + mov;
  });
console.log(balanceAllMovements2);

// Sort the movements
// we add a second parameter to the displayMovements function called sort
// it is set to flase by default and only will be true when we click the sort button
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  // so we can sort and unsort
  sorted = !sorted;
});

// example for Array.form
// We want to get all movements from UI
// removing the euro sign
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  );
  console.log(movementsUI);

  // old way
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  console.log(movementsUI2.map(el => el.textContent.replace('€', '')));
});

/////////////////////////////////////
// Array methods practice

// 1. calculate all sum of all deposits to bank
const bankDepositSum = accounts
  .flatMap(function (account) {
    return account.movements;
  })
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov);
console.log(bankDepositSum);

// 2. count the number of deposits to the bank worth atleast 1000$
const numDeposits1000 = accounts
  .flatMap(function (account) {
    return account.movements;
  })
  .filter(mov => mov >= 1000).length;
console.log(numDeposits1000);

const numDeposits1000_2 = accounts
  .flatMap(function (account) {
    return account.movements;
  })
  .filter(mov => mov >= 1000)
  .reduce((acc, mov, i) => i + 1, 0);
console.log(numDeposits1000_2);

const numDeposits1000_3 = accounts
  .flatMap(function (account) {
    return account.movements;
  })
  .reduce((acc, mov, i) => (mov >= 1000 ? ++acc : acc), 0);
console.log(numDeposits1000_3);

// we don't use ++ in reduce method because
let a = 10;
console.log(a++); // does its job but returns the original a
console.log(a); // now a is 11
console.log(++a); //solution

// 3. create an object that contains the sum of all the deposits and the sum of all the withdrawals
const sums = accounts
  .flatMap(account => account.movements)
  .reduce(
    (acc, mov, i) => {
      mov > 0 ? (acc.deposits += mov) : (acc.withdrawals += mov);
      // In reduce method callback function we always have to return accumalator
      // Here since it isn't returned implicitly we do it explicitly
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(sums);

// 4. create title case for each string
// this is a title => This Is a Title
const covertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];
  // convert to lower case
  // split each word
  const words = title.toLowerCase().split(' ');
  // capitalize first letter of each word except for the exceptions
  const capitalized = words.map(function (word) {
    if (exceptions.includes(word)) {
      return word;
    } else {
      return word.replace(word[0], word[0].toUpperCase());
    }
  });

  // join them back together
  return capitalized.join(' ');
};
console.log(covertTitleCase('this is a title'));
console.log(covertTitleCase('this is a LONG title but not too long'));
console.log(covertTitleCase('and here is another title with an EXAMPLE'));

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
