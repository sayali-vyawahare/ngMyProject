import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
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
    },
    {
      prod_id: 10200,
      prod_name: 'Samsung',
      prodInstock: 50,
      prodPrice: 18000,
      veg: false,
      sold: true,
    },
    {
      prod_id: 10300,
      prod_name: 'Nokia',
      prodInstock: 0,
      prodPrice: 25000,
      veg: true,
      sold: false,
    },
  ];
}
