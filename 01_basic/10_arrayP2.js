const marvelHeroes = ["IronMan","SpiderMan","Thor","Hulk"]
const dcHeroes = ["Superman","Batman","Flash","AquaMan"]

//marvelHeroes.push(dcHeroes) // push dcHeroes as an item thus it is 4th item in the marvelHeroes array

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][2]);

// const allHeroes = marvelHeroes.concat(dcHeroes) // this way creates new array

// *********Preffered way of adding arrays (SPREADING)*********

const all_heroes = [...marvelHeroes,...dcHeroes] // can add multiple arrays // called spreading // newer technique

// console.log(all_heroes);

const arr2 = [1,2,3[4,5,6],7,[8,9,10[11,12]]]

const arr2A = arr2.flat(Infinity) // argument in the () is called depth 

// console.log(arr2A);

// console.log(Array.isArray("Rudra")); // returns false bcs not an array
// console.log(Array.from("Hitesh")); // returns an array of characters in Hitesh
// console.log(Array.from({Name: "Pratap"})); // returns empty array [] // important for interview

let s1 = 100
let s2 = 200
let s3 = 300

// console.log(Array.of(s1,s2,s3));