import { Component, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('amount') amount:ElementRef;

  constructor(private sLService:ShoppingListService){}

  addItem(ip:HTMLInputElement){
    this.sLService.addToShoppingList(ip.value, this.amount.nativeElement.value);
    this.sLService.listChanged.emit();
  }
}
