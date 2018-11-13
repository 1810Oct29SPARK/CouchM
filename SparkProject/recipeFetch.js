let state = {
    thing: ''
}
// http:www.recipepuppy.com/api/

let recipeURL = "http:www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 ";
let query= "";

let recipeFetch = function() {
    fetch("http:www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 ", {
        // method: 'GET', 
        mode: 'no-cors', 
        /*headers: {
            "Accept:": "application/json",
            'Access-Control-Allow-Origin':'*'
        }*/
    }).then(req => console.log(req));
    // .then(result => console.log(result))
}

recipeFetch();