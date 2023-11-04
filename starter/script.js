'use strict';

console.log(document.querySelector('.message').textContent);

// DOM document object model - structured representation of HTML documents. Allows js to access HTML elements and styles to manipulate them
// Document is an entry point to them
// HTML element is a root element

// DOM IS NOT PART OF THE JS, ITS PART OF WEB API`S(APLICATION PROGRAMMING INTERFACE) - ITS A LIBRARYS (ALSO WRITEN IN JS) THAT BROWSER IMPLEMENT AND WE CAN ACCESS THEM USING JS

document.querySelector('.message').textContent = 'Correct number!';
console.log(document.querySelector('.message').textContent);
