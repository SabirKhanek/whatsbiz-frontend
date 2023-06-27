import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/types/product.type';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AIService {
    private baseUrl = environment.apiUrl;

    constructor(private http: HttpClient, private toastr: ToastrService) { }

    generateProposal(intent: string, name: string, ram: string, storage: string, color: string): Observable<any> {
        return this.http.get<string>(`${this.baseUrl}ai/generate-proposal`, {
            params: { intent, name, ram, storage, color }, headers: {
                authorization: localStorage.getItem('jwt') || ''
            }
        })
    }
}


// GET http://localhost:3000/api/ai/generate-proposal
// Content-Type: application/json
// authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRldnNhYmkiLCJpYXQiOjE2ODY2NTYyMTF9.azudNXC5GONlHevaF1tth_DH4gqNthH8vD-KtGfXZd8

// {
//     "intent": "buy",
//     "product": "iphone xr",
//     "ram": "4gb",
//     "storage": "64gb",
//     "color": "black"
// }