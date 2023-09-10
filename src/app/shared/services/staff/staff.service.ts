import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee, GetEmployeesResponse } from 'shared/types/staff';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getStaff(filters?: { name?: string, service_type?: 'administrative' | 'teaching' }) {
    let query = ''
    if (filters?.name) {
      query += `name=${filters.name}&`
    }
    if (filters?.service_type) {
      query += `service_type=${filters.service_type}`
    }
    return this.http.get<GetEmployeesResponse>(`${this.apiUrl}/ss-search/employee?${query}`)
  }
}
