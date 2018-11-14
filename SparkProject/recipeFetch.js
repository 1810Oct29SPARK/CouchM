let state = {
    thing: ''
}
// http:www.recipepuppy.com/api/

let recipeURL = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3';
let query= "";

let recipeFetch = function() {
    fetch(recipeURL, {
        method: 'GET', 
        mode: 'cors', 
        headers: {
            "Accept:": "application/json",
            'Access-Control-Allow-Origin':'*'
        }
    }).then(req => console.log(req));
    // .then(result => console.log(result))
}

recipeFetch();

//once I get data from API
//.then((data) => )

//updateRecipe();
//create parapgraph element to show fetched recipe

function updateRecipe(){
    let newPara = document.createElement('p')
    //newPara.innerText = information recieved from API to put into paragraph on webpage;
    // add new p element as a child of results-container article
    //document.getElementById("results-container").appendChild(newPara);
}













//let url = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3'
//AJAX
function getRecipe(url, func){
    //first: we need to obtain XHR
    var xhr = new XMLHttpRequest();
    //second: define onreadystatechange
    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            func(this);
        }
    }
    //third: prepare request
    xhr.open("GET", url, true);
    //finally: send
    xhr.send();
}

function newRecipe(xhr){
    //JSON.parse will convert a JSON-formatted string to a javascript object
    var res = JSON.parse(xhr.responseText)
    console.log(res);
    //can use this object however we want
}

