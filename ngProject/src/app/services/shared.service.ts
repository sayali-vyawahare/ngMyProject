import { Injectable } from '@angular/core';
import { MOBPARTS } from '../data/mobPartsMock';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  getMobData() {
    return MOBPARTS;
  }

  calcProds(prods) {
    let sum = 0;

    for (let prod of prods) {
      sum += prod.prodInstock;
    }
    return sum;
  }
}
