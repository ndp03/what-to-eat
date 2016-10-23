import {Injectable} from '@angular/core';
import {Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

const URL_DISHES = "app/dishes.json";
const URL_DISHES_SUGGESTION_SERVICE = "api/MealDishSuggestion";

@Injectable()
export class MenuSuggestionService {

    constructor(private _http: Http) { }

    getSuggestion_Observables() {
        let allDishes = [];

        // return this._http.get(URL_DISHES)
        //     .flatMap((response: Response) => {
        //         allDishes = response.json();
        //         let m = allDishes.length,
        //             n = 3,
        //             serviceUrl = `${URL_DISHES_SUGGESTION_SERVICE}?max=${m}&numberOfDishes=${n}`;

        //         return this._http.get(serviceUrl);
        //     })
        //     .map(x => this._getDishes(allDishes, x));
        
        return this._http.get(URL_DISHES)
            .map((response: Response) => {
                allDishes = response.json();
            })
            .map(() =>  {
                var randomIndices = this._get3RandomIndices(allDishes.length - 1);
                var x = this._getDishes(allDishes, randomIndices);
                return x;
            });
    }

    getSuggestion_NestedPromises() {

        return this._http.get(URL_DISHES)
            .map((response: Response) => response.json())
            .toPromise()
            .then(allDishes => {
                let m = allDishes.length,
                    n = 3;

                var serviceUrl = `${URL_DISHES_SUGGESTION_SERVICE}?max=${m}&numberOfDishes=${n}`;

                return this._http.get(serviceUrl)
                    .map((res2: Response) => res2.json())
                    .toPromise()
                    .then(dishIndices => {
                        return this._getDishes(allDishes, dishIndices);
                    })
                    .catch((err2: any) => {
                        console.log(err2);   // handle error 
                        return Promise.reject(err2);
                    });
            })
            .catch((err: any) => {
                console.log(err);   // handle error 
                return Promise.reject(err);
            });
    }

    test1 () {
        var q1 = this._http.get(URL_DISHES).map(x => x.json()).filter(x => x.id > 5);
        // var/ q2 = this._http.get(URL_DISHES).flatMap(x => x.json()).filter(x => x.id > 5);

        var q3 = this._http.get('http://jsonplaceholder.typicode.com/users/')
            .flatMap((data) => { 
                var tmp =  data.json();
                var duplicates = [tmp, tmp];
                return  duplicates ;
            })
            .filter((person) => person.id > 5)
            //.map((person) => "Dr. " + person.name)
            .subscribe((data) => {
                console.log(data);
            });
    }

    _getDishes(allDishes, indices) {
        return indices.map(x => allDishes[x]);
    }

     _getDishes2(allDishes, indices) {
        return indices.map(x => allDishes[x]);
    }

    _handleError(err: any) {
        console.log(err);

        return Observable.throw(err);
    }

    _get3RandomIndices(max) {
        var result = [];
        for(var i = 0; i < 3; i++) {
            result.push(this._getRandom(max));
        }

        return result; 
    }

    _getRandom(max) {
        var result = Math.ceil((Math.random() * 10000000000000000) % max);

        return result; 
    }

}