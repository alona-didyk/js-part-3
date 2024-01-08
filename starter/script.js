'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-07-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// const accounts = [account1, account2, account3, account4];

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    // const hours = `${now.getHours()}`.padStart(2, '0');
    // const minutes = `${now.getMinutes()}`.padStart(2, '0');
    return `${day}/${month}/${year}`;
    // day/month/year
  }
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  // to not mutate the original use slice
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date);

    const html = ` <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${mov.toFixed(2)}</div>
  </div>`;

    // to add html onto the webpage
    // accepts two string: 1 - position in which we want to attach the html
    // afterbegin - after beggining of new element; 2 - the html that we want to insert
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

// Coding Challenge #1
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Juliafoundoutthattheownersofthefirstandthelasttwodogsactuallyhave cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. CreateanarraywithbothJulia's(corrected)andKate'sdata
// 3. Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy   ")
// 4. Runthefunctionforbothtestdatasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3] § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far 😉 GOOD LUCK 😀

// const checkDogs = function (dogsJulia, dogsKate) {
// 1 - create a shallow copy of Julia's array, and remove the cat ages from that copied array
// const dogsJuliaCorrect = dogsJulia.slice(1, -2);
// const dogsJuliaCorrect = dogsJulia.slice(1, -2);
// dogsJuliaCorrect.splice(0, 1);
// dogsJuliaCorrect.splice(-2);

// 2 - Create an array with both Julia's (corrected) and Kate's data
// const JuliaAndCate = dogsJuliaCorrect.concat(dogsKate);

// 3 - Foreachremainingdog,logtotheconsolewhetherit'sanadult("Dognumber1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy")
//   JuliaAndCate.forEach((dog, i) => {
//     const age =
//       dog >= 3
//         ? `Dog number ${i + 1} is an adult, and is ${dog} years old`
//         : `Dog number ${i + 1} is still a puppy`;
//     console.log(age);
//   });
// };

// const dogJulia = [3, 5, 2, 12, 7];
// const dogKate = [4, 1, 15, 8, 3];

// checkDogs(dogJulia, dogKate);

// DATA TRANSFORMATIONS: MAP, FILTER, REDUCE

// MAP - loop over array, simillar to forEach, but map creates a new array based on original array; it loops over each element and apply a callback function to each element
// MAP RETURNS A NEW ARRAY CONTAINING THE RESULTS OF APPLYING AN OPERATION ON ALL ORIGINAL ARRAY ELEMENTS

// FILTER - used to filter for elements in the original array which satisfy a certaion condition
// FILTER RETURNS A NEW ARRAY CONTAINING THE ARRAY ELEMENTS THAT PASSED A SPECIFIED TEST CONDITION

// REDUCE BOILS ('REDUCES') ALL ARRAY ELEMENTS DOWN TO ONE SINGLE VALUE(E.G ADDING ALL ELEMENTS TOGETHER)
// we need accumulator variable and while it loops over an array it keeps adding an element to the accumulator untill at the end of the loop we have the total sum of all the elements. Then this value gets returned from the reduce method, so there is no new array in the end

// THE MAP METHOD

const eurToUsd = 1.1;

// here we use function
// const movementsUsd = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUsd = movements.map(mov => mov * eurToUsd);
console.log(movements, movementsUsd);

// here we simply loop over one array and then manyally create a new one
const movementsUsdFor = [];
for (const mov of movements) movementsUsdFor.push(mov * eurToUsd);

// map method can have three parameters - element, index, array
const movementsDescription = movements.map((mov, i, arr) => {
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
    mov
  )}`;
});
console.log(movementsDescription);

// COMPUTING USERNAMES

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts); // stw
console.log(accounts);

// THE FILTER METHOD

const deposits = movements.filter(mov => mov > 0);
console.log(movements);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// THE REDUCE METHOD

console.log(movements);
// the result will be one value, not an entire array
// parameters - accumulator => SNOWBALL (e.g. sum of numbers) (a value that we keep adding to)
// const balance = movements.reduce((acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

const calcDisplayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)} €`;
};

