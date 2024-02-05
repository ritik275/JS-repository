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


const promiseThree = new Promise(function(resolve, reject))