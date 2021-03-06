import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styles: [],
})
export class MotoComponent implements OnInit {
  id;
  name;
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.paramMap.subscribe((paramGroup) => {
      console.clear();
      console.log('paramGroup : ', paramGroup.get('prod_id'));
      this.id = paramGroup.get('prod_id');
      console.log('paramGroup : ', paramGroup.get('prod_name'));
      this.name = paramGroup.get('prod_name');
    });
  }

  ngOnInit(): void {}
}
