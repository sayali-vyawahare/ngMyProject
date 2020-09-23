import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css'],
})
export class MobilesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'Welcome to product section';
  mobParts = [
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
      veg: false,
      sold: true,
      country: 'australia',
    },
    {
      prod_id: 10300,
      prod_name: 'Nokia',
      prodInstock: 0,
      prodPrice: 25000,
      veg: true,
      sold: false,
      country: '',
    },
  ];

  calcprod() {
    let sum = 0;
    for (let mobPart of this.mobParts) {
      sum = sum + mobPart.prodInstock;
    }
    return sum;
  }
}
