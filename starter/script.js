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
// const allSections = document.querySelectorAll('.section'); // returns NodeList
// console.log(allSections);

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
message.style.width = '100%';

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

// const h1 = document.querySelector('h1');
// mouseenter - fires whenever a mouse enters a certain element
// h1.addEventListener('mouseenter', function (e) {
//   console.log('addEventListener: Great! You are reading the heading');
// });

// another way (OLD) of attaching the addEventListener
// h1.onmouseenter = function (e) {
//   console.log('onmouseenter: Great! You are reading the heading');
// };

// addEventListener is better because:
// - we can add multiple event listener to the same event; if we did it with the second way, it would simply overwrite this property
// - we can remove an event handler like this
// const consoleMessage = function (e) {
//   console.log('addEventListener: Great! You are reading the heading');

// after this event (console.log) will happen only once
// h1.removeEventListener('mouseenter', consoleMessage);
// };

// also can remove like this
// setTimeout(() => h1.removeEventListener('mouseenter', consoleMessage), 3000);

// h1.addEventListener('mouseenter', consoleMessage);

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

// by default, events can be handled only in the TARGET and BUBBLING phase (however we can event listeners so event will happen also in capturing phase)

// NOT ALL TYPES do have a capturing and bubbling phase
// some of them are created right on the target element, so we can only handle them there

// so EVENT PROPAGATE(spread, circulate) which is CAPTURING and BUBBLING
// SO EVENT PROPAGATING FROM ONE PLACE TO ANOTHER

// EVENT PROPAGATION IN PRACTISE

// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

// all three is phase two and three
// event listener is not listening to phase one(capturing phase) because it irrelevant for us(not that useful)
// on the other hand bubbling can be useful for event delegation
// if we want to catch events during the capturing phase, we can define a third parameter in the addEventListener function - true or false
// after this the event handler will no longer listen to bubbling events, only to capturing events
// so now the parent element (nav) will be first, then nav__links, and then nav__link
// by default this capturing set to false
// document.querySelector('.nav__link').addEventListener('click', function (e) {
// console.log('Click');
// this always points to the element on which this event handler is attached
// this.style.backgroundColor = randomColor();
// currentTraget is the element on which the event handler is attached
// currentTarget is the same as this keyword
// console.log('Link', e.target, e.currentTarget); // TARGET => NAV__LINK
// console.log(e.currentTarget === this); // true; NAV__LINK

// Stop propagation (element traveling)
// not a good idea in practise
// e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
// console.log('Click');
// if we click on the nav__link. the nav__links(parent) will also change the color
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget); // TARGET => NAV__LINK
//   console.log(e.currentTarget === this); // true; NAV__LINKS
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
// console.log('Click');
//     this.style.backgroundColor = randomColor();
//     console.log('Nav', e.target, e.currentTarget); // TARGET => NAV__LINK
//     console.log(e.currentTarget === this); // true; NAV
//   },
//   false
// );

// IN ALL THREE ELEMENTS THE TARGET WILL BE THE SAME (NAV__LINK), BECAUSE THEY ARE HANDLING EXACT SAME EVENT
// CURRENT TARGET IS THE ELEMENT ON WHICH THE EVENT HANDLER IS ATTACHED SO THIS KEYWORD

// EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// the same but using event delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // to see where event happened
  console.log(e.target);
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// DOM TRAVERSING - WALKING THROUGH THE DOM, WHICH MEANS WE CAN SELECT AN ELEMENT BASED ON ANOTHER ELEMENT

// const h1 = document.querySelector('h1');

// Going downwards: child
// console.log(h1.querySelector('.highlight')); // select all the elements that are highlight class, that are children of the h1 element
// console.log(h1.childNodes); // this gives every single node of every single type that exist
// console.log(h1.children); // gives HTML collection, and we get only three elements that are actually inside h1 element; works only for direct children
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'black';

// Going upwards: parents
// direct parent
// console.log(h1.parentNode); // similar to childNode
// console.log(h1.parentElement);

// not direct parent
// h1.closest('.header').style.background = 'var(--gradient-secondary)'; // it selecting the closest header to h1 element and then simply apply the style to this element
// h1.closest('h1').style.background = 'var(--gradient-primary)'; // if it looking for the closest h1 then it will be the element itself
// so closest is the opposite of querySelector; querySelector looks for children; closest looks for parents

