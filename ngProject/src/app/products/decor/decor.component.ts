import { Component, OnInit } from '@angular/core';
import { HomeDecor } from 'src/app/model/decor';

@Component({
  selector: 'app-decor',
  templateUrl: './decor.component.html',
  styleUrls: ['./decor.component.css'],
})
export class DecorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'Welcome to product section';
  homeDecor: HomeDecor[] = [
    {
      prod_id: 10100,
      prod_name: 'Iphone',
      prodInstock: 150,
      prodPrice: 118000,
      veg: true,
      sold: false,
      country: 'india',
    },
    {
      prod_id: 10200,
      prod_name: 'Samsung',
      prodInstock: 50,
      prodPrice: 18000,
      veg: true,
      sold: true,
      country: 'australia',
    },
    {
      prod_id: 10300,
      prod_name: 'nokia',
      prodInstock: 0,
      prodPrice: 25000,
      veg: true,
      sold: false,
      country: '',
    },
  ];

  calcprod() {
    let sum = 0;
    for (let decor of this.homeDecor) {
      sum = sum + decor.prodInstock;
    }
    return sum;
  }
}
