'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// LOGICAL ASSIGNMENT OPERATOR
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovani Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR ASSIGNMENT OPERATOR
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// NULLISH ASSIGNMENT OPERATOR (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND ASSIGNMENT OPERATOR
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

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
