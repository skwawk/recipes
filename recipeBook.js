chocCake = {
	name: "chocolate cake",
	ingredients: "2 cups white sugar\n1 3/4 cups all-purpose flour\n3/4 cup unsweetened cocoa powder\n1" +
	"1/2 teaspoons baking powder\n1 1/2 teaspoons baking soda\n1 teaspoon salt\n2 eggs\n1 cup milk\n" +
	"1/2 cup vegetable oil\n2 teaspoons vanilla extract\n1 cup boiling water"
}

var recipes = [ ];
var bookLength = recipes.length;

function printRecipe(recipe) {
    console.log(recipe.name);
    console.log()
    console.log(recipe.ingredients);
    console.log()
    console.log(recipe.steps);
}

function list() {
	for (var i = 0; i < bookLength; i++) {
		printRecipe(recipes[i]);
	}
}

function search (name) {
	name = name.toLowerCase();
    for (var i = 0; i < bookLength; i++) {
        if (recipes[i].name === name) {
            printRecipe(recipes[i]);
        }
    }
}

function add (name, ingredients, steps) {
    recipes[recipes.length] = {
        name: name,
        ingredients: ingredients,
        steps: steps
    };
}
