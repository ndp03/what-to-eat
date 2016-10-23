import { Component, OnInit } from '@angular/core';

import { MenuSuggestionService } from './menu-suggestion.services';
import { DishComponent } from './dish.component';

@Component({
    moduleId: module.id,
    templateUrl: 'menu-suggestion.component.html',
    styleUrls: ['menu-suggestion.component.css']
})
export class MenuSuggestionComponent implements OnInit {

    dishes: any[];
    
    constructor(private _dishesService: MenuSuggestionService) { }

    ngOnInit() {
      
        this._dishesService.getSuggestion_Observables()
            .subscribe(x => {
                this.dishes = x
            });
    }

    showMoreDishes(e: any) {
        console.log(e);
        e.preventDefault();
        window.location.href = "/menu";
    } 

    abc() {
        alert('click');
    }

}
