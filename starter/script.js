'use strict';

// DEFAULT PARAMETERES
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// we can use value sof other parameters that were set before
// ) {
// ES5
//   numPassengers = numPassengers || 1;
//   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 900);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// to skip one parameter
// createBooking('LH123', undefined, 1000);

// HOW PASSING ARGUMENTS WORK: VALUE VS REFERENCE

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Jay',
//   passport: 213314134,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 213314134) {
//     console.log('Check in');
//   } else {
//     console.log('Wrong passport');
//   }
// };

// flightNum is just a copy of the original value therefore it will not change
// jonas changed - when we pass a reference type to a function what is copied is really just a reference to the object in the memory heap, but they both point to the same object in memory
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// is the same as doing...
// const flightNum = flight;
// const passenger = jonas;
// passing a primitive type to a function is really just the same as creating a copy like this outside of the function

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// PASSING BY VALUE
// PASSING BY REFERENCE - JS DOES NOT HAVE IT. EVEN WHEN WE PASS AN OBJECT AND IT LOOKS LIKE REFERNCE, IT STILL A VALUE ITSELF. WE PASS A REFERENCE TO A FUNCTION BUT WE DO NOT PASS BY REFERENCE

// FIRST-CLASS AND HIGHER-ORDER FUNCTIONS

// FIRST-CLASS - js treats functions as a FIRST-CLASS CITIZENS, this means that functions are SIMPLY VALUES, functions are just another TYPE OF OBJECTS, store functions in variables or properties, pass functions as arguments to OTHER functions, return a function to another function, call methods on functions

// HIGHER-ORDER FUNCTIONS - a function that RECEIVES another function as an argument, that RETURNS a new function, or BOTH, this is only possible because of first-class functions

// FIRST-CLASS just a feature that a programming language either has or does not have
// HIGHER-ORDER is possible because the language supports first-class functions

// FUNCTIONS ACCEPTING CALLBACK FUNCTIONS

// removes white spaces
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// transform first letter to upper case
// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// Higher-class function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

// to read the name of a method
//   console.log(`Transformed by: ${fn.name}`);
// };

// CALLBACK FUNCTIONS IS A FUNCTIONS THAT PASSED TO OTHER FUNCTIONS, WE DONT CALL OURSELVES, WE CALL JS TO TELL THEM LATER

// transformer('javascript is the best', upperFirstWord);
// transformer('javascript is the best', oneWord);

// js uses callbacks all the time
// const high5 = function () {
//   console.log(`👋`);
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// CALLBACK FUNCTIONS ALLOWS US TO CREATE ABSTRACTIONS - IT MEANS THAT WE HIDE THE DETAIL OF SOME CODE IMPLEMENTATION BECAUSE WE DONT REALLY CARE ABOUT ALL THAT DETAIL

// FUNCTIONS RETURNING FUNCTIONS

// THIS ALL WORKS BECAUSE OF CLOSURE

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// this greeter is a function that in return, so now we are calling it with Jonas and Steven arguments
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// all in one go
// greet('Hello')('Jonas');

// same but using arrow function
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('Hi')('Ann');

// THE CALL AND APPLY METHODS

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],

//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// console.log(lufthansa);
// lufthansa.book(239, 'Jonas');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// UNDEFINED
// because in a regular function call the this keyword points to undefined
// book(23, 'Sarah');

// CALL - a method that will call a function, allows us to manually or explicitly set the this keyword of any function that we want to call. the first argument is what we want the this keyword to point to, and then the rest of an arguments which is the arguments of the original function
// book.call(eurowings, 23, 'Sarah');
// console.log(eurowings);

// book.call(lufthansa, 48, 'Mary');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 566, 'Mary');
// console.log(swiss);

// APPLY - does the same as call, except it does not receive a list of arguments after the this keyword, instead it gona take an array of an arguments
// const flightData = [538, 'George'];
// book.apply(swiss, flightData);
// console.log(swiss);

// same as apply but modern
// book.call(swiss, ...flightData);

// THE BIND METHOD - allows to set this keyword for any function call. The difference is that bind does not immediately call the function. Instead it returns a new function where the this keyword is bound, so its set to whatever value we pass into bind

// book.call(eurowings, 23, 'Sarah');
// this will not call a book function, instead it will return a new function where this keyword will be always set to eurowings
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);
// bookEW(23, 'Ann');

// we can pass multiple arguments, and these arguments will be set in stone
// a specific airline and a specific number
// Partial application - part of the arguments of the original function are already applied(already set)
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Jonas');
// bookEW23('Marta');

