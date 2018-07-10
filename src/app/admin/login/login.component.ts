import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DOMAINAPI, showLoadingScreen, hideLoadingScreen } from '../../shared/init.service';

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
  constructor(private auth: AuthService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
  }

  checkLogin() {
    showLoadingScreen();
    this.httpClient.patch(DOMAINAPI + 'user', {
      userName: this.loginForm.value.username,
      passWord: this.loginForm.value.password
    }, {
      observe: 'body'
    }).subscribe(
      (response: any) => {
        this.auth.isAuth = response;
        if (this.auth.isAuth) {
          this.errMess = null;
          hideLoadingScreen();
          this.router.navigate(['boybod/dashboard']);
        } else {
          this.errMess = 'Sai tài khoản hoặc mật khẩu!';
          hideLoadingScreen();
        }
      },
      (err) => {
        alert('Lỗi đăng nhập!');
      }
    )
  }
}
