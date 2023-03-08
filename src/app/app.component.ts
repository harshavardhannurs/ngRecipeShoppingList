import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipeClicked:boolean = false;
  shoppingListClicked:boolean = false;

  onOpenNav(event:{menu:string, clicked:boolean}){
    if(event.menu === 'recipe'){
      this.recipeClicked = event.clicked;
      this.shoppingListClicked = false;
    }else if(event.menu === 'shoppingList'){
      this.shoppingListClicked = event.clicked;
      this.recipeClicked = false;
    }
  }
}
