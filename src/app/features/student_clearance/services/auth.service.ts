import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiUrl = environment.BASE_URL;

  adminLogin(userInput:any) : Observable<any> {
  console.log("sexy");
    return this.http.post(this.apiUrl+'/admin/login', userInput);
  
  }
  
  isLoggedIn() {
    return sessionStorage.getItem('authToken')!=null;
  }

  authLogout () {
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('adminId');
    return;
  }

}