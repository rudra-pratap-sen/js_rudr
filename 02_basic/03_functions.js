//function sayMyName() {
    //console.log("R");
    // console.log("U");
    // console.log("D");
    // console.log("R");
    // console.log("A");
// } 

// sayMyName() // This is calling functions

function addtwo(n1,n2) { // n1 & n2 are called parameters
    console.log(n1+n2);
}

// addtwo(3,4)

const result = addtwo(5,6)

// console.log("Result:" , result);

function myFunc(n1,n2) {
    let result1 = n1*n2
    return result1
    // console.log("Hitesh"); // after return nothing will be executed
}

function message(username) {
    if (username === undefined) {
        console.log("Please enter a name")
    } else {
        return `${username} just logged in `
    }
    
}

// alternate method 1

/* function message(username) {
    if (!username) {
        console.log("Please enter a name")
    } else {
        return `${username} just logged in `
    }
    
}
*/

// alternate method 2

/* function message(username = "Sam") {
    return `${username} just logged in `    
}
*/ // if we dont give value "Sam" is the value by default

console.log(message("Rudra"));
