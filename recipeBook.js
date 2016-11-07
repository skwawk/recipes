chocCake = {
	name: "chocolate cake",
	ingredients: "2 cups white sugar<br />1 3/4 cups all-purpose flour<br />3/4 cup unsweetened cocoa powder<br />" +
	"1 1/2 teaspoons baking powder<br />1 1/2 teaspoons baking soda<br />1 teaspoon salt<br />2 eggs<br />1 cup milk" +
	"<br />1/2 cup vegetable oil<br />2 teaspoons vanilla extract<br />1 cup boiling water",
	steps: "1: Preheat oven to 350 degrees F (175 degrees C). Grease and flour two nine inch round pans.<br /><br />" +
	"2: In a large bowl, stir together the sugar, flour, cocoa, baking powder, baking soda and salt. Add the eggs, " +
	"milk, oil and vanilla, mix for 2 minutes on medium speed of mixer. Stir in the boiling water last. Batter will " +
	"be thin. Pour evenly into the prepared pans.<br /><br />" +
	"3: Bake 30 to 35 minutes in the preheated oven, until the cake tests done with a toothpick. Cool in the pans " + 
	"for 10 minutes, then remove to a wire rack to cool completely.",
};
chocFrost = {
	name: "chocolate frosting",
	ingredients: "2 3/4 cups confectioners' sugar<br />6 tablespoons unsweetened cocoa powder<br />" +
	"6 tablespoons butter<br />5 tablespoons evaporated milk<br />1 teaspoon vanilla extract",
	steps: "1: In a medium bowl, sift together the confectioners' sugar and cocoa, and set aside.<br /><br />" +
	"2: In a large bowl, cream butter until smooth, then gradually beat in sugar mixture alternately with evaporated " +
	"milk. Blend in vanilla. Beat until light and fluffy. If necessary, adjust consistency with more milk or sugar.",
	full: this.ingredients + this.steps
};
chocChip = {
	name: "chocolate chip cookies",
	ingredients: "2 cups all-purpose flour<br />1/2 teaspoon baking soda<br />1/2 teaspoon salt<br />" + 
	"3/4 cup unsalted butter, melted<br />1 cup packed brown sugar<br />1/2 cup white sugar<br />" + 
	"1 tablespoon vanilla extract<br />1 egg<br />1 egg yolk<br />2 cups semisweet chocolate chips",
	steps: "1: Preheat the oven to 325 degrees F (165 degrees C). Grease cookie sheets or line with parchment paper.<br /><br />" +
	"2: Sift together the flour, baking soda and salt; set aside.<br /><br />" +
	"3: In a medium bowl, cream together the melted butter, brown sugar and white sugar until well blended. Beat in the vanilla," + 
	" egg, and egg yolk until light and creamy. Mix in the sifted ingredients until just blended. Stir in the chocolate chips by " +
	"hand using a wooden spoon. Drop cookie dough 1/4 cup at a time onto the prepared cookie sheets. Cookies should be about 3 " +
	"inches apart.<br /><br />" +
	"4: Bake for 15 to 17 minutes in the preheated oven, or until the edges are lightly toasted. Cool on baking sheets for a few" +
	" minutes before transferring to wire racks to cool completely.",
	full: this.ingredients + this.steps
};

var recipes = [chocCake, chocFrost, chocChip];
var bookLength = recipes.length;

function printRecipe(recipe) {
    console.log(recipe.name);
    console.log();
    console.log(recipe.ingredients);
    console.log();
    console.log(recipe.steps);
};

function updateChocCake() {
	var recipeDiv = document.getElementById("chocCake");
	recipeDiv.innerHTML = "<h2>Chocolate Cake</h2>" + chocCake.ingredients + "<br /><br />" + chocCake.steps + "<br />";
};

function updateChocFrost() {
	var recipeDiv = document.getElementById("chocFrost");
	recipeDiv.innerHTML = "<h2>Chocolate Frosting</h2>" + chocFrost.ingredients + "<br /><br />" + chocFrost.steps + 
		"<br />";
};

function updateChocChip() {
	var recipeDiv = document.getElementById("chocChip");
	recipeDiv.innerHTML = "<h2>Chocolate Chip Cookies</h2>" + chocChip.ingredients + "<br /><br />" + chocChip.steps + 
		"<br />";
};

function list() {
	for (var i = 0; i < bookLength; i++) {
		printRecipe(recipes[i]);
	};
};

function search (name) {
	name = name.toLowerCase();
    for (var i = 0; i < bookLength; i++) {
        if (recipes[i].name === name) {
            printRecipe(recipes[i]);
        };
    };
};

function add (name, ingredients, steps) {
    recipes[recipes.length] = {
        name: name,
        ingredients: ingredients,
        steps: steps
    };
};

function hideChocCake () {
	var recipeDiv = document.getElementById("chocCake");
	recipeDiv.innerHTML = "<br />"
}

function hideChocFrost () {
	var recipeDiv = document.getElementById("chocFrost");
	recipeDiv.innerHTML = "<br />"
}

function hideChocChip () {
	var recipeDiv = document.getElementById("chocChip");
	recipeDiv.innerHTML = "<br />"
}

list();
