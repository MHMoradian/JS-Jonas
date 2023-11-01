// 'use strict';

// /*console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number🥳';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
// */

// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// let score = 20;
// let highScore = 0;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);

//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct number🥳';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     if (score > highScore) highScore = score;
//     document.querySelector('.highscore').textContent = highScore;
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       if (guess > secretNumber) {
//         document.querySelector('.message').textContent = 'Too high!';
//       } else {
//         document.querySelector('.message').textContent = 'Too low!';
//       }
//       score--;
//       document.querySelector('.score').textContent = score;
//     }
//   } else {
//     document.querySelector('.message').textContent = 'GAME OVER!';
//     document.querySelector('.score').textContent = 0;
//   }
// });

// document.querySelector('.again').addEventListener('click', function () {
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   score = 20;
//   document.querySelector('.message').textContent = 'start gussing...';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style = '15rem';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.score').textContent = score;
// });

'use strict';

const secretNumber = document.querySelector('.number');
// guessNumber can not be defined here because it should get the value after pressing checkbutton.
// const guessNumber = Number(document.querySelector('.guess').value);
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const message = document.querySelector('.message');

let playing, number;

function init() {
  playing = true;
  message.textContent = 'Start guessing...';
  score.textContent = 20;
  secretNumber.textContent = '?';
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style = '15rem';
  document.querySelector('.guess').value = '';
}
init();

checkButton.addEventListener('click', checkGuess);
againButton.addEventListener('click', init);

function checkGuess() {
  if (playing) {
    const guessNumber = Number(document.querySelector('.guess').value);
    // console.log(guessNumber);
    // If wrong input
    if (!guessNumber) message.textContent = 'guess a number between 0 and 20';
    // If the guess is correct
    else if (guessNumber === number) {
      message.textContent = 'Correct';
      secretNumber.textContent = guessNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (Number(score.textContent) > Number(highScore.textContent))
        highScore.textContent = Number(score.textContent);
      playing = false;

      // If the guess is incorrect
    } else if (guessNumber !== number) {
      // Update score
      score.textContent--;

      // until score > 0 determine if the guess is too small or too large
      if (Number(score.textContent) > 0) {
        guessNumber < number
          ? (message.textContent = 'Too small')
          : (message.textContent = 'Too large');
      } // if score is 0 then game over
      else {
        message.textContent = 'GAME OVER!';
        score.textContent = 0;
        playing = false;
      }
    }
  }
}
