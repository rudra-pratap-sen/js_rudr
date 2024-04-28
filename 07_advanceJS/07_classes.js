// ES6 

class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `Password is ${this.password}abc`
    }

    changeUsername(){
        return `Username is ${this.username.toUpperCase()}`
    }
}

const chai = new User("chai","chai@gmail.com","123")
console.log(chai.changeUsername())
console.log(chai.encryptPassword())
