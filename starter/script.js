'use strict';

console.log(document.querySelector('.message').textContent);

// DOM document object model - structured representation of HTML documents. Allows js to access HTML elements and styles to manipulate them
// Document is an entry point to them
// HTML element is a root element

// DOM IS NOT PART OF THE JS, ITS PART OF WEB API`S(APLICATION PROGRAMMING INTERFACE) - ITS A LIBRARYS (ALSO WRITEN IN JS) THAT BROWSER IMPLEMENT AND WE CAN ACCESS THEM USING JS

// to get text content
// mostly used with div, span, p
// contains the plain text content of the element, including all child nodes
// document.querySelector('.message').textContent = 'Correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// // to get value
// // mostly used with input, textarea,select
// // reprsents the value entered or selected by the user in a form element
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// event is something that happens on the page
// with event listener we can can wait for something to happen and then react to this

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// first specify the event and then tell what to do through the function(event handler)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   document.querySelector('.message').textContent = 'Correct number!';
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('No number!');
    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct number!';
    displayMessage('Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  // when guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
