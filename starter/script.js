'use strict';

// WHAT IS OBJECT-ORIENTED PROGRAMMING?

// OOP is a programming paradigm (style of the code) based on the concept of object
// we use objects to model (describe) real-word or abstract features
// Objects may contaion data (properties) and code (methods). By using objects, we pack data and the corresponding behavior into one block
// In OOP, objects are self-contained pieces/blocks of code, loke small applications
// Objects are building blocks of applications, and interact with one another
// Interactions happen through a public interface (API): methods that the code outside of the object can access and use to communicate with the object
// OOP was developed with the goal of organising code, to make it more flexible and easier to maintain

// CLASS - like a blueprint from which we can create new objects
// CLASS IS NOT AN OBJECT
// an object created through a class instances (model; sample; a real object which was created from a class) of that class

// HOW TO MODEL REAL-WORLD DATA INTO CLASSES?
// The 4 fundamentals principles of OOP:

// - Abstraction - IGNORING/HIDDING details that DO NOT MATTER, allowing us to get an OVERVIEW perspective of the thing we're implementing, instead of messing with details taht dont really matter to our implementation

// - Encapsulation - KEEPING properties and methods PRIVATE inside the class, so they are NOT ACCESIBLE FROM OUTSIDE THE CLASS. Some methods can be EXPOSED as a public interface. prevents external code from accidantely manipulating internal properties/ state; allows to change internal implementation without the risk of breaking external code

// - Inheritance - child class inherit from parent class; making all properties and methods of a certain class AVAILABLE TO A CHILD CLASS, forming a hierarchial relationship between classes. This allows us to REUSECOMMON LOGIC and model real-world relationships

// - Polimorphism - a child class can OVERWRITE a method it inherited from a parent class
