import { Component } from '@angular/core';
import { Food } from './food';
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
    
  }

  title = 'Muscle Hack';
}