// when we use objects with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// The bind method creates a new function (addVAT) with the same body and scope as addTax, but with some pre-set arguments. The first argument of bind (null in this case) sets the this context for the new function, which is not relevant here since addTax is an arrow function (arrow functions do not have their own this context).
// const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;
// console.log(addVAT(100));

// the same but function calling the other function
// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter 'poll' object below.
// Your tasks:
// 1. Createamethodcalled'registerNewAnswer'onthe'poll'object.The method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this: What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Callthismethodwhenevertheuserclicksthe"Answerpoll"button.
// 3. Createamethod'displayResults'whichdisplaysthepollresults.The
// method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Runthe'displayResults'methodattheendofeach 'registerNewAnswer' method call.
// 5. Bonus:Usethe'displayResults'methodtodisplaythe2arraysinthetest data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
// Test data for bonus:
// § Data1:[5,2,3]
// § Data2:[1,5,3,9,6,1]
// Hints: Use many of the tools you learned about in this and the last section 😉 GOOD LUCK 😀

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),

//   registerNewAnswer(value) {
// Get answer
// let answer = +prompt(
//   `${this.question}\n${this.options.join('\n')}\n(Write option number)`
// );
// console.log(answer);

// Register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE) - a function that called only once and thats it

// (function () {
//   console.log('I run once');
// we cant have access to this variable from the global scope - this isPrivat is incapsulated inside of this function scope
// but we can have access to the variables in the global scope
//   const isPrivate = 23;
// })();

// (() => console.log('This will also run once'))();

// also variables declared with let or const create their own scope inside a block
// {
// we can not access this variable from outside
//   const isPrivate = 23;
// on the other hand we can access this from outside
//   var notPrivate = 23;
// }

// Uncaught ReferenceError: isPrivate is not defined
// console.log(isPrivate);
// this works
// console.log(notPrivate);

// THE IIFE IS NOT THAT USED ANYMORE BECAUSE WE CAN JUST CREATE A BLOCK {} AND IT WILL BE PRIVATE (EXCEPT FOR VAR). IF YOU WANT TO EXECUTE FUNCTION JUST ONCE THEN USE IIFE

// CLOSURES - we dont create it manually, it happens automatically

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// the result of the function will be stored in const booker, so this booker is now a function also
// const booker = secureBooking();

// booker(); // 1
// booker(); // 2
// booker(); // 3

// A CLOSURE MAKES A FUNCTION REMEMBER ALL THE VARIABLS THAT EXISTED AT THE FUNCTION BIRTHPLACE ESSENTIALLY
// SECUREBOOKING IS A BIRTHPLACE OF A BOOKER FUNCTION
// ANY FUNCTIONS ALWAYS HAS ACCESS TO THE VARIABLE ENVIRONMENT OF THE EXECUTION CONTEXT IN WHICH THE FUNCTION WAS CREATED
//A CLOSURE - VARIABLE ENVIRONMENT ATTACHED TO THE FUNCTION, EXACTLY AS IT WAS AT THE TIME AND PLACE THE FUNCTION WAS CREATED

// CLOSURE SUMMARY
// - a closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone
// less formal
// - a closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves (maintain in original state) the scope chain throughout time.
// less formal
// - a closure makes sure that the function does not loose conection to variables that existed at the function's birthplace
// less formal
// - a closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created

// we can take a look on its internal property, so this backpack
// console.dir(booker);

// Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f); // 23

// Re-assigning the f function
// h();
// f();
// console.dir(f); // 777

// if we re-assign the function to a new value then that old closure basically disappears

// Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

// this setTimeout will execute completely independently from boardPassengers
//   setTimeout(function () {
//     console.log(`We are now boarding ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// closure has priority over the scope chain
// if the scope chain had priority over the closure, then setTimeout would use this const instead of n / 3. If it was not for the closure it would have used this
// const perGroup = 1000;

// boardPassengers(180, 3);

// Coding Challenge #2
// This is more of a thinking challenge than a coding challenge 🤓 Your tasks:
// 1. TaketheIIFEbelowandattheendofthefunction,attachaneventlistenerthat changes the color of the selected h1 element ('header') to blue, each time the body element is clicked. Do not select the h1 element again!
// 2. Andnowexplaintoyourself(orsomeonearoundyou)whythisworked!Takeall the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  // by the time this function is executed, the IIFE has already been executed and with it the header const gone as well. But this body listener is still atached and waiting for some events to happen. So the header is a backpack of this listener
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
