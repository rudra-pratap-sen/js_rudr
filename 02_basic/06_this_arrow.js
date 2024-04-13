const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); // this reffer current context
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Sam" // context changed
user.welcomeMessage()

console.log(this); // global context is empty , retruns {} means empty object

/*function chai(){
    let username1 = "Hitesh"
    console.group(this)
    console.log(this.username1); // returns undefined // not works for function
}

chai() */

/* *****************ARROW FUNCTION***************** */

/* const chai = () => {
    let username1 = "Hitesh"
    console.group(this)
    console.log(this.username1);
}

chai() */

const addThree = (n1,n2) => {
    return n1 + n2
}

// Below the arrow function has implicit return

const add2 = (n1,n2) => n1 +n2

const add3 = (n4,n5) => (n4+n5) // if we use () then we dont have to write return