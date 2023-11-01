/*
// Constructor Function
'use strict';

// The only difference between a regular function and a
// constructor function is that we call the new operator. 

// An Arrow function can never be used as a constructor, since it doesn't have its own this keyword and we need that.
// There is a convention that constructor functions should start with a capital letter.
const Person = function (firstName, birthYear) {
    // Instance properties      
    this.firstName = firstName;
    this.birthYear = birthYear;
  
    // Never create a method inside a constructor function, because a 
    // new copy of the method is created on each new instance. 
    this.calcAge = function () {
      return 2037 - this.birthYear;
    }
  }
  
  const jonas = new Person("Jonas", 1991);
  console.log(jonas); // → Person {firstName: 'Jonas', birthYear: 1991}
  
//    What happens when we call a function with the new operator.
//   1. A new empty object is created
//   2. The function is called and the this keyword is set to the newly created object
//   3. The new object is linked (__proto__ property) to the constructor function's prototype property
//   4. The function implicitly returns the object that we created 
  
// The instanceof operator allows us to check whether
// an object belongs to a certain constructor function. 
// They are not actually called instances, since we don't have classes in JS.
  console.log(jonas instanceof Person); // → true
  
//    Function constructors are not really a feature of the JS language, they
//   are simply a pattern that was created by other developers.
*/

/*
// Prototype
'use strict';

// Each and every function in JS automatically has a property called prototype.
// Every object that is created by a certain constructor function will get access to
// all the methods and properties that we define on the constructor prototype property.
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// With prototype only one instance of calcAge is created and shared between all instances.
Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};
// .prototype is an object property

const jonas = new Person('Jonas', 1991);
console.log(jonas.calcAge()); // → 46
// if a property or a method can't be found in a certain object, JS will look into its prototype (jonas.__proto__).

console.log(jonas); // → Person {firstName: 'Jonas', birthYear: 1991}
console.log(jonas.__proto__); // → {calcAge: ƒ, constructor: ƒ} it is the same as prototype property of the constructor function
console.log(jonas.__proto__.constructor); // points to the constructor function

// Person.prototype is not the prototype of Person, it is what is going to be used as the
//   prototype of all the objects that are created with the Person constructor function.
console.log(jonas.__proto__ === Person.prototype); // → true
console.log(Person.prototype.isPrototypeOf(jonas)); // → true
console.log(Person.prototype.isPrototypeOf(Person)); // → false

// .prototype should've been named .prototypeOfLinkedObjects to be more clear.

// We can also set properties to the prototype
Person.prototype.species = 'Homo Sapiens';
// species property is not directly in the object, so it's not it's own property
console.log(jonas.species); // → Homo Sapiens
console.log(jonas.__proto__); // → {calcAge: ƒ, species: 'Homo Sapiens', constructor: ƒ}

console.log(jonas.hasOwnProperty('firstName')); // → true
console.log(jonas.hasOwnProperty('species')); // → false
// because species is not actually a property of the jonas object, it simply has access to it through its prototype
*/

/*
// Prototypal Inheritance and The Prototype Chain

// Everything starts with our constructor function (Person)
// the constructor function has a property called prototype wich is an Object (person.prototype wich is not the prototype of Person but contains objects created by Person)
// Now we can define methods inside that object (calcAge)
// One of the properties of that object is called constructor wich points to our constructor (Person.prototype.constructor points back to Person)

// Prototype chain
// As we know, if a property or a method can't be found in a certain object, JS will look into its prototype.
// to look for jonas.hasOwnProperty: look for it in 1)jonas object 2)  jonas.__proto__ = Person.prototype 3) jonas.__proto__.__proto__ = object.prototype
// the above behavior is called prototype chain. series of links between objects, linked through prototypes.

// Examples
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);

console.log(jonas.__proto__); // → Person.prototype
console.log(jonas.__proto__.__proto__); // → Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // → null

const arr = [7, 5, 1, 5, 7, 5]; // new Array === []
console.log(arr.__proto__); // → Array.prototype
console.log(arr.__proto__ === Array.prototype); // → true

// All prototypes are objects that's why the array
//   prototype has an object prototype linked to it 
console.log(arr.__proto__.__proto__); // → Object.prototype

//  In JavaScript, arrays are objects, where the position of a value
//   in the array (its numerical index) is its key. They also have their
//   own array prototype, which has various methods and properties that
//   normal objects don't have, such as push and pop, length, indexOf, etc. 
console.log(arr instanceof Object); // → true

// It's not a good idea to extend the prototype of a build in object
Array.prototype.unique = function () {
  // The this keyword will point to the array that the method has been called on
  return [...new Set(this)];
};

console.log(arr.unique()); // → [5, 1, 7]
*/

