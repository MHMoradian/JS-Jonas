/* Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from
before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
} */

"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
for (let [index, scorer] of Object.entries(game.scored)) {
  // console.log(typeof index); // index is String
  console.log(`Goal ${Number(index) + 1}: ${scorer}`);
}
console.log(game.scored);

//2
let sum = 0;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}
const average = sum / Object.values(game.odds).length;
console.log(average);

//3
for (const [outcome, odd] of Object.entries(game.odds)) {
  let str = `Odd of ${
    outcome === "x"
      ? "draw"
      : `victory ${
          outcome === "team1" ? "Bayern Munich" : "Borrussia Dortmund"
        }`
  }: ${odd}`;
  console.log(str);
}

// Another Approach
for (const [outcome, odd] of Object.entries(game.odds)) {
  let temName = game?.[outcome];

  if (temName) {
    console.log(`Odd of victory ${temName}: ${odd}`);
  } else {
    console.log(`Odd of draw: ${odd}`);
  }
}

//4
const scorers = {};
for (let scorer of game.scored) {
  // if (scorers.hasOwnProperty(scorer)) {
  //   scorers[scorer] += 1;
  // } else {
  //   scorers[scorer] = 1;
  // }

  //Another Approach
  scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);

  //Another Approach
  // scorers[scorer]++ || (scorers[scorer] = 1);
}
console.log(scorers);
if (scorers["Lewandowski"]) console.log("YUP!");
