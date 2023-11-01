// 'use strict';

// // selecting elements
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const diceEl = document.querySelector('.dice');
// const btnRoll = document.querySelector('.btn--roll');
// const btnNew = document.querySelector('.btn--new');
// const btnHold = document.querySelector('.btn--hold');
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// // Starting variables
// let currentScore, activePlayer, scores, playing;

// // Starting conditions
// function init() {
//   currentScore = 0;
//   activePlayer = 0;
//   scores = [0, 0];
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// }
// init();

// // Get the image soure of the dice
// const diceImage = function (src) {
//   document.querySelector('.dice').src = src;
// };

// const switchPlayer = function () {
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// //Rolling dice functionality
// const rollDice = function () {
//   if (playing) {
//     //1. Generating a random dice roll and find the accurate image
//     const dice = Math.trunc(Math.random() * 6) + 1;
//     diceImage(`dice-${dice}.png`);

//     //2. Display dice image
//     diceEl.classList.remove('hidden');

//     //3. Check for rolled 1: if true swith to next player
//     if (dice !== 1) {
//       //Add dice to current score for active player
//       currentScore += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//     } else {
//       //Previous active player score and current update
//       currentScore = 0;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentScore;
//       //Switch to next player
//       switchPlayer();
//     }
//   }
// };

// btnRoll.addEventListener('click', rollDice);

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     //Update score and set current to 0 for the player that used hold button
//     scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     document.getElementById(`current--${activePlayer}`).textContent = 0;

//     // if score >= 100 the player wins otherwise switch player
//     if (
//       Number(document.getElementById(`score--${activePlayer}`).textContent) <
//       100
//     ) {
//       switchPlayer();
//     } else {
//       // Finish the game
//       playing = false;
//       // Add winning class to the winner and remove active player
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//       // Hide dice image
//       diceEl.classList.add('hidden');
//     }
//   }
// });

// btnNew.addEventListener('click', init);

'use strict';
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let currentScore, activePlayer, scores, playing;
function init() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  activePlayer = 0;
  currentScore = 0;
  playing = true;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}
init();

btnRoll.addEventListener('click', rollDice);

function rollDice() {
  if (playing) {
    let diceNum = Math.trunc(Math.random() * 6 + 1);
    diceImage(diceNum);
    checkDice(diceNum);
  }
}

function diceImage(diceNum) {
  diceEl.src = `dice-${diceNum}.png`;
  diceEl.classList.remove('hidden');
}

function checkDice(diceNum) {
  if (diceNum !== 1) {
    currentScore += diceNum;
    // console.log(currentScore);
    document.querySelector(`#current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
}

function switchPlayer() {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

btnHold.addEventListener('click', hold);

function hold() {
  if (playing) {
    // console.log(currentScore);
    document.querySelector(`#score--${activePlayer}`).textContent =
      Number(document.querySelector(`#score--${activePlayer}`).textContent) +
      currentScore;
    if (
      Number(document.querySelector(`#score--${activePlayer}`).textContent) >=
      100
    )
      endgame();
    else switchPlayer();
  }
}

function endgame() {
  //Finish the game
  playing = false;
  // Add winning class to the winner and remove active player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--winner');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  // Hide dice image
  diceEl.classList.add('hidden');
}

btnNew.addEventListener('click', init);
