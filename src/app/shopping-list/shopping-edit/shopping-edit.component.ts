import { Component, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent {
  @ViewChild("nameInput") ingredientName: ElementRef;
  @ViewChild("amountInput") ingredientAmount: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredient() {
    const name = this.ingredientName.nativeElement.value;
    const amount = this.ingredientAmount.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);

    this.shoppingListService.addIngredient(newIngredient);
  }
}
