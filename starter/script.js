'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// compute (calculate) property names instead of having writing out them manually or literally ([weekdays[...]])
// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const hours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// Data needed for first part of the section
// this object is written using object literal syntax {}
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// 1) ES6 enhanced object literals
// hours,

// order: function (starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// },

// 2) functions (methods)
// order(starterIndex, mainIndex) {
//   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// },

// orderDelivery: function ({
//   starterIndex = 1,
//   mainIndex = 0,
//   time = '20:00',
//   address,
// }) {
//   console.log(
//     `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//   );
// },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// OPTIONAL CHAINING ?.

// if (restaurant.hours && restaurant.hours.mon)
//   console.log(restaurant.hours.mon.open);
// if (restaurant.hours.fri) console.log(restaurant.hours.fri.open);

// WITH optional chaining
// if property before ?. exists then the next property will be read; if not undefined will be returned
// console.log(restaurant.hours.mon?.open);
// console.log(restaurant.hours?.mon?.open);

// example

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
// console.log(day);
// if we want to use a variable name as the property name, use []
// const open = restaurant.hours[day]?.open ?? 'closed';
// console.log(`On ${day}, we open at ${open}`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
// const user = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// console.log(user[0]?.name ?? 'User array empty');

// if (user.length > 0) console.log(user[0].name);
// else console.log('User array empty');

// LOOPING OBJECTS: OBJECT KEYS, VALUES AND ENTRIES

// Property NAMES
// const properties = Object.keys(hours);
// console.log(properties);

// to calculate how many properties are in object
// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(hours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// Property VALUES
// const values = Object.values(hours);
// console.log(values);

// Property ENTRIES (KEYS + VALUES)
// const entries = Object.entries(hours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// LOOPING ARRAYS: THE FOR-OF LOOP

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// this loop will automatically loop over entire array and in each iteration it will give access to the current array element
// for (const item of menu) console.log(item);

// to get index and element; entries gives a new array out of each element (2) [0,'Focaccia']
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// LOGICAL ASSIGNMENT OPERATOR
// const rest1 = {
//   name: 'Capri',
// numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovani Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR ASSIGNMENT OPERATOR
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH ASSIGNMENT OPERATOR (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND ASSIGNMENT OPERATOR
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// USE ANY DATA TYPE, RETURN ANY DATA TYPE, DO SHORT-CIRCUITING (IN CASE OR || OPERATOR IT MEANS IF THE FIRST VALUE IS TRUTHY VALUE IT WILL IMMEDIATELY RETURN THAT FIRST VALUE, IF ALL THE VALUES ARE FALSE IT WILL RETURN THE LAST VALUE)
// ==== OR ====
// console.log('--- OR ---');
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'jonas'); // jonas
// console.log(true || 0); // true
// console.log(undefined || null); // null, undefined is a falsy value

// console.log(undefined || 0 || '' || 'hello' || 23 || null); // hello

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// NULLISH COALESCING OPERATOR ??
// NULLISH VALUES: NULL AND UNDEFINED (NOT 0 OR '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// === AND ===
// if all the values are true it will return the last one, if one element is false it means that entire operation will be false anyway and it will not look at other elements
// AND LOOKS FOR THE FALSY VALUE, OTHERWISE IT RETURN THE LAST ELEMENT
// console.log('--- AND ---');
// console.log(0 && 'Jonas'); // 0
// console.log(7 && 'Jonas'); // jonas

// console.log(23 && 'Jonas' && null && 'hello'); // null

// Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// destructuring is to break a complex data structure down into a smaller data

// spread operator is used to expand an array into all these elements
// const arr = [6, 7, 8];
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// log individual element
// console.log(...newArr);

// to add new element
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// THE SPREAD OPERATOR TAKES ALL THE ELEMENTS FROM THE ARRAY AND DOES NOT CREATE A NEW VARIABLES

// COPY ARRAY
// const mainMenuCopy = [...restaurant.mainMenu];

// JOIN TWO ARRAYS
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables are arrays, strings, maps, sets, except object

// const str = 'Jonas';
// const letters = [...str, ' ', 'J.'];
// console.log(letters);
// console.log(...str);

