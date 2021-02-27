'use strict';
let tries = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
function setTries() {
  document.querySelector('.score').textContent = tries;
}
function click() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Entered';
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.message').textContent = 'Correct';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high';
    tries = tries - 1;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low';
    tries = tries - 1;
  }

  setTries();
  if (tries <= 0) {
    document.querySelector('.message').textContent = 'You lost';
    setTimeout(reset, 2000);
  }
}
function reset() {
  tries = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.check').value = '';
  setTries();
}
setTries();
document.querySelector('.check').addEventListener('click', click);
document.querySelector('.again').addEventListener('click', reset);
