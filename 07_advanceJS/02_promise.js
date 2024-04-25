const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()

    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// ******************************************************

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 Resolved")
})

//*************************************

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
            resolve({userName:"Rudra", email:"xyz@xyz.com", age: 23})
    }, 1000)
})

promiseThree.then(function(user){
        console.log(user)
})

// **********************************

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({userName:"Rudra",age:23})
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.userName
}).then((username) => {
        console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => {
    console.log("The promise is either resoved or rejected")
})

// ****************************************

const promisefive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({userName:"Sam",age:23})
        } else {
            reject("Error: Sam went wrong")
        }
    }, 1000);
})

async function consumepromisefive() {
    try {
        const response = await promisefive
    console.log(response)
    } catch (error) {
       console.log(error) 
    }
}

consumepromisefive()

// *************************

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error 404")
    }
}

getAllUsers()

// **************************

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.