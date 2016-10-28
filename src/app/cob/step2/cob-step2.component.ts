import { Component } from '@angular/core';
import { CobModel } from '../cobModel';


@Component({
  selector: '<cob-step2>',
  templateUrl: './cob-step2.component.html' 
})
export class CobStep2 {

  constructor(public model : CobModel) {}

  ngOnInit() {
    console.log('COB - Step 2 - component');
  }

}
