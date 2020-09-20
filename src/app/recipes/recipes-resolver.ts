import { RecipeService } from './recipe.service';
import { DataStoreService } from './../shared/data-storage.service';
import { Recipe } from './recipe.model';
import {
  ActivatedRouteSnapshot,
  Data,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStoreServicee: DataStoreService,
    private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStoreServicee.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
