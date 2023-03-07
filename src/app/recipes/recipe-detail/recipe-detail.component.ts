import { Component, OnInit } from '@angular/core';
import { RecipesListService } from 'src/app/services/recipesList.service';
import { Recipe } from 'src/app/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

  recipe:Recipe;

  clicked:boolean = false;

  constructor(private rlService:RecipesListService){}

  ngOnInit(){
    this.rlService.eventShowDetails.subscribe(
      (recipe:Recipe)=>{
        this.recipe = recipe;
      }
    )
  }
}
