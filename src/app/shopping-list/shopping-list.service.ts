import {Ingredient} from  '../shared/ingredients.model'

export class ShoppingListService {

	private ingredients:Ingredient[] =  [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 10)
	];


	getIngredients(): Ingredient[] {
		return this.ingredients;
	}

	addIngredient(ingredient: Ingredient) {
	this.ingredients.push(ingredient);
	}


	
}