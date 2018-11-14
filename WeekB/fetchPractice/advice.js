/*getFetch = function() {
    fetch('https://api.adviceslip.com/advice')
    .then(response =>
        response.json()
    )
    .then(result => {
        console.log(result);
    })
}*/

getFetch = function(number) {
    for(i = number ; i > 0 ; i--) {
    fetch('https://api.adviceslip.com/advice')
    .then(response =>
        response.json())
    .then(result => {
        console.log(result);
        let adviceTest = result.slip.advice; 
        console.log(adviceTest);
        let AdviceElement = document.createElement("li");
        let AdviceText = document.createTextNode(adviceTest);       
        AdviceElement.appendChild(AdviceText);
        //document.getElementById("ApiList").appendChild(AdviceElement);
    });
    }
}