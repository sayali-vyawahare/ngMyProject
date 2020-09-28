import { Component, OnInit } from '@angular/core';
import { Books } from './../../model/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  title = 'Welcome to product section';
  books: Books[] = [
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
    for (let book of this.books) {
      sum = sum + book.prodInstock;
    }
    return sum;
  }
}
