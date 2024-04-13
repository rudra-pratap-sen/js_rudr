const email = "abc@xyz.com"

if (email) { // Here we don't have any condition but the code executes bcs of truthy values
    console.log("Got the mail");
} else {
    console.log("Got no mail");
}

// **********FALSY VALUES***********

// false , 0 , -0 , BigInt 0n , "" (actually empty string) , null , undefined , NaN

// ***********TRUTHY VALUES************

/* "0" (0 inside string) , "false" (false inside string) , " " (string with only space) ,
 [] (empty array) , {} (empty object) , function(){} (empty function) */

 // checking empty array with if 

 const myArr = []

 if (myArr.length === 0) {
    console.log("An empty array")
 }

 // checking empty object

 const myObj = {}

 if (Object.keys(myObj).length === 0 ) { // Object.keys(myObj) returns an array that's why we used length function
    console.log("An empty object");
 }

 // IMPORTANT

 // false == 0 , it is true
 // false == "" , it is true
 // 0 == "" , it is true

 // ************Nullish Coalescing Operator (??): null undefined************

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// ******************Terniary Operator*******************

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")