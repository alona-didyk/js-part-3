'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SIMPLE ARRAY METHODS

// methods are simply functions that attached to array

// let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE - extract part of any array but without changing the original array. This method return a new array so a copy of original array with extracted parts, this method does not mutate the original array
// the end parameter does not included in the output

// console.log(arr.slice(2, 4)); // c, d
// we can define negative parameter and then it will start copy from the end
// console.log(arr.slice(-2)); // d, e
// console.log(arr.slice(1, -2)); // b, c
// We also use SLICE to create a shallow copy of an array
// console.log(arr.slice());

// SPLICE - the same as slice but it does mutate the original array
// console.log(arr.splice(2)); // c, d ,e
// console.log(arr); // a, b; the original arr have changed, the splice deleted some elements
// to remove the last element
// console.log(arr.splice(-1)); // a, b, c, d

// when we want to take exactly two elements
// console.log(arr.splice(1, 2)); // b, c

// REVERSE - reverse the array, does mutate the original array
// let arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr2.reverse()); // (5) ['f', 'g', 'h', 'i', 'j']
// console.log(arr2); // it is not mutated, reversed

// CONCAT - cancatenate two arrays, does not mutate the original array
// const letters = arr.concat(arr2);
// console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// the same as this
// console.log([...arr, ...arr2]);

// JOIN - join the array, the result is a string with a separator
// console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

// THE NEW AT METHOD - to get element by index

// const arr = [23, 11, 16];
// console.log(arr[0]);
// console.log(arr.at(0));

// to get last element
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// At works on strings also
// console.log('jonas'.at(0));
// console.log('jonas'.at(-1));

// LOOPING ARRAYS: FOREACH

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
// math.abs to get the maximum value, remove -
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('----ForEach----');
// forEach a higher-order function which requires a callback function
// the continue and break does not work here
// the order should always be like this: current, element, index, array
// movements.forEach(function (movement, i, array) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
// math.abs to get the maximum value, remove -
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// FOREACH WITH MAPS AND SETS

// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// Set
// const currenciesUnique = new Set(['USD', 'GBD', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`); // USD: USD; set does not have keys
// });

// CREATING DOM ELEMENTS

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}</div>
  </div>`;

    // to add html onto the webpage
    // accepts two string: 1 - position in which we want to attach the html
    // afterbegin - after beggining of new element; 2 - the html that we want to insert
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
