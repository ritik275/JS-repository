const isCashAvailable = false;

const atmPromise = new Promise(function(resolve, reject){
    if(isCashAvailable){
        const result = {
            message: "CASH IS AVAILABLE TO WITHDRAW"
        }
        resolve(result);
    }
    else{
        const result = {
            message: "CASH NOT AVAILABLE"
        }
        reject(result);
    }
})

atmPromise.then(function(resolveData){
    console.log(resolveData.message);
}).catch(function(rejectData){
    console.log(rejectData);
})



const score = 65;
const gradePromise = new Promise(function(pass, fail){
    if(score > 80){
        const result = {message: "Pass with Grade A"}
        pass(result);
    }
    else if(score <= 80 && score > 60){
        const result = {message: "Pass with Grade B"}
        pass(result);
    }
    else if(score <= 60 && score > 40){
        const result = {message: "Pass with Grade C"}
        pass(result);
    }
    else{
        const result = {message: "Fail with Grade D"}
        fail(result);
    }
})


gradePromise.then((passData)=>{
    console.log(passData.message)
}).catch((failData)=>{
    console.log(failData.message);
})