// Going sideways: siblings
// we can only access direct siblings, so only previous and the next one
// console.log(h1.previousElementSibling); // null
// console.log(h1.nextElementSibling); // h4

// for nodes
// console.log(h1.previousSibling); // #text
// console.log(h1.nextSibling); // #text

// to get all siblings
// move up tot he parent element and then read all the children from there
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

// BUILDING A TABBED COMPONENT

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard class - if statement which will return early if some condition is matched
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // Active tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// PASSING ARGUMENTS TO EVENT HANDLERS

// Menu fade animation
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
const nav = document.querySelector('.nav');

// Passing "argument" into handler
// mouseover simmilar to mouseenter, but mouseenter does not bubble
nav.addEventListener('mouseover', handleHover.bind(0.5));
// opposite of mouseover
nav.addEventListener('mouseout', handleHover.bind(1));

// IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT

// DONT DO IT LIKE THIS
// const initialCoords = section1.getBoundingClientRect();

// its better to avoid scroll event
// window.addEventListener('scroll', function (e) {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// A BETTER WAY: THE INTERSECTION OBSERVER API - ALLOWS OUR CODE TO OBSERVE CHANGES TO THE WAY THAT A CERTAIN TARGET ELEMENT INTERSECTS (CROSS) ANOTHER ELEMENT, OR THE WAY IT INTERSECTS THE VIEWPORT

// will be called each time the observed element, so our target element, is intersecting the root element at the treshold that we defined
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
// the element that the target is intersecting
// we can write the element or null (will be intersecting the entire viewport)
// root: null,
// the percentage of intersection at which the observer callback will be called
//   threshold: [0, 0.2],
// };

// firts argument - callback function, second - object
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // a box of 90 px that will be applied outside target element
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// REVEALING ELEMENTS ON SCROLL

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // to stop observe; pass the eleemnt which element should be unobserved
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// LAZY LOADING IMAGES

// we select all images which have the property of data-src
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

// BUILDING A SLIDER-COMPONENT

const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-700px)';
  // slider.style.overflow = 'visible';

  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i})`));
  // 0%, 100%, 200%, 300%

  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
    // curSlide - 1: -100%, 0%, 100%, 200%
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

// LIFECYCLE (RIGHT FROM THE MOMENT THAT THE PAGE IS FIRST ACCESSED, UNTILL THE USER LEAVES) DOM EVENTS

// DOMCONTENTLOADED - fires as soon as the HTML completely parsed; and all scripts
// this event does not wait for images and other external resources to load, so just HTML and js need to be loaded
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e); // HTML parsed and DOM tree built! Event {isTrusted: true, type: 'DOMContentLoaded', target: document, currentTarget: document, eventPhase: 2, …}
});
// if we have script at the end of HTML file, we do not need DOMContentLoaded

// LOAD EVENT - is fired by the window as soon as not only HTML is parsed, but also all the images and external resources like CSS files are also loaded
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e); // Page fully loaded Event {isTrusted: true, type: 'load', target: document, currentTarget: Window, eventPhase: 2, …}
});

// BEFOREUNLOAD EVENT - is fired by the window and created immediately before a user is about to leave the page
// e.g. to ask a user if they are 100% want to leave a page
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

// EFFICIENT SCRIPT LOADING: DEFER AND ASYNC

// these attributes will influence the way the js is fetched(downloaded) and executed
// IF SCRIPT TAG IS IN HEAD
// regular tag - first script fetch and execute and then html and DOMContentLoaded (NEVER DO THIS)

// we can add ASYNC tag to html script tag - the script is loaded at the same time as the html is parsed, however html parsing still stops for the script execution; scripts are fetched asynchronously and executed immediately
// DOMContentLoaded usually waits for all scripts to be executed, except for async script
// scripts are not guaranteed to execute in order
// its good if you use 3rd-party scripts where order does not matter (e.g. Google Analytics)

// (BETTER)
// or DEFER - the script is still loaded asynchronously, but the execution of the script is deffered untill the end of the html parsing; scripts are fetched asynchronously and executed after the html is completely parsed
// DOMContentLoaded fires after defer script is executed
// scripts are executed in order

// IF SCRIPT TAG IS IN BODY END
// regular tag - first html parsed and then script fetch and execute and DOMContentLoaded; scripts are fetched and executed after the html is completely parsed
// we can add ASYNC tag to html script tag - makes no sense
// or defer - makes no sense
