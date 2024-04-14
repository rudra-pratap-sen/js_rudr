// ***************** FOR OF LOOP *****************

// [{} , {} , {}] // Objects in array

/* const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const name = "Rudra Pratap Sen"

for (const i of name) {
    console.log(`each character of name is ${i}`)
} */

// ***************** MAP *************

// Map holds key value pair , order is important and all values are unique

const map = new Map()
map.set("IN","India")
map.set("USA","United States of America")
map.set("UK","United Kingdom")

// console.log(map);

/*for (const i of map) {
    console.log(i);
} */

for (const [i,j] of map) {
    console.log(`${i} :- ${j}`);
}

// ForOf loop on Object

/* const myObj = {
    "Game1": "NFS",
    "Game2": "BGMI",
    "Game3": "COD"
}

for (const i of myObj) {
    console.log(`game is ${i}`);
} */

// objects dont work in forof