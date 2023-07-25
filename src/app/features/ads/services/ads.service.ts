import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Ad, AdDetail } from '../types/ads.types';

@Injectable({
    providedIn: 'root'
})
export class AdsService {
    constructor(private http: HttpClient) { }
    reqOptions = {
        headers: {
            'authorization': localStorage.getItem('jwt') || ''
        }
    }

    apiUrl = environment.apiUrl

    getAds() {
        return this.http.get<Ad[]>(`${this.apiUrl}/ads`, this.reqOptions)
    }

    getAdsDetails() {
        return this.http.get<AdDetail[]>(`${this.apiUrl}/ads/details`, this.reqOptions)
    }

    getAdDetails(id: number) {
        return this.http.get<AdDetail>(`${this.apiUrl}/ads/details?id=${id}`, this.reqOptions)
    }

    deleteAd(id: number) {
        return this.http.delete(`${this.apiUrl}/ads?id=${id}`, this.reqOptions)
    }
}

