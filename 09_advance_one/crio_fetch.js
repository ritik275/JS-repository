const postAPIPromise = fetch("https://jsonplaceholder.typicode.com/posts")

postAPIPromise.then(function(rawAPIDATA){
    //GET JSON FORMAT DATA WHICH IS IN ANOTHER PROMISE
    //rawAPIData --> Promise of JSON data
    //rawAPIData --> Raw Format Data --> JSON --> Print to UI
    rawAPIDATA.json().then(function(finalAPIResponse){
        projectAPIData(finalAPIResponse);
        // console.log(finalAPIResponse);
    })

    // console.log(rawAPIDATA);
}).catch(function(err){
    console.log(err);
})

function projectAPIData (apiData){
    //FOR CREATING ELEMENT
    //1) STORING THE REF PARENT CONTAINER
    //2) CREATE ELEMENT(S) AND STORE REF
    //3) ADD CONTENT
    //4) APPEND INSIDE PARENT

    const ulWrapper = document.createElement("ul");
    apiData.forEach(function(post){
        const liEle = document.createElement("li");
        liEle.textContent = `${post.title}`;
        ulWrapper.append();
    });
    document.body.append(ulWrapper);
}

