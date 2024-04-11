// const tinderUser = new Object()
const tinderUser = {}
// pushing key value pair 
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // object inside object // same shit happens like arrays
// const obj3 = Object.assign({}, obj1, obj2, obj4) // giving {} is a safe practice

const obj3 = {...obj1, ...obj2} // spraeding // same like arrays // most useful of assigning objects
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
] // this is how objects comes from database

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // gives the keys and the output is an array
// console.log(Object.values(tinderUser)); // gives the values and the output is an array
// console.log(Object.entries(tinderUser)); // output all the keyvalue pairs in seperate arrays

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // output is true bcs has 'isLooggedIn' key


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// *********************OBJECT DESTRUCTURING******************

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// *********************JSON*****************************

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]