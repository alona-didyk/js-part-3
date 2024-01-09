'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  // to prevent page jump up when opening modal
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// HOW THE DOM REALLY WORKS

// DOM is basically the interface between all js code and the browser, or HTML documents that are rendered in and by the browser
// allows us to make js interact with the browser
// we can write js to create, modify and delete HTML elements; set styles, classes and attributes; and listen and respond to events
// DOM tree (tree like structure that made out of nodes) is generated from an HTML document, which we can then interact with
// DOM is a very complex API(application programming interface) that contains lots of methods and properties to interact with the DOM tree

// TYPES of DOM objects
// EVENT TARGET (addEventListener; never manyally created, just an abstract) =>
// = WINDOW (global object, lots of methods and properties, many unrelated to DOM)
// = NODE is represented by object (this object get access to methods like textContent)
// this node has a couple of child types:
// - element (querySelector...) => HTMLElement => HTMLButtonElement ... HTMLDivElement
// - text
// - comment
// - document (querySelector...)

// this all work because of INHERITANCE OF METHODS AND PROPERTIES

// SELECTING, CREATING, AND DELETING ELEMENTS

// Selecting
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section'); // returns NodeList
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button'); // this method returns an HTMlCollection (a live collection, if DOM changes this collection will immediately update automatically)
console.log(allButtons);

console.log(document.getElementsByClassName('btn')); // also returns collection

// Creating and Inserting elements
// .insertAdjacentHTML - create element

// return dom element, we should pass the tag name
const message = document.createElement('div');
// to add class
message.classList.add('cookie-message');
// textContent and innerHTML to read and to set conetent
// to add text
message.textContent =
  ' We use cookies for improved functionality and analytics';
// to insert HTML
message.innerHTML =
  ' We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// to insert element
// can insert only once
// we can use prepend and append not only to insert but also to move elements
// prepend adds the element as the FIRST child of this element(for e.g. header)
header.prepend(message);
// as the LAST child
header.append(message);

// to insert multiple copies of the same element
// header.append(message.cloneNode(true));

// before - insert an element before the element(header), as a siblings
// header.before(message);
// after - insert an element after the element(header), as a siblings
// header.after(message);

// delete elements
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.remove();
  // an old way
  // DOM tarversing - moving up and down DOM tree, like selecting parent element
  message.parentElement.removeChild(message);
});

// STYLES, ATTRIBUTES AND CLASSES

// Styles
// inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// to read style
console.log(message.style.height); // empty; this only works for styles that we set ourselves, like backgroundColor, not if styles are in css file or do not exist
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

// to get styles from css file
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 49px

// to increase height
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// to set property
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
// js will easily read these attributes cuz they are always defined in img tag
console.log(logo.alt);

console.log(logo.className);

// to set these attributes
logo.alt = 'Beautiful minimalist logo';

// but it will not read a NOT standart property, will be undefined
console.log(logo.designer);
// to read this property
console.log(logo.getAttribute('designer'));
// to set new attribute
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // absolute version => http://127.0.0.1:5500/starter/img/logo.png
console.log(logo.getAttribute('src')); // relative version => img/logo.png

// links
const link = document.querySelector('.twitter-link');
console.log(link.href); // https://twitter.com/jonasschmedtman
console.log(link.getAttribute('href')); // https://twitter.com/jonasschmedtman

// #
const linkHash = document.querySelector('.nav__link--btn');
console.log(linkHash.href); // http://127.0.0.1:5500/starter/index.html#
console.log(linkHash.getAttribute('href')); // #

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes, functionality is the same

// dont use
// logo.className = 'Jonas';

// IMPLEMENTING SMOOTH SCROLLING

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // to get coordinates of the element
  // getBoundingClientRect - calculates distance to the element and calculates how many pixels from viewport corners
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords); // DOMRect {x: 0, y: 415, width: 901, height: 1652.6953125, top: 415, …}

  console.log(e.target.getBoundingClientRect()); // DOMRect {x: 30, y: 183.71875, width: 112.4609375, height: 28.5, top: 183.71875, …}

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // Current scroll (X/Y) 0 364

  // to read the height and the wight of the viewport
  console.log(
    'height and width of viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); // height and width of viewport 779 901

  // scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // modern way
  section1.scrollIntoView({ behavior: 'smooth' });
});

// TYPES OF EVENTS AND EVENT HANDLERS
// event is a signal(something has happend) that is generated by a certain dumb node

const h1 = document.querySelector('h1');
// mouseenter - fires whenever a mouse enters a certain element
// h1.addEventListener('mouseenter', function (e) {
//   console.log('addEventListener: Great! You are reading the heading');
// });

// another way (OLD) of attaching the addEventListener
// h1.onmouseenter = function (e) {
//   console.log('onmouseenter: Great! You are reading the heading');
// };

// addEventListener is better because:
// - we can add multiple event listener to the same event; if we did it with the second way, it would simply overwrite tis property
// - we can remove an event handler like this
const consoleMessage = function (e) {
  console.log('addEventListener: Great! You are reading the heading');

  // after this event (console.log) will happen only once
  // h1.removeEventListener('mouseenter', consoleMessage);
};

// also can remove like this
setTimeout(() => h1.removeEventListener('mouseenter', consoleMessage), 3000);

h1.addEventListener('mouseenter', consoleMessage);

// third way of handling events
// add onclick to html tag
// <h1 onclick="console.log('html console')">

// EVENT PROPAGATION: BUBBLING AND CAPTURING

// for ex. we have link in html
// when user click on it, DOM generates a click event
// however its not generated on the target element, where this event happened
// instead the event generated at the root of the document, so at the very top of the DOM tree
// here happens the capturing phase, where the event then travels all the way down from the document root to the target element
// as the event travels down the tree, it will pass through every single parent element of the target element
// as soon as the event reaches the target, the target phase begin, where event can be handled right at the target(we do this with addEventListener)
// after reaching the target the event the travel all the way up to the document root again in a so-called bubling phase
// while bubbling up, the event travel all its parent elements

// its important because as if the event also happened in each of the parent elements

// by default, events can be handled only in the TARGET and BUBBLING phase (however we can event listenrs so tvent will happen also in capturing phase)

// NOT ALL TYPES do have a capturing and bubbling phase
// some of them are created right on the target element, so we can only handle them there

// so EVENT PROPAGATE(spread, circulate) which is CAPTURING and BUBBLING
// SO EVENT PROPAGATING FROM ONE PLACE TO ANOTHER
