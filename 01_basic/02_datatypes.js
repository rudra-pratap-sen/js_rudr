// we can't use 'alert' is node.js it's not like browser
"use srtict"; // treat all JS code as newer versions
let name = "Rudra" // string
let age = 22 // number , there is also bigInt
let isLoggedin = false // boolean 
let isGen = null // standalone value in javascript , represtation of empty space
let big = undefined // undefined
// there is also 'symbol' , used for uniqueness

// primitive datatypes :- SYMBOL STRING NUMBER NULL BOOLEAN BIGINT UNDEFINED (SSNNBBU)

// there is also non-primitive datatype like Object

// console.log(typeof null); // null is object in datatypes which is a flaw in the language

// Primitive Datatypes (Call by value)

// 7 types :- Number , Null , Boolean , BigInt , String , Symbol , Undefined

/* Non Primitive datatypes 
Array
Object
Functions
*/

// Javascript dynamically typed 

const Id = Symbol("123")
const anotherId = Symbol("123")

// console.log(Id === anotherId)  // false 
const bigNumber = 123456789987654321n // n at the last converts into BigInt

// ******************ARRAYS*************

const heroes = ["Invincible" , "Omni Man" , "Superman" , "Batman"] 

// *****************Key Value Pairs****************

/* const villains = {
    name: Billgax,
    comic: Ben10,
} */

// ****************OBJECTS( KING OF JAVASCRIPT )********************

/* In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

*/

// Object properties can be both primitive values, other objects, and functions.

const name1 = new String("Rudra")

console.log(typeof name1)