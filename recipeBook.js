chocCake = {
	name: "chocolate cake",
	ingredients: "2 cups white sugar\n1 3/4 cups all-purpose flour\n3/4 cup unsweetened cocoa powder\n1" +
	"1/2 teaspoons baking powder\n1 1/2 teaspoons baking soda\n1 teaspoon salt\n2 eggs\n1 cup milk\n" +
	"1/2 cup vegetable oil\n2 teaspoons vanilla extract\n1 cup boiling water",
	steps: "1: Preheat oven to 350 degrees F (175 degrees C). Grease and flour two nine inch round pans./n" + "/n"
	"2: In a large bowl, stir together the sugar, flour, cocoa, baking powder, baking soda and salt. Add the eggs, " +
	"milk, oil and vanilla, mix for 2 minutes on medium speed of mixer. Stir in the boiling water last. Batter will " +
	"be thin. Pour evenly into the prepared pans./n" + "/n"
	"3: Bake 30 to 35 minutes in the preheated oven, until the cake tests done with a toothpick. Cool in the pans " + 
	"for 10 minutes, then remove to a wire rack to cool completely."
};

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
