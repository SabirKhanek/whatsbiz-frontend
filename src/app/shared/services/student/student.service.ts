import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetStudentsResponse, Student } from 'shared/types/student';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getStudents(filters: GetStudentFilters | undefined = undefined) {
    let query = '';

    if (filters) {
      const queryParams = convertToQueryParams(filters as { [key: string]: any });
      query = queryParams ? `?${queryParams}` : '';
    }
    return this.http.get<GetStudentsResponse>(`${this.baseUrl}/ss-search/student${query}`)
  }
}


export interface GetStudentFilters {
  semesters?: number[];
  programs?: ('Bachelor' | 'Master' | 'MPhil' | 'PhD')[];
  name_roll?: string;
  department?: number;
}


function convertToQueryParams(obj: { [key: string]: any }): string {
  const queryParams = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === undefined || obj[key] === null || obj[key] === '' || obj[key]?.length <= 0) continue;
      let value = obj[key];

      if (Array.isArray(value)) {
        value = value.map(item => encodeURIComponent(item)).join(',');
      } else {
        value = encodeURIComponent(value);
      }

      queryParams.push(`${encodeURIComponent(key)}=${value}`);
    }
  }

  return queryParams.join('&');
}