// calcDisplayBalance(account1.movements);

// Maximum value of an array
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max);

// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
// 1. Calculatethedogageinhumanyearsusingthefollowingformula:ifthedogis <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
// 2. Excludealldogsthatarelessthan18humanyearsold(whichisthesameas keeping dogs that are at least 18 years old)
// 3. Calculatetheaveragehumanageofalladultdogs(youshouldalreadyknow from other challenges how we calculate averages 😉)
// 4. Runthefunctionforbothtestdatasets
// Test data:
// § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
// GOOD LUCK 😀

// const calcAverageHumanAge = dogAges => {
//   const dogAgesInHumanYears = dogAges.map(dogAge => {
//     if (dogAge <= 2) return 2 * dogAge;
//     return 16 + dogAge * 4;
//   });
//   const adultDogAgesInHumanYears = dogAgesInHumanYears.filter(
//     dogAgesInHumanYear => {
//       return dogAgesInHumanYear >= 18;
//     }
//   );
//   const sumAdultDogAgesInHumanYears = adultDogAgesInHumanYears.reduce(
//     (acc, age) => acc + age,
//     0
//   );
//   const averageAdultDogAgesInHumanYears =
//     sumAdultDogAgesInHumanYears / adultDogAgesInHumanYears.length;
// console.log(averageAdultDogAgesInHumanYears);
// console.log(adultDogAgesInHumanYears);
//   return averageAdultDogAgesInHumanYears;
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// CHAINING METHODS
// pipeline
// do not chain splice or reverse
const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsInUSD);

// if there is mistake
// if we want to see a result of operation we should check the next operation
// const totalDepositsInUSD = movements
//   .filter(mov => mov < 0)
//   .map((mov, i, arr) => {
//     console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsInUSD);

const calcDisplaySummary = acc => {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)} €`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)} €`;
};

// calcDisplaySummary(account1.movements);

// Coding Challenge #3
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining!
// Test data:
// § Data1:[5,2,4,1,15,8,3] § Data2:[16,6,10,5,6,1,4]
// GOOD LUCK 😀
// const calcAverageHumanAge = dogAges => {
//   const dogAgesInHumanYears = dogAges.map(dogAge => {
//     if (dogAge <= 2) return 2 * dogAge;
//     return 16 + dogAge * 4;
//   });
//   const adultDogAgesInHumanYears = dogAgesInHumanYears.filter(
//     dogAgesInHumanYear => {
//       return dogAgesInHumanYear >= 18;
//     }
//   );
//   const sumAdultDogAgesInHumanYears = adultDogAgesInHumanYears.reduce(
//     (acc, age) => acc + age,
//     0
//   );
//   const averageAdultDogAgesInHumanYears =
//     sumAdultDogAgesInHumanYears / adultDogAgesInHumanYears.length;
// console.log(averageAdultDogAgesInHumanYears);
// console.log(adultDogAgesInHumanYears);
//   return averageAdultDogAgesInHumanYears;
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// const calcAverageHumanAge = ages => {
//   return ages
//     .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
// };

// const calcAverageHumanAge = ages => {
//   return ...
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

// THE FIND METHOD - to retrieve one element of an array based on a condition
// find will NOT return a new array, only the first element in the array that satisfies this condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

const updateUI = acc => {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting and reloading page
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const day = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = `${now.getHours()}`.padStart(2, 0);
    const min = `${now.getMinutes()}`.padStart(2, 0);
    labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // field loses focus
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAccount = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAccount &&
    currentAccount.balance >= amount &&
    receiverAccount?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAccount.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccount.movementsDates.push(new Date());

    // Update UI
    updateUI(currentAccount);
  }
});

// THE FININDEX METHOD - returns the index of the found element and not the element itself

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      // similar to indexOf, but with indexOf we can only search for value that is in array and it return a boolean
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

