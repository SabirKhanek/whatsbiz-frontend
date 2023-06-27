import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthResponseError, AuthResponseSuccess } from 'src/app/types/api_responses.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl
  private isLoggedInFlag: boolean | undefined;

  public setLoggedIn(value: boolean): void {
    this.isLoggedInFlag = value;
  }

  constructor(private http: HttpClient, private router: Router) {
    // this.validateToken().subscribe((res => {
    //   this.isLoggedInFlag = true;
    // }))
  }

  validateToken() {
    return this.http.post<{ result: string }>(this.baseUrl + 'auth/validate', undefined, {
      headers: {
        authorization: localStorage.getItem('jwt') || ''
      }
    }).pipe(tap({
      error: (err) => {
        this.logOut()
      }
    }))
  }

  getActiveUser() {
    const payload = atob((localStorage.getItem('jwt') || '').split('.')[1]);
    return JSON.parse(payload)
  }

  isLoggedIn() {
    // if (this.isLoggedInFlag === undefined) this.validateToken().subscribe()
    return this.isLoggedInFlag !== undefined && this.isLoggedInFlag === true
  }

  auth(username: string, password: string) {
    return this.http.post<AuthResponseSuccess>(this.baseUrl + 'auth', { username, password }).pipe(tap(res => {
      localStorage.setItem('jwt', res.jwt);
      this.setLoggedIn(true);
    }))
  }

  logOut() {
    localStorage.removeItem('jwt');
    this.setLoggedIn(false);
    this.router.navigate(['/login'])
  }
}
