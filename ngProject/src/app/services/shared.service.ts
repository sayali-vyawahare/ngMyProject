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
}
