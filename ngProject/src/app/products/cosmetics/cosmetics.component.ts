import { Component, OnInit } from '@angular/core';
import { Cosmetics } from 'src/app/model/cosmetics';

@Component({
  selector: 'app-cosmetics',
  templateUrl: './cosmetics.component.html',
  styleUrls: ['./cosmetics.component.css'],
})
export class CosmeticsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'Welcome to product section';
  cosmetics: Cosmetics[] = [
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
    for (let cosmetic of this.cosmetics) {
      sum = sum + cosmetic.prodInstock;
    }
    return sum;
  }
}
