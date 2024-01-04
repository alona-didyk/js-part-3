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
  labelBalance.textContent = `${acc.balance} EUR`;
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
  labelSumIn.textContent = `${incomes} EUR`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)} EUR`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} EUR`;
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
  displayMovements(acc.movements);

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

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    containerApp.style.opacity = 100;

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
  const amount = Number(inputTransferAmount.value);
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

    // Update UI
    updateUI(currentAccount);
  }
});
