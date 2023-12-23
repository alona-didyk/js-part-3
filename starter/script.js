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
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
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
