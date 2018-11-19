function MeasureCup() {
    document.getElementById("cup").classList.toggle("show");
}

function MeasureSpoon() {
    document.getElementById("spoon").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.measuringTool')) {
        var dropdowns = document.getElementsByClassName("measurements");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function UseOven() {
    document.getElementById("tempAndTime").classList.toggle("show");
}

//Step 1

function Preheat() {
    document.getElementById("step1").classList.toggle("complete");
    console.log("You preheat the oven to 350F")
    directions++;
    // console.log("direction " + directions + " complete");
}

let cup = 0;

let tsp = 0;

let sugar = 0;

let flour = 0;

let cocoa = 0;

let bakingPowder = 0;

let bakingSoda = 0;

let salt = 0;

let eggs = 0;

let milk = 0;

let oil = 0;

let vanilla = 0;

let mixingBowl = 0;

let pot = 0;

let sink = 0;

let stove = 0;

let water = 0;

let mix = 0;

let cakePans = 0;

let batter = 0;

let ingredients = 0;

let directions = 0;

function Cake() {

}

function OneCup() {
    cup++;
    console.log(cup + " cup(s)");
}

function ThreeQuartersCup() {
    cup+=.75;
    console.log(cup + " cup(s)");
}

function HalfCup() {
    cup+=.5;
    console.log(cup + " cup(s)");
}

function OneTsp() {
    tsp++;
    console.log(tsp + " tsp(s)");
}

function HalfTsp() {
    tsp+=.5;
    console.log(tsp + " tsp(s)")
}

function MixingBowl() {
    mixingBowl++;
    if (mix === 1) {
        console.log("You mix the ingredients together");
    } else {
        console.log("You add the measurement to the mixing bowl");
    }

//Step 2

    if (cup === 2 && sugar === 2 && mixingBowl === 2) {
        document.getElementById("addSugar").classList.toggle("complete");
        cup = 0;
        sugar = 0;
        mixingBowl = 0;
        ingredients++;
        console.log(ingredients + " ingredient(s) added to the mixing bowl");
        //remove sugar
        var parent = document.getElementById("tableTop2");
        var child = document.getElementById("sugar");
        parent.removeChild(child);
    }
    if (cup === 1.75 && flour === 2 && mixingBowl === 2) {
        document.getElementById("addFlour").classList.toggle("complete");
        cup = 0;
        flour = 0;
        mixingBowl = 0;
        ingredients++;
        console.log(ingredients + " ingredient(s) added to the mixing bowl");
        //remove flour
        var parent = document.getElementById("tableTop2");
        var child = document.getElementById("flour");
        parent.removeChild(child);
    }
    if (cup === .75 && cocoa === 1 && mixingBowl === 1) {
        document.getElementById("addCocoa").classList.toggle("complete");
        cup = 0;
        cocoa = 0;
        mixingBowl = 0;
        ingredients++;
        console.log(ingredients + " ingredient(s) added to the mixing bowl");
        //remove cocoa
        var parent = document.getElementById("tableTop2");
        var child = document.getElementById("cocoaPowder");
        parent.removeChild(child);
    }
    if (tsp === 1.5 && bakingPowder === 2 && mixingBowl === 2) {
        document.getElementById("addPowder").classList.toggle("complete");
        tsp = 0;
        bakingPowder = 0;
        mixingBowl = 0;
        ingredients++;
        console.log(ingredients + " ingredient(s) added to the mixing bowl");
        //remove baking powder
        var parent = document.getElementById("tableTop2");
        var child = document.getElementById("bakingPowder");
        parent.removeChild(child);
    }
    if (tsp === 1.5 && bakingSoda === 2 && mixingBowl === 2) {
        document.getElementById("addSoda").classList.toggle("complete");
        tsp = 0;
        bakingSoda = 0;
        mixingBowl = 0;
        ingredients++;
        console.log(ingredients + " ingredient(s) added to the mixing bowl");
        //remove baking soda
        var parent = document.getElementById("tableTop2");
        var child = document.getElementById("bakingSoda");
        parent.removeChild(child);
    }
    if (tsp === 1 && salt === 1 && mixingBowl === 1) {
        document.getElementById("addSalt").classList.toggle("complete");
        tsp = 0;
        mixingBowl = 0;
        salt = 0;
        ingredients++;
        console.log(ingredients + " ingredient(s) added to the mixing bowl");
        //remove salt
        var parent = document.getElementById("tableTop2");
        var child = document.getElementById("salt");
        parent.removeChild(child);
    }
    if (ingredients === 6 && directions == 1){
        document.getElementById("step2").classList.toggle("complete");
        directions++;
        // console.log("direction " + directions + " complete");
    }

//Step 3
    
    if (mix === 1 && mixingBowl === 1 && directions == 2) {
        document.getElementById("step3").classList.toggle("complete");
        mixingBowl = 0;
        mix = 0;
        directions++;
        // console.log("direction " + directions + " complete");
    }

//Step 4

    if (eggs === 2 && mixingBowl === 2) {
        document.getElementById("addEggs").classList.toggle("complete");
        mixingBowl = 0;
        eggs = 0;
        ingredients++;
        //remove eggs
        var parent = document.getElementById("tableTop2");
        var child = document.getElementById("eggs");
        parent.removeChild(child);
    }
    if (cup === 1 && milk === 1 && mixingBowl === 1) {
        document.getElementById("addMilk").classList.toggle("complete");
        cup = 0;
        milk = 0;
        mixingBowl = 0;
        ingredients++;
        //remove milk
        var parent = document.getElementById("tableTop2");
        var child = document.getElementById("milk");
        parent.removeChild(child);
    }
    if (cup === .5 && oil === 1 && mixingBowl === 1) {
        document.getElementById("addOil").classList.toggle("complete");
        cup = 0;
        oil = 0;
        mixingBowl = 0;
        ingredients++;
        //remove oil
        var parent = document.getElementById("tableTop2");
        var child = document.getElementById("cookingOil");
        parent.removeChild(child);
    }
    if (tsp === 2 && vanilla === 2 && mixingBowl >= 2) {
        document.getElementById("addVanilla").classList.toggle("complete");
        tsp = 0;
        vanilla = 0;
        mixingBowl = 0;
        ingredients++;
        //remove vanilla
        var parent = document.getElementById("tableTop2");
        var child = document.getElementById("vanillaExtract");
        parent.removeChild(child);
    }
    if (ingredients === 10 && directions === 3) {
        document.getElementById("step4").classList.toggle("complete");
        directions++;
        // console.log("direction " + directions + " complete");
    }

//Step 5

    if (mix === 1 && mixingBowl === 1 && directions == 4) {
        document.getElementById("step5").classList.toggle("complete");
        mixingBowl = 0;
        mix = 0;
        directions++;
        // console.log("direction " + directions + " complete");
    }

//Step 6

    if (water === 1 && mixingBowl === 1 && cup === 1 && directions == 5) {
        document.getElementById("step6").classList.toggle("complete");
        document.getElementById("addBoilingWater").classList.toggle("complete");
        mixingBowl = 0;
        directions++;
        // console.log("direction " + directions + " complete");
    }

//Step 7

    if (mix === 1 && mixingBowl === 1 && directions == 6) {
        document.getElementById("step7").classList.toggle("complete");
        mixingBowl = 0;
        mix = 0;
        batter++;
        directions++;
        // console.log("direction " + directions + " complete");
    }
}

//Step 8

function CakePans() {
    if (batter === 1 && directions === 7) {
        document.getElementById("step8").classList.toggle("complete");
        cakePans++;
        console.log("Cake is ready to bake");
        directions++;
        // console.log("direction " + directions + " complete");
    }
}

// Step 9

function Bake() {
    if (cakePans === 1 && directions === 8) {
        document.getElementById("step9").classList.toggle("complete");
        console.log("The cake is baking for 30 minutes");
        console.log("Congratulations! Now you're ready to try it at home");
    }
}

function Whisk() {
    mix++;
    console.log("You grab the whisk")
}

function Pot() {
    pot++;
    if (stove === 1 && cup === 1){
        console.log("of boiling water");
    } else {
    console.log("You're holding a pot")
    }
}

function BakingPowder() {
    bakingPowder++;
    console.log(" of baking powder")
}

function BakingSoda() {
    bakingSoda++;
    console.log(" of baking soda")
}

function Cocoa() {
    cocoa++;
    console.log(" of cocoa");
}

function Oil() {
    oil++;
    console.log(" of cooking oil");
}

function Egg() {
    eggs++;
    console.log(eggs + " egg(s)");
}

function Flour() {
    flour++;
    console.log(" of flour");
}

function Milk() {
    milk++;
    console.log(" of milk");
}

function Salt() {
    salt++;
    console.log(" of salt");
}

function Vanilla() {
    vanilla++;
    console.log(" of vanilla");
}

function Sugar() {
    sugar++;
    console.log(" of sugar");
}

function Sink() {
    sink++;
    console.log("You fill the pot with water");
}

function Stove() {
    stove++;
    console.log("The water is boiling on stove");
    if (pot === 1 && sink === 1 && stove === 1) {
        water++;
        console.log("The pot is full of boiling water");
    }
}

let submit = document.querySelector('#button');

submit.addEventListener('click', function() {
    let input = document.querySelector('#input');
    // console.log(input);
    let searchInput = input.value;

    fetch("http://recipepuppyproxy.herokuapp.com/api/?q=" + searchInput)
        .then(function(response) {
        if (response.status !== 200) {
            console.log("Broken: " + response.status);
            return;
        }
        response.json().then(function(data) {
            let html = "";
            let recipes = data.results;
            // console.log(recipes);
            let results = document.querySelector('#results')
            for (let i = 0; i < recipes.length; i++) {
                let href = recipes[i].href;
                let title = recipes[i].title;
                let thumbnail = recipes[i].thumbnail;
                if (thumbnail === ""){
                    thumbnail = 'https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg'
                }
                html += `<div class="container">
                    <a href="${href}" target="_blank">Recipe</a>
                    <p>${title}</p>
                    <img src="${thumbnail}">
                    </div>`
                results.innerHTML = html;
            };
        });
    });
});

(function (logger) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }

            output += "</span>&nbsp;";
        }

        logger.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };
})(document.getElementById("logger"));