require('utils');
import {Injectable} from '@angular/core';
import {Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

const URL_DISHES = "app/dishes.json";
const URL_DISHES_SUGGESTION_SERVICE = "api/MealDishSuggestion";

declare var localStorage: any;

@Injectable()
export class MealAdminService {

    constructor(private _http: Http) { }

    saveMeal(meal) {
        localStorage.setObject('WTE.Meals', meal);
    }

}