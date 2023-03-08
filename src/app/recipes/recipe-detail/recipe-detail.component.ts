import { Component, OnInit } from '@angular/core';
import { RecipesListService } from 'src/app/services/recipesList.service';
import { Recipe } from 'src/app/models/recipe.model';
import { ShoppingListService } from 'src/app/services/shoppingList.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  recipe:Recipe;

  clicked:boolean = false;

  constructor(private rlService:RecipesListService, private sLService:ShoppingListService){}

  ngOnInit(){
    this.rlService.eventShowDetails.subscribe(
      (recipe:Recipe)=>{
        this.recipe = recipe;
      }
    )
  }

  addIngredients(){
    this.rlService.addToShoppingList(this.recipe.ingredients);
  }

}
