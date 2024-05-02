// ********************OPERATIONS********************
console.log("2">1); // true
console.log("02">1); // true


console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

/* The equality operators and the comaprison operatros works differently 
comaprison operator turns null to zero */

/* unlike null undefined always gives false for 3 time */

/* STRICT check 
=== checks datatype
== don't check datatype
*/

// *******************TRUTHY******************

/* All values are truthy unless they are defined as falsy */

// ******************FALSY********************
/* 
Value	                Type	        Description
   null	             Null	        The keyword null — the absence of any value.
   undefined	       Undefined	  undefined — the primitive value.
   false	             Boolean	     The keyword false.
   NaN	             Number	     NaN — not a number.
   0	                Number	     The Number zero, also including 0.0, 0x0, etc.
  -0	                Number	     The Number negative zero, also including -0.0, -0x0, etc.
   0n	                BigInt	     The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
   ""	                String	     Empty string value, also including '' and ``.
   document.all	    Object	     The only falsy object in JavaScript is the built-in document.all.
*/