'use strict';

// WHAT IS OBJECT-ORIENTED PROGRAMMING?

// OOP is a programming paradigm (style of the code) based on the concept of object
// we use objects to model (describe) real-word or abstract features
// Objects may contaion data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block
// In OOP, objects are self-contained pieces/blocks of code, like small applications
// Objects are building blocks of applications, and interact with one another
// Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object
// OOP was developed with the goal of organising code, to make it more flexible and easier to maintain

// CLASS - like a blueprint from which we can create new objects
// CLASS IS NOT AN OBJECT
// an object created through a class instances (model; sample; a real object which was created from a class) of that class - instantiation

// HOW TO MODEL REAL-WORLD DATA INTO CLASSES?
// The 4 fundamentals principles of OOP:

// - Abstraction - IGNORING/HIDDING details that DO NOT MATTER, allowing us to get an OVERVIEW perspective of the thing we're implementing, instead of messing with details that dont really matter to our implementation

// - Encapsulation - KEEPING properties and methods PRIVATE inside the class, so they are NOT ACCESIBLE FROM OUTSIDE THE CLASS. Some methods can be EXPOSED as a public interface. prevents external code from accidantely manipulating internal properties/ state; allows to change internal implementation without the risk of breaking external code

// - Inheritance - child class inherit from parent class; making all properties and methods of a certain class AVAILABLE TO A CHILD CLASS, forming a hierarchial relationship between classes. This allows us to REUSECOMMON LOGIC and model real-world relationships

// - Polimorphism - a child class can OVERWRITE a method it inherited from a parent class

// OOP IN JAVASCRIPT - PROTOTYPES

// Each object has a prototype
// All objects in js are linked to a prototype object

// All prototype has methods which object can access
// This is called prototypal inheritance: the prototype contains methods (behavior) that are accessible to all objects linked to that prototype
// Behavior (method) is delegated to the linked prototype object

// e.g. map
// Array.prototype.map() - Array.prototype is the prototype of all array objects we create in js. Therefore all arrays have access to the map method

// 3 ways of implementing prototypal inheritance in js
// - Constructor functions - technique to create object from a function; this is how built-in objects like Array, Set, Map are implemented
// - ES6 Classes - modern alternative to constructor function syntax; 'Synttactic sugar': behind the scenes, ES6 Classes work EXACTLY leki constructor functions; ES^ Classes do NOT behave like classes in 'classical OOP'
// - Object.create() - the easiest and most straightforward way of linking an object to a prototype object

// CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR

// Constructor function - used to build an object using a function
// Constructor function is a completely normal function; the difference is the name start with a capital letter and we call with a new operator
// arrow functions do not work here

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create method inside constructor functions
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

// calling this constructor function
const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. new {} is created
// 2. function is called, this set to this newly created object
// 3. {} linked to prototype
// 4. Function automatically return {}

const matilda = new Person('Matilda', 2000);
const jack = new Person('Jack', 2003);
console.log(matilda, jack);

// to test for instance
console.log(jonas instanceof Person); // true

// PROTOTYPES

// each and every function in js has a property called prototype

// to add method to constructor functions
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

// prototype of jonas is a prototype property of a constructor function
console.log(jonas.__proto__); // {calcAge: ƒ, constructor: ƒ}
console.log(jonas.__proto__ === Person.prototype); // true

// prototype - prototypeOfLinkedObjects
console.log(Person.prototype.isPrototypeOf(jonas)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// to set property on the prototype
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

// own properties - is a properties that are declared directly in the object itself
console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false; cuz this property is not really inside of the Jonas object, it simply has access to it because of its prototype

// PROTOTYPAL INHERITANCE AND THE PROTOTYPE CHAIN

// PERSON constructor function has a prototype property, which is an object, and inside that object we define the calcAge method. And person.prototype has a reference back to person which is constructor. So person. prototype .constructor are going to point back to person
// Person.prototype are prototype NOT of Person, but of OBJECTS CREATED by person

// THE NEW OPERATOR;
// 1. An empty object is created
// 2. this keyword in constructor function call is set to the new object
// 3. The new object is linked (__proto__ property) to the constructor function's prototype property
// 4. The new object is automatically returned from the constructor function call

// This is how it works with FUNCTION CONSTRUCTOR AND ES6 CLASSES

// The fact that jonas is conected to a prototype and the abillity of looking up methods and properties in a prototype is called PROTOTYPE CHAIN (series of links between objects, linked through prototype, similar to the scope chain)

// PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS

console.log(jonas.__proto__); // {species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}
// a protoype of jonas's prototype
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …} - a prototype property of object
console.log(jonas.__proto__.__proto__.__proto__); // null

