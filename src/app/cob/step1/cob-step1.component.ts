import { Component } from '@angular/core';
import { CobModel } from '../cobModel';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: '<cob-step1>',
  templateUrl: "./cob-step1.component.html"  
})
export class CobStep1 {


  constructor(public model : CobModel, private _router : Router) {}

  ngOnInit() {
    console.log('COB - Step 1 - component');
  }

  next(e) {
    //e.preventDefault();    
    this._router.navigate(['/cob/cobstep2']);
    return false;
  }
}
