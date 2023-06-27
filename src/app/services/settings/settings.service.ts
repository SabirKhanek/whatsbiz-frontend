import { ConfigSaveRequest, ConfigSaveResponse } from './../../types/api_responses.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  baseUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getSettings(key: string | undefined = undefined) {
    return this.http.get<[{ key: string, value: string }]>(`${this.baseUrl}config${key ? `?key=${key}` : ''}`, {
      headers: {
        authorization: localStorage.getItem('jwt') || ''
      }
    })
  }

  saveSettings(pairs: ConfigSaveRequest) {
    return this.http.post<ConfigSaveResponse[]>(`${this.baseUrl}config/save`, pairs, {
      headers: {
        authorization: localStorage.getItem('jwt') || ''
      }
    })
  }
}
