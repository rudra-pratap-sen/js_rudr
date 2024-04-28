class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // uses call
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const chai = new Teacher("chai","xyz@abc.com","123")
const tea = new User("Tea","abc@xyz.com","789")

console.log(chai instanceof Teacher)
console.log(chai instanceof User)