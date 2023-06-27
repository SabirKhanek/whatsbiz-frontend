import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) {

    }

    getBuySellAnalytics(time_frame: string): Observable<{ label: string, nbuys: number, nsells: number }[]> {
        return this.http.get<{ label: string, nbuys: number, nsells: number }[]>(this.baseUrl + 'analytics/product-buy-sell', {
            headers: {
                authorization: localStorage.getItem('jwt') || ''
            }, params: {
                time_frame
            }
        });
    }
}