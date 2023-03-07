import { Ingredient } from "../models/ingredient.model";
import { Recipe } from "../models/recipe.model";
import {EventEmitter} from '@angular/core'

export class RecipesListService{

  eventShowDetails = new EventEmitter<Recipe>();

  private recipesList:Recipe[] = [
    new Recipe('Pizza', "World's most popular food", 'https://curlytales.com/wp-content/uploads/2019/09/feature-1-e1569481581276.jpg', [new Ingredient('L', 10), new Ingredient('M', 20), new Ingredient('N', 30)]),
    new Recipe('Chicken Biryani', 'The epitome of Indian Cuisine', 'https://www.forbesindia.com/media/images/2021/Dec/img_175063_whyisbiryanigettingbrandedalloverthecountry.jpg', [new Ingredient('P', 10), new Ingredient('Q', 20), new Ingredient('R', 30)])
  ]

  getRecipesList(){
    return this.recipesList.slice();
  }

}

