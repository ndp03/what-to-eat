import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-dish', // <app-dish>
  templateUrl: 'dish.component.html',
  styleUrls: ['dish.component.css']
})
export class DishComponent implements OnInit {

  @Input() dish: { name: string, ingredents: string };

  ngOnInit() {  }
}