// SOME AND EVERY
console.log(movements);
// test for equality
console.log(movements.includes(-130));
// SOME test for a CONDITION
// if there is any value for which this condition is true then the some method will return true

console.log(movements.some(mov => mov === -130));

// const anyDeposits = movements.some(mov => mov > 0); // true
const anyDeposits = movements.some(mov => mov > 5000); // false
console.log(anyDeposits);

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// EVERY - returns true if all of the elements in the array satisfy the condition
console.log(movements.every(mov => mov > 0)); // false
// console.log(account4.movements.every(mov => mov > 0)); // true

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); // (5) [200, 450, 3000, 70, 1300]

// FLAT AND FLATMAP METHODS
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// FLAT - takes nested arrays and put it into one array
console.log(arr.flat()); // (8) [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// 1 - is a default level of depth, 2 - is a second level of nesting
console.log(arrDeep.flat(2)); // if 1 => (6) [Array(2), 3, 4, Array(2), 7, 8]
// if 2 => (8) [1, 2, 3, 4, 5, 6, 7, 8]

// put all movements into one array
// const accountMovements = accounts.map(acc => acc.movements); // (4) [Array(8), Array(8), Array(8), Array(5)]
// console.log(accountMovements);
// const allMovements = accountMovements.flat(); // (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// FLATMAP - combines map and flat
// flatMap only goes one level deep
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

// SORTING ARRAYS

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// sort mutate the original array
// sort method does the sorting based on strings
console.log(owners.sort()); // (4) ['Adam', 'Jonas', 'Martha', 'Zach']

// Numbers
console.log(movements); // (8) [200, 450, -400, 3000, -650, -130, 70, 1300]
// console.log(movements.sort()); // (8) [-130, -400, -650, 1300, 200, 3000, 450, 70]

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// }); // (8) [-650, -400, -130, 70, 200, 450, 1300, 3000]
// the same
movements.sort((a, b) => a - b);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// }); // (8) [3000, 1300, 450, 200, 70, -130, -400, -650]
movements.sort((a, b) => b - a);

console.log(movements);

// if array is mixed with strings and numbers, sort will not work

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// MORE WAYS OF CREATING AND FILLING ARRAYS
const arr2 = [1, 2, 3, 4, 5, 6];
// new Array creates a new array with 7 empty elements
// we can not use methods on it, except FILL()
const x = new Array(7); // (7) [empty × 7]

// x.fill(1); // (7) [1, 1, 1, 1, 1, 1, 1]
// to specify where we want to start filling (3) and where to end (5)
x.fill(1, 3, 5); // (7) [empty × 3, 1, 1, empty × 2]
console.log(x);

// mutate the original
arr2.fill(23, 2, 6); // (6) [1, 2, 23, 23, 23, 23]
console.log(arr2);

// to create the array
const y = Array.from({ length: 7 }, () => 1); // (7) [1, 1, 1, 1, 1, 1, 1]
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); // (7) [1, 2, 3, 4, 5, 6, 7]
console.log(z);

labelBalance.addEventListener('click', function () {
  // create an array from a node-list querySelector and map transforms the initial array to array we want
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  );
  console.log(movementsUI);

  // another way of doing it
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

// WHICH ARRAY METHOD TO USE

// TO MUTATE ORIGINAL ARRAY
// add to original - push(end), unshift(start)
// remove from original - pop(end), shift(start), splice(any)
// others - reverse, sort, fill

// A NEW ARRAY
// computed from original - map(loop)
// filtered using condition - filter
// portion of original - slice
// adding original to other - concat
// flattening the original - flat, flatMap

// AN ARRAY INDEX
// based on value - indexOf
// based on test condition - findIndex

// AN ARRAY ELEMENT
// based on test condition - find

// KNOW IF ARRAY INCLUDES
// based on value - includes
// based on test condition - some, every

// A NEW STRING
// based on separator string - join

// TO TRANSFORM TO VALUE
// based on accumulator - reduce(boil down array to single value of any type: number, string, boolean, or even new array or object)

// TO JUST LOOP ARRAY
// based on callback - forEach(does not creates a new array, just loops over it)

// ARRAY METHODS PRACTISE

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0); // 6
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); // 0
console.log(numDeposits1000);

