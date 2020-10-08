import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MOBPARTS } from '../data/mobPartsMock';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private httpCilent: HttpClient) {}
  getMobData() {
    // return MOBPARTS;
    return this.httpCilent.get('../../assets/api/mob-data.json');
  }

  calcProds(prods) {
    let sum = 0;

    for (let prod of prods) {
      sum += prod.prodInstock;
    }
    return sum;
  }
}
