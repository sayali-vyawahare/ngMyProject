import { Component, OnInit } from '@angular/core';

import { MobParts } from './../../model/mob-parts';
import { MOBPARTS } from './../../data/mock';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css'],
})
export class MobilesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'Welcome to product section';
  mobParts: MobParts[] = MOBPARTS;

  calcprod() {
    let sum = 0;
    for (let mobPart of this.mobParts) {
      sum = sum + mobPart.prodInstock;
    }
    return sum;
  }
}
