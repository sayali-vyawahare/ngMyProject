import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

import { MobParts } from './../../model/mob-parts';
import { MOBPARTS } from '../../data/mobPartsMock';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css'],
})
export class MobilesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.mobParts = MOBPARTS;
  }
  ngOnDestroy(): void {
    this.mobParts = [];
  }

  title = 'Welcome to product section';
  mobParts: MobParts[];

  calcprod() {
    let sum = 0;
    for (let mobPart of this.mobParts) {
      sum = sum + mobPart.prodInstock;
    }
    return sum;
  }

  downQntt(mobPart) {
    mobPart.qntt--;
  }
  upQntt(mobPart) {
    mobPart.qntt++;
  }
}
