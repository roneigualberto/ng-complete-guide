import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {


	recipeSelected = new EventEmitter<Recipe>();


	private recipes: Recipe[] = [
		new Recipe('A Test Recipe', 'This is simply tst', 'https://p0.pikist.com/photos/56/134/cooking-food-dish-nutrition-meat-dishes-kitchen-plate-delicious-recipe.jpg'),
		new Recipe('A Test Recipe 2', 'This is simply tst', 'https://www.nps.gov/subjects/camping/images/recipe_1.jpg')
	];

	getRecipes(): Recipe[] {
		return this.recipes.slice();
	}

	

}