// let a = 10;
// the priority of a++ is lower than console.log
// console.log(a++); // 10
// console.log(a) // 11
// the priority of ++a is higher than console.log
// console.log(++a); // 12

// 3. create an object
const { deposits2, withdrawals2 } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits2 += cur) : (sums.withdrawals2 += cur);
      sums[cur > 0 ? 'deposits2' : 'withdrawals2'] += cur;
      return sums;
    },
    { deposits2: 0, withdrawals2: 0 }
  );
console.log(deposits2, withdrawals2);

// 4.
// this is a nice title => This Is a Nice Title
const convertTitleCase = title => {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loopoverthe'dogs'arraycontainingdogobjects,andforeachdog,calculate the recommended food portion and add it to the object as a new property. Do not create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. FindSarah'sdogandlogtotheconsolewhetherit'seatingtoomuchortoo little. Hint: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Createanarraycontainingallownersofdogswhoeattoomuch ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Logastringtotheconsoleforeacharraycreatedin3.,likethis:"Matildaand Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Logtotheconsolewhetherthereisanydogeatingexactlytheamountoffood that is recommended (just true or false)
// 6. Logtotheconsolewhetherthereisanydogeatinganokayamountoffood (just true or false)
// 7. Createanarraycontainingthedogsthatareeatinganokayamountoffood(try to reuse the condition used in 6.)
// 8. Createashallowcopyofthe'dogs'arrayandsortitbyrecommendedfood portion in an ascending order (keep in mind that the portions are inside the array's objects 😉)
// Hints:
// § Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// § Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];

// 1.
// dogs.forEach(dog => {
//   dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
// });

// 2.
// const findSarah = dogs.find(dog => dog.owners.includes('Sarah'));
// console.log(
//   `Sarah's dog is eating too ${
//     findSarah.curFood > findSarah.recommendedFood ? 'much' : 'little'
//   }`
// );

// 3.
// const ownersEatTooMuch = dogs
//   .filter(dog => dog.curFood > dog.recommendedFood)
//   .flatMap(dog => dog.owners);

// const ownersEatTooLittle = dogs
//   .filter(dog => dog.curFood < dog.recommendedFood)
//   .flatMap(dog => dog.owners);

// 4.
// console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
// console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// 5.
// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// 6.
// const checkEatingOkay = dog =>
//   dog.curFood > dog.recommendedFood * 0.9 &&
//   dog.curFood < dog.recommendedFood * 1.1;
// console.log(dogs.some(checkEatingOkay));
// const checkEatingOkay = dog =>
//   dog.curFood > dog.recommendedFood * 0.9 &&
//   dog.curFood < dog.recommendedFood * 1.1;

// const anyOkayAmount = dogs.some(checkEatingOkay);
// console.log(anyOkayAmount);

// 7.
// console.log(dogs.filter(checkEatingOkay));

// 8.
// const sortedDogs = [...dogs].sort(
//   (a, b) => a.recommendedFood - b.recommendedFood
// );
// const dogsSorted = dogs
//   .slice()
//   .sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(sortedDogs);
// console.log(dogsSorted);

// CONVERTING AND CHECKING NUMBERS
// all numbers are represented internally as floating point number
// all numbers are represented internally in a 64 base 2 format (in a binary format so only composed of zeros and ones)

// base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.333333...
// binary base 2 - 0 1

console.log(23 === 23.0); // true
console.log(0.1 + 0.2); // 0.30000000000000004; infinite fraction

// convert string to number
console.log(Number('23'));
console.log(+'23');

// Parsing - parse(analyze) a number from a string
// a string should start with a number, otherwise its not gonna work
// a second argument of parseInt is regex - a base of a numeral system that we are using
console.log(Number.parseInt('23px', 10)); // 23
console.log(Number.parseInt('e23', 10)); // NaN

// parseFloat - reads decimal(floating) number from a string
console.log(Number.parseInt('2.5rem')); // 2
console.log(Number.parseFloat('2.5rem')); // 2.5

// we can call without Number, but Number provides a namespace for this global functions(parse Int and Float)

// isNaN - to check if any value is not a number
console.log(Number.isNaN(20)); // false; is it not a number? False
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20X')); // true; not a number
console.log(Number.isNaN(20 / 0)); // false; infinity; not a number

// better method to check
// isFinite - to check if any value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(23 / 0)); // false

// isInteger
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger('20')); // false
console.log(Number.isInteger(23 / 0)); // false

