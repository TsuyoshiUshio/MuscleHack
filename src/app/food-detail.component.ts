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
    this.meal_types = Object.keys(FoodType).filter(v => Number(v) || v == '0').map(k => { return { value : Number(k), viewValue: FoodType[Number(k)] }});    
  }
  meal_types = [];
  title = 'Muscle Hack';
}
