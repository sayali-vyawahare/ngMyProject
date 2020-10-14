import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styles: [
  ]
})
export class ReactFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
formObj = new FormGroup({
    uNameObj: new FormControl('', Validators.required),
    passObj: new FormControl('', Validators.required),
  });

  get uName() {
    return this.formObj.get('userName');
  }

}
