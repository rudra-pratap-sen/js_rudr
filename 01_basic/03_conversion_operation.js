let score = "100"
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof(valueInNumber))

// study NaN

/* on conversion to number 
"33" => 33
"33abc" => NaN , not a number , but type of NaN is number
console.log(typeof NaN)
true => 1 , false => 0
null => 0  
*/

/* 1=> true 0=> false
empty string => false
string => false
*/

console.log(true + "")

// Implicit type conversion
"1" + 2; // Returns "12"
true + false; // Returns 1
null + undefined; // Returns NaN

// Explicit type conversion
Number("1"); // Returns 1
String(2); // Returns "2"
Boolean(0); // Returns false