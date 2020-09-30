import { Component, OnInit } from '@angular/core';
import { HOMEDECOR } from 'src/app/data/decorMock';
import { HomeDecor } from 'src/app/model/decor';

@Component({
  selector: 'app-decor',
  templateUrl: './decor.component.html',
  styleUrls: ['./decor.component.css'],
})
export class DecorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.homeDecor = HOMEDECOR;
  }
  title = 'Welcome to product section';
  homeDecor: HomeDecor[];
  calcprod() {
    let sum = 0;
    for (let decor of this.homeDecor) {
      sum = sum + decor.prodInstock;
    }
    return sum;
  }
}