// const ingredients = [
// prompt("Let's make pasta! Ingredient 1?"),
// prompt('Ingredient 2?'),
// prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Objects
// const newRestaurant = { ...restaurant, founder: 'Jonas', foundedIn: '1991' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// ====DESTRUCTURING====

// THE SPREAD OPERATOR IS TO UNPACK ELEMENTS FROM AN ARRAY
// REST IS TO PACK ELEMENTS INTO AN ARRAY

// SPREAD, because on the right side of =
// const arr = [1, 2, ...[3, 4]];

// REST, because on the left side of =
// const [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(a, b, rest);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// rest does not include skipped elements

// objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// ====FUNCTIONS====

// const add = function (...numbers) {
// console.log(numbers);
//   let sum = 0;
//   for (let index = 0; index < numbers.length; index++) sum += numbers[index];
//   console.log(sum);
// };
// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4, 5, 6);

// const x = [23, 5, 90];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');

// multiple values separated by comma are only expected when we pass argument into a function, or when we build a new array

// DESTRUCTURING OBJECTS
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole 23',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'via del sole 23',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantNames,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantNames, hours, tags);

// default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 2, b: 4, c: 8 };
// ({ a, b } = obj);
// console.log(a, b);

// nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// DESTRUCTURING ARRAY
// const arr = [1, 2, 3];
// const a = [0];
// const b = [0];
// const c = [0];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// switch variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// SET - A COLLECTION OF UNIQUE VALUES; NEVER HAVE A DUPLICATES; THERE IS NO KEY-VALUE PAIRS, ITS JUST A BUNCH OF VALUES GROUPED TOGETHER; ITERABLES; THE DIFFERENCE FROM AN ARRAY IS ITS VALUES ARE ALWAYS UNIQUE; THE ORDER OF THE ELEMENT IN THE SET IS IRRELEVANT(не має значення)

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet); // Set(3) {'Pasta', 'Pizza', 'Risotto'}

// console.log(new Set('Jonas')); // Set(5) {'J', 'o', 'n', 'a', 's'}

// to get size of the set
// console.log(orderSet.size); // 3

// to check if a certain element is in set
// console.log(orderSet.has('Pizza')); // true
// console.log(orderSet.has('Bread')); // false

// to add new element to a set
// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// console.log(orderSet);

// to delete element
// orderSet.delete('Risotto');
// console.log(orderSet);

// THERE ARE NO INDEXES, WE CANT GET VALUES OUT OF A SET; IF ALL THE VALUES ARE UNIQUE AND THEIR ORDER DOES NOT MATTER, THERE IS NO POINT IN RETRIEVING VALUES OUT OF A SET

// to delete all of the values of a set
// orderSet.clear();
// console.log(orderSet);

// we can loop over them
// for (const order of orderSet) {
//   console.log(order);
// }

// THE MAIN USE OF SETS IS TO REMOVE DUPLICATE VALUES OF ARRAYS
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// to convert Set to an array
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// to know how many different positions there are
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// to count how many letters are in string
// console.log(new Set('jonas').size);

// MAP - A DATA STRUCTURE THAT WE CAN USE TO MAP VALUES TO KEYS; THE KEYS CAN BE ANY TYPE

// const rest = new Map();

// to fill up the map
// set not only update the map but also returns the updated map
// rest.set('name', 'Clasicco Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal')); // Map(3) {'name' => 'Clasicco Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal'}

// you can chain set
// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// to read data from the map
// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// to check if a map contains a certain key
// console.log(rest.has('categories'));

// to delete element from the map
// rest.delete(2);
// console.log(rest);

// to get size of the map
// console.log(rest.size);

// to remove all the elements
// rest.clear();
// console.log(rest);

// the use of arrays and objects as a map keys
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// console.log(rest.get([1, 2])) // undefined, because its not the same array, we should put [1, 2] in a variable
// console.log(rest.get(arr));

// MAPS: ITERATION

// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [(false, 'Try again')],
// ]);

// console.log(question);

// Convert object to map
// the same structure as calling this
// console.log(Object.entries(hours));
// const hoursMap = new Map(Object.entries(hours));
// console.log(hoursMap);

// Quiz app

