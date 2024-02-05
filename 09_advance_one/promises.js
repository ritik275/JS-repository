const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 1 is complete")
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise Consumed")
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Ritik", email: "ritik@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;

        if(!error){
            resolve({username: "hitesh", password: "123"})
        }
        else{
            reject("ERROR: Something went wrong");
        }
    }, 1000)
})