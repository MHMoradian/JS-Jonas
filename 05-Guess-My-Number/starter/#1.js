const secretNumber = document.querySelector('.number');
const guessNumber = document.querySelector('.guess').value;
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const message = document.querySelector('.message');

// Intial conditions
highScore = 0;
score.textContent = 20;
// create a random number between 0 and 20
let number = Math.trunc(Math.random() * 20 + 1);

checkButton.addEventListener('click', checkGuess);

function checkGuess() {
  // If no input
  if (!guessNumber) message.textContent = 'No number!';
  // If guess is correct
  else if (guessNumber === number) {
    message.textContent = 'Correct';
    secretNumber.textContent = guessNumber;
  } // If guess is incorrect
  else if (guessNumber !== number) {
    message.textContent = '';
  }
}
