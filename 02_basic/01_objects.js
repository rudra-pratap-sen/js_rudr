// ********OBJECTS********

// singleton // Object.create

// object literals

const mySym = Symbol("Key1")

const jsUser = {
    Name: "Rudra",
    "Full Name": "Rudra Pratap Sen",
    Height: 6,
    isTall: true,
    location: "Kharagpur",
    email: "rp@rp.com",
    days: ["Mon","Tue","wed"],
    [mySym]: "MyKey1" // this is how we push symbol in keyvalue pairs
    // mySym: "MyKey1" // this is not a symbol but string it is
}

// console.log(jsUser.email);
// console.log(jsUser["email"]); // this is more correct way for accesing
// console.log(jsUser["Full Name"]) // we can't access fullname using . method
// console.log(jsUser[mySym]);

// jsUser.email = "rp@gmail.com" // override the value of email

// Object.freeze(jsUser) // freezes the keyvalue pairs 

// jsUser.email = "rp@123.com" // email can't be changed bcs it is freezed

jsUser.greeting = function(){
    console.log("Hello ! Good Morning")
}

jsUser.greeting_two = function(){
    console.log(`Hello! ${this["Full Name"]} , GoodMorning`)
}

console.log(jsUser.greeting_two());