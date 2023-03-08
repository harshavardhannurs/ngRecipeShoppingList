import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  recipeClicked:boolean = false;
  shoppingListClicked :boolean = false;
  @Output() eventOpenNavMenu = new EventEmitter<{menu:string, clicked:boolean}>();

  openRecipe(){
    this.recipeClicked = true;
    this.eventOpenNavMenu.emit({menu:'recipe', clicked:this.recipeClicked})
  }

  openShoppingList(){
    this.shoppingListClicked = true;
    this.eventOpenNavMenu.emit({menu:'shoppingList', clicked:this.shoppingListClicked})
  }

}
