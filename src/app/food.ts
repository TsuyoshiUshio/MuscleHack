export enum FoodType {
    breakfast = 0,
    lunch = 1,
    dinner = 2,
    snack = 3
}

export class Food {
    name: string;
    date: Date;
    calorie: number;
    protein: number;
    carb: number;
    fat: number;
    meal_kind: FoodType;
}