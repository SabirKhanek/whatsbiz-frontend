import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../services/auth/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, catchError, takeUntil } from 'rxjs';
import { AuthResponseError, AuthResponseSuccess } from '../types/api_responses.type';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy, OnInit {
  subscriptionDestroyer = new Subject()
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.subscriptionDestroyer.next(1)
    this.subscriptionDestroyer.complete()
  }

  username = ''
  password = ''
  auth() {
    this.authService.auth(this.username, this.password).pipe(takeUntil(this.subscriptionDestroyer)).subscribe({ error: this.handleAuthFailure, next: this.handleAuthSuccess })
  }

  handleAuthSuccess = (res: AuthResponseSuccess) => {
    localStorage.setItem('jwt', res.jwt);
    const payload = atob(res.jwt.split('.')[1]);
    this.toastr.success('Welcome back ' + JSON.parse(payload).username);
    this.router.navigate(['/dashboard'])
  }

  handleAuthFailure = (err: HttpErrorResponse) => {
    const error: AuthResponseError = err.error
    const mess = JSON.stringify(error)
    this.toastr.error(error.message)
  }
}
