import { Component, Input, OnInit } from '@angular/core';
import { MealAdminService } from '../shared/mealAdminService';

@Component({
    moduleId: module.id,
    selector: 'edit-meal', 
    templateUrl: './edit-meal.component.html',
    styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent implements OnInit {

    meal : any = {
        name : '',
        ingredients : []
    }
    
    newIng : string;

    constructor(private _mealAdminService : MealAdminService) {

    }

    ngOnInit() {  }

    addNewIngredient() {
        this.meal.ingredients.push(this.newIng);
        this.newIng = '';
    }

    handleKeypress (e) {
        if (e.code === "Enter") {
            this.addNewIngredient();
        }
    }

    removeIngredient(x) {
        this.meal.ingredients.splice(x, 1);
    }

    save(e) {
        this._mealAdminService.saveMeal(this.meal);
    }
}