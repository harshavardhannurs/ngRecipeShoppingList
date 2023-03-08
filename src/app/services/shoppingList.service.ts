import { EventEmitter } from "@angular/core"
import { Ingredient } from "../models/ingredient.model"


export class ShoppingListService{

  listChanged = new EventEmitter();
  

  private shoppingList = [
    new Ingredient('Apple', 10),
    new Ingredient('Orange', 20)
  ]

  getShoppingList(){
    return this.shoppingList.slice()
  }

  addToShoppingList(ingredientName:string, amount:number){
    let newIngredient = new Ingredient(ingredientName, amount)
    this.shoppingList.push(newIngredient);
    console.log("ShoppingList",this.shoppingList)
  }

  addIngs(ingredients:Ingredient[]){
    this.shoppingList.push(...ingredients);
  }

}