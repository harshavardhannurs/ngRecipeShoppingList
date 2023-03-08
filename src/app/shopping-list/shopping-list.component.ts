import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from '../services/shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  shoppingList:Ingredient[];

  constructor(private sLService:ShoppingListService){}

  ngOnInit(){
    this.shoppingList = this.sLService.getShoppingList();
    this.sLService.listChanged.subscribe(
      ()=>{
        this.shoppingList = this.sLService.getShoppingList()
      }
    )
  }

}
