import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { GetDepartmentsResponse } from 'shared/types/department';

@Injectable({
    providedIn: 'root'
})
export class DepartmentService {
    private apiUrl = environment.apiUrl;
    constructor(private http: HttpClient) {

    }

    getDepartments() {
        return this.http.get<GetDepartmentsResponse>(`${this.apiUrl}/ss-search/department`)
    }
}