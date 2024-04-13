// Immediately Invoked Function Expressions  (IIFE)

/* To remove the pollution from Global Scope we use IIFE . It executes immediately . */

// (wholefunction)(for function calling)

(function chai() {
    console.log("Hello")
}) ();  // here semicolon is very important

// in form of arrow function

( () => {
    console.log("Hello")
}) ();

( (name) => {
    console.log(`Hello ${name}`)
}) ("Pratap");