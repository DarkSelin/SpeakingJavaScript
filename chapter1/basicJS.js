/* === Syntax === */

// Two slashes start single-line comments

// Declaring a variable
var x, y = 1;

// Assigning a value to the variable `x`
x = 3 + y;

// Defining function `foo` with parameters `a` and `b`
function foo(a, b) {
    return a + b;
}

// Calling function `foo` with parameters `x` and `y`
foo(x, y);

// Calling method `onload` of object `window` with argument
window.onload(foo(x, y));

// A conditional statement
if (x === 0) { // Is `x` equal to zero?
    x = 123;
}

/* ----------------------------------------------------------------------------------------------------------------- */
/* === Statements and expressions === */

// Statements “do things.” A program is a sequence of statements. Example: var x;
// Expressions produce values. They are function arguments, the right side of an assignment. Example: 5+7;

// if-then-else as a statement
var a;
if (y >= 0) {
    a = y;
} else {
    a = -y;
}

// if-then-else as an expression
var b;
b = (y >= 0) ? y : -y;

// Expression could be provided as an argument to function
foo((y >= 0) ? y : -y, (y >= 0) ? y : -y); // The whole line is a statement

/* ----------------------------------------------------------------------------------------------------------------- */
/* === Semicolons === */

// Semicolons terminate statements, but not blocks.
if (a > b) {
    // inside the block
}// no semicolon here

//  There is one case where you will see a semicolon after a block: a function expression
var f = function () {
}; // function expression inside var declaration

/* ----------------------------------------------------------------------------------------------------------------- */
/* === Compound assignment operators === */

// Compound assignment operators: +=, -=, *=, /=

// Two lines below are completely similar:
x += 1;
x = x + 1;

/* === Identifiers and variable names === */

// First character of an identifier (variable name) can be any Unicode letter, a dollar sign ($),or an underscore (_)
// Subsequent characters can additionally be any Unicode digit.

// Examples:
var arg0;
var _tmp;
var $elem;

// Following identifiers are reserved words — they are part of the syntax and can’t be used as variable names:
/*
 arguments   break   case    catch   class   const   continue    debugger

 default     delete  do      else    enum    export  extends     false

 finally     for     function if     implements  import   in     instanceof

 interface   let     new     null    package     private  protected public

 return      static  super   switch  this        throw   true    try

 typeof      var     void    while
 */

// The following three identifiers are not reserved words, but you should treat them as if they were
/*
 Infinity   NaN     undefined
 */

/* ----------------------------------------------------------------------------------------------------------------- */

/* === Values === */

// All values in JavaScript have properties. Each property has a key (or name) and a value.
// You can think of properties like fields of a record. You use the dot (.) operator to read a property.

// For example, the string 'abc' has the property length
'abc'.length;

// The dot operator is also used to assign a value to a property
var obj = {}; // empty object
obj.foo = 123; // create property `foo`, set it to 123
obj.foo; // will return 123

// And you can use it to invoke methods:
'hello'.toUpperCase();// will return 'HELLO'

// Reading an unknown property always returns undefined

/* ----------------------------------------------------------------------------------------------------------------- */

/* === Primitive values vs objects === */

// The primitive values are booleans, numbers, strings, null, and undefined
// All other values are objects

// A major difference between the two is how they are compared;
// Each object has a unique identity and is only (strictly) equal to itself
var obj1 = {}; // an empty object
var obj2 = {}; // another empty object
obj1 === obj2; // returns false
obj1 === obj1; // returns true

// All primitive values encoding the same value are considered the same
var prim1 = 123;
var prim2 = 123;
prim1 === prim2; // returns true

/* ----------------------------------------------------------------------------------------------------------------- */

/* === Primitive values === */

// The following are all of the primitives:
// Booleans: true, false
// Numbers: 1736, 1.351
// Strings: 'abc', "abc"
// Two “nonvalues”: undefined, null

// Primitives have the following characteristics:
// Compared by value
// Always immutable (properties can’t be changed, added, or removed)
'abc'.length = 1; // no effect

/* ----------------------------------------------------------------------------------------------------------------- */

/* === Objects === */

// All nonprimitive values are objects. The most common kinds of objects are:
// Plain objects, which can be created by object literals
obj = {
    firstName: 'Jane',
    lastName: 'Doe'
};
// Arrays, which can be created by array literals
obj = ['apple', 'banana', 'cherry'];
// Regular expressions, which can be created by regular expression literals
obj = /^a+b+$/;

// Objects have the following characteristics:
// Compared by reference (Identities are compared; every value has its own identity)
x = {} === {}; // two different empty objects, returns false
var obj1 = {};
var obj2 = obj1;
x = obj1 === obj2; // returns true
// Mutable by default (You can normally freely change, add, and remove properties)
obj.foo = 123; // add property `foo`

/* ----------------------------------------------------------------------------------------------------------------- */

/* === Undefined and null === */

// Undefined and null have no properties, not even standard methods such as toString().

// Undefined means “no value”. Uninitialized variables are undefined
var foo; // undefined
// Missing parameters are undefined
function f1(x) {
    return x
}
f1();// returns undefined
// If you read a nonexistent property, you get undefined
var obj2 = {}; // empty object
obj2.foo; // undefined

// Null means “no object.” It is used as a nonvalue whenever an object is expected

// Checking for undefined or null:
// Explicit check:
if (x === undefined || x === null) {

}

// Both undefined and null are considered false (remember that false, 0, NaN, and '' are also considered false):
if (!x) {

}
