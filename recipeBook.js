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
