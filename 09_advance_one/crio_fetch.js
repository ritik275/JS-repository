const postAPIPromise = fetch("https://jsonplaceholder.typicode.com/posts")

postAPIPromise.then(function(rawAPIDATA){
    //GET JSON FORMAT DATA WHICH IS IN ANOTHER PROMISE
    //rawAPIData --> Promise of JSON data
    //rawAPIData --> Raw Format Data --> JSON --> Print to UI
    // rawAPIDATA.json().then(function(finalAPIResponse){
    //     console.log(finalAPIResponse);
    // })

    console.log(rawAPIDATA);
})