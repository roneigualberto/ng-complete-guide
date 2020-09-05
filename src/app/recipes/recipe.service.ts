import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {


	recipeSelected = new EventEmitter<Recipe>();

	constructor(private shoppingListService: ShoppingListService) {

	}


	private recipes: Recipe[] = [
		new Recipe('A Test Recipe', 
			'This is simply tst', 'https://p0.pikist.com/photos/56/134/cooking-food-dish-nutrition-meat-dishes-kitchen-plate-delicious-recipe.jpg',
			[
				new Ingredient('Meat', 1),
				new Ingredient('French Fries', 20)

			]),
		new Recipe('A Test Recipe 2', 'This is simply tst', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg'
		,[
			new Ingredient('Buns',1),
			new Ingredient('Meat',1)
		])
	];

	getRecipes(): Recipe[] {
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredients(ingredients);
	}

	

}