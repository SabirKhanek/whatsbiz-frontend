import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}

  session = sessionStorage.getItem('authToken');
  // setting headers
  token = this.session != null ? this.session : '';
  headers = new HttpHeaders({ authToken: this.token });
  options = { headers: this.headers };

  // get request
  getApi(uri:string, employee_id:any): Observable<any> {
    return this.http.get(environment.BASE_URL+uri + `?employee_id=${employee_id}`, this.options);
  }
  // Post Request 
  postApi(uri:string, student:any): Observable<any> {
    return this.http.post(environment.BASE_URL+uri, student, this.options);
  }


  // create new admin
  createAdmin(uri:string, admin:any): Observable<any> {
    return this.http.post(environment.BASE_URL+uri, admin, this.options);
  }
}
