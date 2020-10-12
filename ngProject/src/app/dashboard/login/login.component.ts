import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  login(uname, pass) {
    console.log('LoginComponent -> login -> pass', pass);
    console.log('LoginComponent -> login -> uname', uname);

}
}
