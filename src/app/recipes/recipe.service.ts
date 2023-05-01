import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Recipe 001",
      "This is a test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [new Ingredient("Apple", 5), new Ingredient("Orange", 10)]
    ),
    new Recipe(
      "Recipe 002",
      "This is simply another test",
      "https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg",
      [new Ingredient("Onion", 1), new Ingredient("Bread", 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
