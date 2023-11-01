'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Get the image soure of the dice
const diceImage = function (src) {
  document.querySelector('.dice').src = src;
};

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling dice functionality
const rollDice = function () {
  //1. Generating a random dice roll and find the accurate image
  const dice = Math.trunc(Math.random() * 6) + 1;

  //   switch (dice) {
  //     case 1:
  //       diceImage('dice-1.png');
  //       break;
  //     case 2:
  //       diceImage('dice-2.png');
  //       break;
  //     case 3:
  //       diceImage('dice-3.png');
  //       break;
  //     case 4:
  //       diceImage('dice-4.png');
  //       break;
  //     case 5:
  //       diceImage('dice-5.png');
  //       break;
  //     case 6:
  //       diceImage('dice-6.png');
  //       break;
  //   }

  diceImage(`dice-${dice}.png`);

  //2. Display dice image
  diceEl.classList.remove('hidden');

  //3. Check for rolled 1: if true swith to next player
  if (dice !== 1) {
    //Add dice to current score for active player
    if (player0El.classList.contains('player--active')) {
      currentScore += dice;
      current0El.textContent = currentScore;
      score0El.textContent = Number(score0El.textContent) + dice;
    } else if (player1El.classList.contains('player--active')) {
      currentScore += dice;
      current1El.textContent = currentScore;
      score1El.textContent = Number(score1El.textContent) + dice;
    }
  } else {
    //Switch to next player
    if (player0El.classList.contains('player--active')) {
      player0El.classList.remove('player--active');
      player1El.classList.add('player--active');
      currentScore = 0;
    } else if (player1El.classList.contains('player--active')) {
      player1El.classList.remove('player--active');
      player0El.classList.add('player--active');
      currentScore = 0;
    }
  }
};
btnRoll.addEventListener('click', rollDice);

/* 
'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Get the image soure of the dice
const diceImage = function (src) {
  document.querySelector('.dice').src = src;
};

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
// const scores = [0,0];
let playing = true;

const switchPlayer = function () {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling dice functionality
const rollDice = function () {
  if (playing) {
    //1. Generating a random dice roll and find the accurate image
    const dice = Math.trunc(Math.random() * 6) + 1;

    //   switch (dice) {
    //     case 1:
    //       diceImage('dice-1.png');
    //       break;
    //     case 2:
    //       diceImage('dice-2.png');
    //       break;
    //     case 3:
    //       diceImage('dice-3.png');
    //       break;
    //     case 4:
    //       diceImage('dice-4.png');
    //       break;
    //     case 5:
    //       diceImage('dice-5.png');
    //       break;
    //     case 6:
    //       diceImage('dice-6.png');
    //       break;
    //   }

    diceImage(`dice-${dice}.png`);

    //2. Display dice image
    diceEl.classList.remove('hidden');

    //3. Check for rolled 1: if true swith to next player
    if (dice !== 1) {
      //Add dice to current score for active player
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Previous active player score and current update
      document.getElementById(`score--${activePlayer}`).textContent =
        Number(document.getElementById(`score--${activePlayer}`).textContent) +
        currentScore;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      //Switch to next player
      switchPlayer();
    }
  }
};

btnRoll.addEventListener('click', rollDice);

btnHold.addEventListener('click', function () {
  if (playing) {
    //Add current score to total score
    document.getElementById(`score--${activePlayer}`).textContent =
      Number(document.getElementById(`score--${activePlayer}`).textContent) +
      currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // if score >= 100 the player wins
    if (
      Number(document.getElementById(`score--${activePlayer}`).textContent) <
      100
    ) {
      switchPlayer();
    } else {
      // Finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    }
  }
});

btnNew.addEventListener('click', function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  currentScore = 0;
  activePlayer = 0;
  // const scores = [0,0];
  playing = true;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
});

*/