// Iteration
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`${key}: ${value}`);
//   }
// }

// const answer = Number(prompt('Your answer?'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// to convert a map back to an array
// console.log([...question]);
// console.log([...question.entries()]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

// WHAT TO USE
// 1) if simple list => arrays or sets; when we do not need to describe the values
// 2) if key/value set => objects or maps; key allows to describe a value

// USE ARRAY IF YOU NEED ORDERED LIST OF VALUES(MIGHT CONTAIN DUPLICATES), WHEN YOU NEED TO MANIPULATE DATA
// USE SETS WHEN WORKING WITH UNIQUE VALUES, WHEN YOU NEED HIGH-PERFORMANCE(SETS CAN BE FASTER THAT ARRAY), USE TO REMOVE DUPLICATES FROM ARRAY

// USE OBJECTS IF YOU NEED MORE 'TRADITIONAL' KEY/VALUE STORE, EASIER TO WRITE AND ACCESS VALUES WITH . AND []; USE WHEN YOU NEED TO INCLUDE FUNCTIONS(METHODS), USE WHEN WORKING WITH JSON
// USE MAPS IF YOU NEED BETTER PERFORMANCE(SIMPLE KEY/VALUES STORES), KEYS CAN HAVE ANY DATA TYPE, EASY TO ITERATE, EASY TO COMPUTE(CALCULATE); USE WHEN YOU SIMPLY NEED TO MAP KEY TO VALUES; USE WHEN YOU NEED KEYS THAT ARE NOT STRINGS

// STRINGS

// const airline = 'TAP Air Port';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// console.log('B737'[0]);

// to read length
// console.log(airline.length);
// console.log('B737'.length);

// methods
// the first
// console.log(airline.indexOf('r'));
// the last
// console.log(airline.lastIndexOf('r'));
// to search for a word
// console.log(airline.indexOf('Port'));

// slice method
// The slice() method extracts a part of a string
// The slice() method returns the extracted part in a new string
// The slice() method does not change the original string
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ')));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
// B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got the middle seat');
//   } else {
//     console.log('You got lucky');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// Changing the case of a string
// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// Fix capitalization in name
// const passenger = 'jOnAs';
// const passengerToLowerCase = passenger.toLowerCase();
// const passengerCorrrect =
//   passengerToLowerCase[0].toUpperCase() + passengerToLowerCase.slice(1);
// console.log(passengerCorrrect);

// Check email
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// to delete white spaces
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// to replace all the above
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// console.log(email === normalizedEmail);

// To replace parts of string
// const priceGB = '288,97&';
// const priceUS = priceGB.replace('&', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// regular expression
// /g - global
// console.log(announcement.replace(/door/g, 'gate'));

// methods that returns booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of a NEW Airbus family');
// }

// Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are not allowed on board');
//   } else {
//     console.log('Welcome on board!');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// SPLIT - allows to split a string into multiple parts based on a divider string
// store the result into elements of a new array
// console.log('a+very+nice+string'.split('+')); // (4) ['a', 'very', 'nice', 'string']
// console.log('Jonas Jay'.split(' ')); // (2) ['Jonas', 'Jay']

// const [firstName, lastName] = 'Jonas Jay'.split(' ');

// JOIN - opposite of split
// const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName); // Mr Jonas JAY

// to capitalize
// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
// namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');

// Padding a string - add a number of characters to a string untill the string has a certain desired length
// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '+').padEnd(35, '+')); // +++++++++++Go to gate 23!++++++++++
// if there was 5 ana not 25, it would not work because the initial string is shorter

// const maskCreditCard = function (number) {
// const str = String(number)
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(647326417852615)); // ***********2615
// console.log(maskCreditCard('6876889789754')); // *********9754

// REPEAT
// const message2 = 'Bad Weather... All Departues Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
// };

// console.log(planesInLine(2));

// Coding Challenge #4

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs): underscoreCase ✅
// firstName ✅
// someVariable ✅
// calculateAge ✅
// delayedDeparture ✅
// Hints:
// § Remember which character defines a new line in the textarea 😉
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working 😉
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data! GOOD LUCK 😀

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;

//   const rows = text.split('\n');

//   console.log(rows);

//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
//   }
// });

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
