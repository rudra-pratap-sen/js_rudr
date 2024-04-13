// **************SCOPES***************

// outside braces is global scope

// var a = 10
// let b = 20
// const c = 30

// inside braces is local scope 

if (true) {
    let b = 100
    var a = 200
    const c = 300
    console.log("Inner:" , a)
} 

// console.log(a)
// console.log(b)
// console.log(c)

/* *************FURTHER DISCUSIION**************** */

function one() {
    const username = "Rudra"

    function two() {
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website); // This throw error because website is inside two 

    two()
}

one()

// Explanation 
/* Suppose a parent and a child is eating ice cream . If the child asks the parent for his ice cream it is normal . But if the parent ask the child
for his ice cream it is normal at all . Thats happen here also , function two (child) can seek the const username from function one (parent) .
but function one can't seek const website from function two . */

// ***************INTERESTING******************


// console.log(addOne(5)); // This doesn't throw error

function addOne(num) {
    return num + 1
}

// console.log(addTwo(2)); // This will throw error bcs we are summoning the const before it is defined .

const addTwo = function(num) {
    return num + 2
}