// MATH AND ROUNDING

// square root
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // the same

// cubic root
console.log(8 ** (1 / 3)); // 2

// maximum value
console.log(Math.max(2, 5, 89, 47)); // 89
// does type coersion
console.log(Math.max(2, 5, '89', 47)); // 89
// does NOT parse
console.log(Math.max(2, 5, '89px', 47)); // NaN

// minimum value
console.log(Math.min(2, 5, 89, 47)); // 2

// Constants of the Math object

// to calculate a radius of a circle with 10 pixels
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// to generate random numbers
// trunc- to remove decimal (after comma) part
console.log(Math.trunc(Math.random() * 6) + 1);

// a function that will always give us a number between min and max
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 => 0...(max - min) => min...(max - min + min)
console.log(randomInt(10, 20));

// rounding integers
// all this methods do the type coersion; so read strings
// remove integers after .
console.log(Math.trunc(23.4)); // 23

// round to the nearest integer
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.7)); // 24

// round up
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.7)); // 24

// round down
console.log(Math.floor(23.7)); // 23
console.log(Math.floor(23.3)); // 23

// negative naumbers trunc and floor
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// rounding decimals(floating point number)
// toFixed always returns a string, not a number
// here js do boxing - transform primitive to an object and do the methods and then transform back
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(3)); // 2.700
console.log((2.745).toFixed(2)); // 2.75

// THE REMAINDER OPERATOR %

// return a reminder of a division
// every Nth time
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5; 5 = 2 * 2 + 1

console.log(8 % 3); // 2; 8 = 2 * 3 + 2
console.log(8 / 3); // 2.6666666666666665

// to check if a number is even or odd
console.log(6 % 2); // 0; even

console.log(7 % 2); // 1; odd

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(23)); // false
console.log(isEven(90)); // true

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
// 0, 2, 4, 6...
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
// 0, 3, 6, 9...
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

// NUMERIC SEPARATORS - underscores that we can place anywhere that we want in numbers which will make it easy to understand

const diameter = 254_600_000_000;
console.log(diameter); // 254600000000; the engine ignores separators

const price = 345_99; // 345.99
console.log(price); // 34599

const transferFee1 = 15_00; // 15.00
const transferFee2 = 1_500; // 1.500

const PI = 3.14_15;
console.log(PI); // 3.1415

// convert strings that contains _ to a number
console.log(Number('23_000')); // NaN
console.log(parseInt('23_000')); // 23

// WORKING WITH BIGINT - big integer, to store numbers as large as we want

// the biggest number that js can safely represent
// if bigger then we can loose presisions
// MATH operations will NOT work
console.log(2 ** 53 - 1); // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// n - transforms a regular number to a bigint number
console.log(37428736497364917918379879877867n); // 37428736497364917918379879877867n
// use BigInt with smaller numbers
console.log(BigInt(5674754)); // 5674754n

