// ******************MEMORIES*****************

/* two types of memories
Stack  => Primitive gets a copy , orginial value don't changes
Heap => Non-Primitive gets refference , original value changes
*/

let hero = "SuperMan"

let anotherHero = hero

anotherHero = "OmniMan"

console.log(hero);
console.log(anotherHero);

let userOne = {
    name: "abcxyz",
    handle: "abc@upi"
}

let userTwo = userOne

userTwo.handle = "xyz@upi"

console.log(userOne.handle);
console.log(userTwo.handle);