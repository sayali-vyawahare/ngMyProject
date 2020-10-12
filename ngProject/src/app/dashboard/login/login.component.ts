import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  msg: String = '';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(uname, pass) {
    console.log('LoginComponent -> login -> pass', pass);
    console.log('LoginComponent -> login -> uname', uname);

    if (uname === 'admin' && pass === 'admin'){
      localStorage.setItem('admin', 'admin');
      this.router.navigate(['/dash']);
    }
    this.msg = "Please try again..!";

}
}
