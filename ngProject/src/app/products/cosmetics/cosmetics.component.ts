import { Component, OnInit } from '@angular/core';
import { Cosmetics } from 'src/app/model/cosmetics';
import { COSMETICS } from './../../data/cosmeticsMock';

@Component({
  selector: 'app-cosmetics',
  templateUrl: './cosmetics.component.html',
  styleUrls: ['./cosmetics.component.css'],
})
export class CosmeticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.cosmetics = COSMETICS;
  }
  title = 'Welcome to product section';
  cosmetics: Cosmetics[];

  calcprod() {
    let sum = 0;
    for (let cosmetic of this.cosmetics) {
      sum = sum + cosmetic.prodInstock;
    }
    return sum;
  }
}
