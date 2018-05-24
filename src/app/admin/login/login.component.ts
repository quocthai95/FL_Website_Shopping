import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  username: string;
  password: string;
  errMess = null;
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginForm.value.username === 'nqthai95' && this.loginForm.value.password === '123') {
      this.auth.isAuth = true;
      this.errMess = null;
      this.router.navigate(['admin/dashboard']);
    } else {
      this.errMess = 'Wrong Account or Password';
    }
  }
}
