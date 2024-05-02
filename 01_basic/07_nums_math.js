const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(typeof balance); // object bcs of new keyword

// console.log(balance.toString().length);
// console.log(balance.toFixed(3)); // returns 100.000

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// console.log(hundreds.toLocaleString('en-US'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // changes to absolute value
// console.log(Math.round(4.6)); // round off
// console.log(Math.ceil(4.2)); // chooses to top value
// console.log(Math.floor(4.9)); // chooses bottom value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)