// Operations
console.log(10000n + 10000n); // 20000n
console.log(7868713268567857645764567456454465767657n * 1000000000n); // 7868713268567857645764567456454465767657000000000n

// do NOT mix BigInt with regular numbers
const huge = 78756587679879798786876n;
const number = 23;
// console.log(huge * number); // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// it will work like that
console.log(huge * BigInt(number)); // 1811401516637235372098148n

// comparisong and plus
console.log(23n > 20); // true
// strict comparison, different types
console.log(20n === 20); // false
// if regulat equality operator(lose one), then it will do a type coercion and coerce 20n to 20
console.log(20n == 20); // true

// if +, bigInt is converted to a string
console.log(huge + '  is REALLy big'); // 78756587679879798786876  is REALLy big

// Divisions
// returns the closest bigInt; cuts the decimal part
console.log(10n / 3n); // 3n
console.log(12n / 3n); // 4n
console.log(10 / 3); // 3.3333...

// CREATING DATES

// 4 wys of creating a date

// new Date
// const now = new Date();
// console.log(now); // Mon Jan 08 2024 17:27:46 GMT+0200 (Eastern European Standard Time)

// parse a date from a date string
// console.log(new Date('Jan 08 2024 17:27:33 GMT+0200')); // Mon Jan 08 2024 17:27:33 GMT+0200 (Eastern European Standard Time)

// writing date ourselves (not a good idea)
// console.log(new Date('December 24, 2015')); // Thu Dec 24 2015 00:00:00 GMT+0200 (Eastern European Standard Time)

// z - utc
// console.log(account1.movementsDates[0]); // 2019-11-18T21:31:17.178Z

// pass yeear, month, day, hour, minute, second
// month always begin at 0
// console.log(new Date(2037, 10, 19, 15, 23, 5)); // Thu Nov 19 2037 15:23:05 GMT+0200 (Eastern European Standard Time)
// js autocorrects the dates
// november has only 30 days so it will be december
// console.log(new Date(2037, 10, 31)); // Tue Dec 01 2037 00:00:00 GMT+0200 (Eastern European Standard Time)

// we can pass an amount of milliseconds passed since the beginning of the unix time(january 1, 1970)
// console.log(new Date(0)); // Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)
// three days after this date
// timestamp - an amount of milliseconds passed since Unix time
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 03:00:00 GMT+0300 (Eastern European Standard Time)

// Methods working with dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// to get year
// console.log(future.getFullYear()); // 2037
// to get month
// console.log(future.getMonth()); // 10
// to get day
// console.log(future.getDate()); // 19
// to get day of the week
// console.log(future.getDay()); // 4; Thursday; 0 is a Sunday
// to get hours
// console.log(future.getHours()); // 15
// to get minutes
// console.log(future.getMinutes()); // 23
// to get seconds
// console.log(future.getSeconds()); // 0

// to get nicely formatted string
// console.log(future.toISOString()); // 2037-11-19T13:23:00.000Z

// to get timestamp - an amount milliseconds that passed since Unix time
// console.log(future.getTime()); // 2142249780000
// to creat ea date based on this timestamp
// console.log(new Date(2142249780000)); // Thu Nov 19 2037 15:23:00 GMT+0200 (Eastern European Standard Time)

// to get a timestamp for right now
// console.log(Date.now()); // 1704728854987; this number will always change as we reload page

// set versions for all these methods
// future.setFullYear(2040);
// console.log(future); // Mon Nov 19 2040 15:23:00 GMT+0200 (Eastern European Standard Time)
// and so on...

// ADDING DATES TO 'BANKIST' APP

// Fake always logged in
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;

const now = new Date();

// OPERATIONS WITH DATES

// calculations

// substractions -
const future = new Date(2037, 10, 19, 15, 23);
// when we convert to number it returns the timestamp
console.log(Number(future)); // 2142249780000

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
console.log(calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14, 10, 8))); // timestamp - 864000000; in days - 10

// if we want precize calculations we should use date library like moment.js
