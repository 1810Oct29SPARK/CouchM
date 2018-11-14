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

/*
Need Tools, Ingredients, Appliances, and Functions
Tools:
    Measuring cups:
        1 cup
        1/2 cup
        1/4 cup
    Measuring spoons:
        1 teaspoon
        1/2 teaspoon
    2 Cake pans
    Mixing bowl
    Whisk
    Pot

Ingredients:
    White sugar
    Flour
    Cocoa powder
    Baking powder
    Baking soda
    Salt
    Eggs
    Milk
    Veggie oil
    Vanilla extract
    Boiling water

Appliances:
    Oven
    Stove
    Sink

Functions:
    Measure
    Mix
    Pour
    Boil
    Bake
*/