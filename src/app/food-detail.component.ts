import { Component } from '@angular/core';
import { Food, FoodType } from './food';
import { Location } from '@angular/common';
import { DateAdapter, NativeDateAdapter } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './food-detail.component.html'
})
export class FoodDetailComponent {
  food: Food;
 // constructor(dateAdapter: DateAdapter<NativeDateAdapter>) {
 //   dateAdapter.setLocale('ja-JP');
 constructor() {
    this.food = new Food();
    this.food.name = "Taro";
    this.food.date = new Date();
    this.food.meal_type = FoodType.breakfast;
    
  }
  meal_types = [
    { value: 0, viewValue :'BreakFast'},
    { value: 1, viewValue :'Lunch'},
    { value: 2, viewValue :'Dinner'},
    { value: 3, viewValue :'Snack'},
  ]
  title = 'Muscle Hack';
}