// constructor will point back to the person itself
console.log(Person.prototype.constructor);
// ƒ (firstName, birthYear) {
// Instance properties
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// Never create method inside constructor functions
//   this.calcAge = function () …

// to see the function
console.dir(Person.prototype.constructor); // ƒ Person(firstName, birthYear)

const arr = [2, 4, 5, 6, 7, 7, 6]; // new Array === []
console.log(arr.__proto__); // will show all the array methods
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.__proto__.__proto__); // object.prototype
// all array methods are living in Array.prototype, thats why thay are available for us

// DO NOT DO THIS
// to create new method
// returns all unique values
Array.prototype.unique = function () {
  // this an array on which this method will be called
  return [...new Set(this)];
};
console.log(arr.unique()); // (5) [2, 4, 5, 6, 7]

const h1 = document.querySelector('h1'); // __proto__ => HTMLElement
// we can call methods on funcion because they are objects and objects have prototypes

// Coding Challenge #1
// Your tasks:
// 1. Useaconstructorfunctiontoimplementa'Car'.Acarhasa'make'anda 'speed' property. The 'speed' property is the current speed of the car in km/h
// 2. Implementan'accelerate'methodthatwillincreasethecar'sspeedby10, and log the new speed to the console
// 3. Implementa'brake'methodthatwilldecreasethecar'sspeedby5,andlog the new speed to the console
// 4. Create2'Car'objectsandexperimentwithcalling'accelerate'and 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK😀

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
console.log(bmw);
bmw.accelerate();
bmw.brake();

// ES6 CLASSES
// syntactical sugar; a sprecial type of function

// class expression
// const PersonCL = class {}

// class declaration
class PersonCL {
  // like a constructor function
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods

  // to add method
  // all these methods will be on object.prototype and not on the object itself
  // methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // we are creating a setter to already existed property
  set fullName(name) {
    console.log(name);
    // to prevent error: maximum callstack exceeded, put _ to avoid naming conflict
    // but the problem is that we have tow fullName properties, so we need to create a getter to the fullName property
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // to create static method
  static hey() {
    console.log('Hey there!');
    console.log(this); // points to entire class
  }
}

// to call
const jessica = new PersonCL('Jessica Davis', 1991);
console.log(jessica); // PersonCL {firstName: 'Jessica', birthYear: 1991}
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCL.prototype); // true

PersonCL.hey();

// also we can add methods like this
PersonCL.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
jessica.greet();

// 1. Classes are NOT hoisted ( we can not use them before they are declared in the code)
// 2. Classes are first-class citizens (we can pass them into functions and also return them from functions)
// 3. Classes are executed in strict mode

// SETTERS AND GETTERS - ACCESSOR PROPERTIES

// a function that get and set the properties

const account = {
  owner: 'Jonas',
  movements: [200, 450, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

// to get
// its useful when we want to read something as a property but need to do some calculations before
// we dont call the method, we use it as a property
console.log(account.latest);

// to set
account.latest = 50;

console.log(account.movements);

// Classes also have Get and Set, and they work exact same way
// getter and setter are useful for name validation

// STATIC METHODS - methods that are attached to prototype constructor

// this from can be attached only to Array constructor
Array.from(document.querySelectorAll('h1'));

// do not do this
// [(1, 2, 3)].from();

// to create such method
Person.hey = function () {
  console.log('Hey there!');
  console.log(this); // the entire constructor function
};
// to call it
Person.hey();
// this method will not be inherited because it is not in the prototype of the jonas object
// jonas.hey(); // error

// OBJECT.CREATE

// no prototype properties, no constructor functions, now new operator are involved
// we use Object.create to create an object and manually set the prototype of an object to any other object

const personProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // a better way to set properties
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// return a new object that is linked to a prototype that we passed
const steven = Object.create(personProto);

// to add properties
// not the best way
steven.name = 'Steven';
steven.birthYear = 2001;
steven.calcAge();

console.log(steven.__proto__ === personProto); // true; the object we specified - PersonProto

const sarah = Object.create(personProto);
sarah.init('Sarah', 1995);
sarah.calcAge();

// Coding Challenge #2
// Your tasks:
// 1. Re-createChallenge#1,butthistimeusinganES6class(callit'CarCl')
// 2. Addagettercalled'speedUS'whichreturnsthecurrentspeedinmi/h(divide
// by 1.6)
// 3. Addasettercalled'speedUS'whichsetsthecurrentspeedinmi/h(but
// converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Createanewcarandexperimentwiththe'accelerate'and'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h GOOD LUCK😀

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCL('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.speedUS = 50;
console.log(ford);
