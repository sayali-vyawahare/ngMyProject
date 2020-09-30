import { Component, OnInit } from '@angular/core';
import { BOOKS } from 'src/app/data/booksMock';
import { Books } from './../../model/books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.books = BOOKS;
  }
  title = 'Welcome to product section';
  books: Books[];

  calcprod() {
    let sum = 0;
    for (let book of this.books) {
      sum = sum + book.prodInstock;
    }
    return sum;
  }
}
