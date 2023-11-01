/* Coding Challenge #4
Julia and Kate are still studying dogs, and this time they are studying if dogs are
eating too much or too little.
Eating too much means the dog's current food portion is larger than the
recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10%
above and 10% below the recommended portion (see hint).

Your tasks:
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
the recommended food portion and add it to the object as a new property. Do
not create a new array, simply loop over the array. Formula:
recommendedFood = weight ** 0.75 * 28. (The result is in grams of
food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
the owners array, and so this one is a bit tricky (on purpose)
3. Create an array containing all owners of dogs who eat too much
('ownersEatTooMuch') and an array with all owners of dogs who eat too little
('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!"
5. Log to the console whether there is any dog eating exactly the amount of food
that is recommended (just true or false)
6. Log to the console whether there is any dog eating an okay amount of food
(just true or false)
7. Create an array containing the dogs that are eating an okay amount of food (try
to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food
portion in an ascending order (keep in mind that the portions are inside the
array's objects)
The Complete JavaScript Course 26

Test data:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
]; */

// add recommended portion property for every dog
dogs.forEach(function (dog) {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
  console.log(dog);
});

// Find Sarah's dog and log to the console whether it's eating too much or too little

const sarahDog = dogs.find(function (dog) {
  return dog.owners.includes("Sarah");
});

if (sarahDog.curFood > sarahDog.recommendedFood) console.log("eating too much");
else console.log("eating too little");

// Create an array containing all owners of dogs who eat too much
const ownersEatTooMuch = dogs
  .filter(function (dog) {
    return dog.curFood > dog.recommendedFood;
  })
  .flatMap(function (dog) {
    return dog.owners;
  });
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much`);

const ownersEatTooLittle = dogs
  .filter(function (dog) {
    return dog.curFood < dog.recommendedFood;
  })
  .flatMap(function (dog) {
    return dog.owners;
  });
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);

// Log to the console whether there is any dog eating exactly the amount of food that is recommended (just true or false
console.log(
  dogs.some(function (dog) {
    return dog.curFood === dog.recommendedFood;
  })
);

// Log to the console whether there is any dog eating an okay amount of food (just true or false)
const checkOkay = function (dog) {
  return (
    dog.curFood < dog.recommendedFood + dog.recommendedFood * 0.1 &&
    dog.curFood > dog.recommendedFood - dog.recommendedFood * 0.1
  );
};
console.log(dogs.some(checkOkay));

//Create an array containing the dogs that are eating an okay amount of food
console.log(dogs.filter(checkOkay));

//reate a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order
const dogsCopySorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopySorted);
