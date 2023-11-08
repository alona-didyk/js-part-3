'use strict';

// high-level - we dont have to manage resources by ourselves cus they have abstractions that take all the work from us

// garbage collection - engine inside js which automatically removes old unused objects from comp memory

// interpreted - comp processer only undrstand zero and ones(machine code)

// multi-paradigm - js does all three
// paradigm is an approach and an overall mindset of structuring our code, which will ultimately direct the coding style and technique in a project that uses certain paradigm
// three popular paradigm: - procedural programming(organising the code in a very linear way and with some functions in between); - object-oriented programming; - functional programming

// prototype-based object-oriented

// first-class functions - functions are treated as variables

// dynamic - dynamically typed: no data-type definition; data-type of variables automatically changed

// single-threaded - js can do one thing at a time
// conccurency model - how js engine handles multiple tasks happening at the same time

// non-bloking event loop - takes long-running tasks, execute them in the 'background' and puts them back in the main thread once they are finished

// js engine - programm that executes js code
// engine contains: -callstack(where our code executes); - heap(where objects are stored)

// compilation - the entire code is converted into machine code at once, and written to a binary file that can be executed by a computer

// enterpretation - interpreter runs through the source code and executes it line by line

// just-in-time compilation - entire code is converted into machine code at once, then executed immediately
// Steps:
// parsing - read the code, the code is parsed into abstract syntax tree - used to generate machine code(not related to DOM)
// compilation - takes generated AST and compiles it to machine code
// execution
// optimisation - the code is optimised and recompiled during the already running programm execution

// runtime in the browser - container including all the things that we need to use js. Engine, WEB API, callback queue(all the callback functions that are ready to be executed) are required
