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

// first specify the event and then tell what to do through the function(event handler)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   document.querySelector('.message').textContent = 'Correct number!';
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  }
});
