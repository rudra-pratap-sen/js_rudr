class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

    static createID(){ // don't give access to instances
        return `123`
    }
}

const hitesh = new User("Hitesh")
console.log(hitesh.createID()) // throws error bcs static

class Teacher extends User{
    constructor(username, email){
        super(username) // uses call
        this.email = email
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const rudra = new Teacher("Rudra","rp@xyz.com")

console.log(rudra.createID())