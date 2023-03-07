import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesListService } from 'src/app/services/recipesList.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes:Recipe[];

  constructor(private rLService:RecipesListService){}

  ngOnInit(){
    this.recipes = this.rLService.getRecipesList();
  }

}
