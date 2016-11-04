function Recipe(id, name, ingredients, steps,) {
	this.id = id;
	this.name = name;
	this.title = "<h2>" + name + "</h2>";
	this.ingredients = ingredients;
	this.steps = steps;
	this.printRecipe = function () {
    		console.log(this.name);
    		console.log();
    		console.log(this.ingredients);
    		console.log();
    		console.log(this.steps);
	};
	this.update = function () {
		recipeDiv = function.getElementById(name);
		recipeDiv.innerHTML = recipeDiv.innerHTML = this.title + this.ingredients + "<br /><br />" + this.steps;
	};
		
};

chocCake = {
	name: "Chocolate cake",
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