/*
// Class expression
const PersonE = class {};

// Class declaration
class PersonD {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonD("Jessica", 1996);
jessica.calcAge(); // → 41

console.log(jessica.__proto__ == PersonD.prototype); // → true

// What happens behind the scenes when you add a method inside the class
PersonD.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
}

jessica.greet(); // → Hey Jessica

// Things to know about classes
// 1. Classes are NOT hoisted even if they are class declarations
// 2. Classes are first-class citizens (they are treated as variables)
// 3. Classes are always executed in strict mode 
*/

/*
// Accessor properties (Getters and Setters)
// In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords: get, set


// Every object in JS can have getter and setter properties (assesors properties)
// get - to define a getter method to get the property value
// set - to define a setter method to set the property value

const account = {
  owner: 'Jonas',
  movemennts: [200, 530, 120, 300],

  //  to write a getter we write a normal function but prepend it with get
  get latest() {
    return this.movemennts[this.movemennts.length - 1];
  },

  //  to write a setter we write a normal function but prepend it with set
  set latest(mov) {
    this.movemennts.push(mov);
  },
};

// we use getters like properties, WE DON'T CALL THEM (the difference if we didn't use get keyword)
console.log(account.latest);
// we use setters like properties, WE DON'T CALL THEM
account.latest = 50;
console.log(account.movemennts);

// Getters and Setters in classes
class PersonD {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // getters and setters are great for data validation
  // Here we are creating a setter with a property name that already exist
  // Now every time we try to set a fullName the setter will be executed
  set fullName(name) {
    // inside the setter we use an underscore before the peoperty name to avoid going through a infinite loop.
    if (name.includes(' ')) this._fullName = name;
    // But now we created a new variable _fullName and we can't access jessica.fullName
    // To solve this, we create a getter
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
    // now jessica.fullName will give us Jessica Davies
  }
}

const jessica = new PersonD('Jessica Davies', 1996);
console.log(jessica.age);
*/

/*
// Static methods
// methods that only the constructor can call
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.hey = function () {
  console.log(`hey there 👋`);
};
Person.hey();

// doesn't work
// jonas.hey()

class PersonD {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property (instance methods)
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  static hey() {
    console.log(`hey there 👋`);
    // this will point to the class
    console.log(this);
  }
}
PersonD.hey();
*/

/*
// Object.create
// manually set the prototype of an object to any other function that we want.
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();
console.log(steven.__proto__); // PersonProto

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

/*
// Inheritance Between Classes; Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  return 2037 - this.birthYear;
};

const Student = function (firstName, birthYear, course) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  // instead of the above duplicate code:
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking child class to parent class
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();
*/

/*
// Inheritance Between Classes; ES6 Classes
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // super is basically the constructor function of the parent class
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I fell more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
*/

/*
// Inheritance Between Classes; Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'CS');
jay.introduce();
jay.calcAge();
*/

/*
// data encapsulation: Keeping some properties and methods inside the class, so they are not accessible from outside
// The rest of the methods are exposed as a public interface (API)
// Two reason we need data encapsulation:
// 1. To prevent code from outside of the class to manipulate data inside the class
// 2. When we expose only a small interface (few public methods), then we can ghange all the internal methods with more confidence (changes from outside won't mess up our code)
// to make the property private, it is convention to prepend an uderscore to the name so everyone know it's protected
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this._movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log();
      ('Loan Approved!');
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// Bad idea
// acc1.movements.push(250);
// acc1.movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// this should not be accessed (only requestLoan should be able to use it)
// acc1.approveLoan(1000);

console.log(acc1.getMovements());

console.log(acc1);

// Watch the ES6 summary
*/
