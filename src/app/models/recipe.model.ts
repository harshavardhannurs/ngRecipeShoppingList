import { Ingredient } from "./ingredient.model";

export class Recipe{
  constructor(public recipeName:string, public recipeDesc:string, public imagePath:string, public ingredients:Ingredient[]){}
}