'use strict';
// Tries variable
let tries = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1; //Generating random number between 1 and 20

// This function variates tries value according to situation
function setTries() {
  document.querySelector('.score').textContent = tries;
}

// displays message
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// function onclick, called when check button is clicked
function click() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number Entered');
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayMessage('Correct');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too high' : 'Too Low');
    tries = tries - 1;
  }
  setTries();
  if (tries <= 0) {
    displayMessage('You lost');
    setTimeout(reset, 2000);
  }
}

// reset function calls on clicking again button, it resets screen to normal state
function reset() {
  tries = 20;
  setTries();
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#3f3dd8';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

setTries(); //setting default value of tries on html screen
document.querySelector('.check').addEventListener('click', click); //check button
document.querySelector('.again').addEventListener('click', reset); //again button
