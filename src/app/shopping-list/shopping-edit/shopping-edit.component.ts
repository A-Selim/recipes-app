import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent {
  @ViewChild("nameInput") ingredientName: ElementRef;
  @ViewChild("amountInput") ingredientAmount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>()

  addIngredient() {
      const name = this.ingredientName.nativeElement.value
      const amount = this.ingredientAmount.nativeElement.value

    this.ingredientAdded.emit(new Ingredient(name, amount))
  }
}
