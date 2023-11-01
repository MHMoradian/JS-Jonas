'use strict';
const score0El = document.querySelector('.score--0');
const score1El = document.querySelector('.score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

btnRoll.addEventListener('click', rollDice);
function rollDice() {
  let diceNum = Math.trunc(Math.random() * 6 + 1);
  diceImage(diceNum);
}

function diceImage(diceNum) {
  diceNum.src = `dice-${diceNum}.png`;
}
