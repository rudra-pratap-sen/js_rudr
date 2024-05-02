const username = "Rudra"
const heightInFeet = 6

// console.log(name + heightInInch +  "Value") // This a bad way now

// The better way is (STRING Interpolation)

console.log(`Hello my name is ${username} and my height is ${heightInFeet} feet`); // allows operation in curly braces

// alternate way of declaring 

const title = new String("PratapSen") // allows varius operations

console.log(title[1]);
console.log(title.toUpperCase());
console.log(title.length);
console.log(title.charAt(2));
console.log(title.indexOf('S'));

const middleName = title.substring(0,6)

console.log(middleName);

const newName = "     Rudra     "
console.log(newName.trim()); // there are trimEnd and trimStart also

const url = "https://rudra.com/rudra%20sen"

console.log(url.replace('%20','-'));

const name2 = "Rudra-Pratap-Sen"
console.log(name2.includes('Natu'));
const name3 = name2.split('-') 
console.log(typeof name3) // returns object
console.log(name3);


