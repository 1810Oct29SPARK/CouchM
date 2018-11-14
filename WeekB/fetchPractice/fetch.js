let state = {
    thing: ''
};

const apiUrl = 'https://api.adviceslip.com/advice';

let getFetch = function() {
    fetch(apiUrl)
    //define behavior for when the response returns
    .then(response => 
        //return unwrapped promise object for the next chaining operation
        response.json()
    )
        //utilize unwrapped promise a javascript object
    .then(result => {
        console.log(result);
        //state.joke = data.joke;
        //updateContent();
    })
        //what if there's a problem?
/*    .catch( (error) => {
        alert('oh no :(');
        console.log(error);
    });     */
}
/*
let updateContent = function() {
    console.log(state);
    //select joke 
    const jokeElement = document.getElementById('advice-field');
    jokeElement.innerText = state.joke;
}
*/
//document.getElementById('new-joke-button').addEventListener('click',getJokeWithFetch);