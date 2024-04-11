// we can't use 'alert' is node.js it's not like browser
"use srtict"; // treat all JS code as newer versions
let name = "Rudra" // string
let age = 22 // number , there is also bigInt
let isLoggedin = false // boolean 
let isGen = null // standalone value in javascript , represtation of empty space
let big = undefined // udefined
// there is also 'symbol' , used for uniqueness

// there is also non-primitive datatype like Object

console.log(typeof null); // null is object in datatypes which is a flaw in the language

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

console.log(Id === anotherId)  // false 
const bigNumber = 123456789987654321n // n at the last converts into BigInt

// ******************ARRAYS*************

const heroes = ["Invincible" , "Omni Man" , "Superman" , "Batman"] 

// *****************Key Value Pairs****************

const villains = {
    name: Billgax,
    comic: Ben10,
}

// ****************Functions********************

