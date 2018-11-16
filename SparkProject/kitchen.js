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
    console.log("you've preheated the oven to 350F")
    directions++;
    console.log("direction " + directions + " complete");
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
    console.log(cup + " cup");
}

function ThreeQuartersCup() {
    cup+=.75;
    console.log(cup + " cup");
}

function HalfCup() {
    cup+=.5;
    console.log(cup + " cup");
}

function OneTsp() {
    tsp++;
    console.log(tsp + " tsp");
}

function HalfTsp() {
    tsp+=.5;
    console.log(tsp + " tsp")
}

function MixingBowl() {
    mixingBowl++;
    console.log(mixingBowl + " item(s) added to mixing bowl")

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
        console.log("direction " + directions + " complete");
    }

//Step 3
    
    if (mix === 1 && mixingBowl === 1 && directions == 2) {
        document.getElementById("step3").classList.toggle("complete");
        mixingBowl = 0;
        mix = 0;
        directions++;
        console.log("direction " + directions + " complete");
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
        console.log("direction " + directions + " complete");
    }

//Step 5

    if (mix === 1 && mixingBowl === 1 && directions == 4) {
        document.getElementById("step5").classList.toggle("complete");
        mixingBowl = 0;
        mix = 0;
        directions++;
        console.log("direction " + directions + " complete");
    }

//Step 6

    if (water === 1 && mixingBowl === 1 && directions == 5) {
        document.getElementById("step6").classList.toggle("complete");
        document.getElementById("addBoilingWater").classList.toggle("complete");
        mixingBowl = 0;
        directions++;
        console.log("direction " + directions + " complete");
    }

//Step 7

    if (mix === 1 && mixingBowl === 1 && directions == 6) {
        document.getElementById("step7").classList.toggle("complete");
        mixingBowl = 0;
        mix = 0;
        batter++;
        directions++;
        console.log("direction " + directions + " complete");
    }
}

//Step 8

function CakePans() {
    if (batter === 1 && directions === 7) {
        document.getElementById("step8").classList.toggle("complete");
        cakePans++;
        console.log("cake is ready to bake");
        directions++;
        console.log("direction " + directions + " complete");
    }
}

// Step 9

function Bake() {
    if (cakePans === 1 && directions === 8) {
        document.getElementById("step9").classList.toggle("complete");
        console.log("cake is baking for 30 minutes")
    }
}

function Whisk() {
    mix++;
    console.log("grabbed whisk")
}

function Pot() {
    pot++;
    console.log("holding pot")
}

function BakingPowder() {
    bakingPowder++;
    console.log(bakingPowder + " baking powder")
}

function BakingSoda() {
    bakingSoda++;
    console.log(bakingSoda + " baking soda")
}

function Cocoa() {
    cocoa++;
    console.log(cocoa + " cocoa");
}

function Oil() {
    oil++;
    console.log(oil + " oil");
}

function Egg() {
    eggs++;
    console.log(eggs + " eggs");
}

function Flour() {
    flour++;
    console.log(flour + " flour");
}

function Milk() {
    milk++;
    console.log(milk + " milk");
}

function Salt() {
    salt++;
    console.log(salt + " salt");
}

function Vanilla() {
    vanilla++;
    console.log(vanilla + " vanilla");
}

function Sugar() {
    sugar++;
    console.log(sugar + " sugar");
}

function Sink() {
    sink++;
    console.log("filling pot with water");
}

function Stove() {
    stove++;
    console.log("boiling water on stove");
    if (pot === 1 && sink === 1 && stove === 1) {
        water++;
        console.log("pot is full of boiling water");
    }
}