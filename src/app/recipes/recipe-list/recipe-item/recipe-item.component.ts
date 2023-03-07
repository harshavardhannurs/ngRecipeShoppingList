import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesListService } from 'src/app/services/recipesList.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe:Recipe;

  constructor(private rLService:RecipesListService){}

  showDetails(){
    this.rLService.eventShowDetails.emit(this.recipe);
  }

}
