import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/types/product.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  getProductsExcel(name?: string, author?: string, intent?: string, messagetime?: string): Observable<Blob> {
    console.log(name, author, intent, messagetime)
    const params = `?${name ? `&name=${name}` : ''}${author ? `&author=${author}` : ''}${intent ? `&intent=${intent}` : ''}${messagetime ? `&messagetime=${messagetime}` : ''}`;
    const url = `${this.baseUrl}/data/get_products_excel${params}`;

    // Set the request headers
    const headers = new HttpHeaders().set('authorization', `${localStorage.getItem('jwt') || ''}`);

    // Make the HTTP request
    return this.http.get(url, { headers, responseType: 'blob' })
  }

  getProducts(name?: string, author?: string, intent?: string, messagetime?: string): Observable<Product[]> {
    const url = `${this.baseUrl}/data/get_products`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': localStorage.getItem('jwt') || ''
    });

    let params = new HttpParams();
    if (name) {
      params = params.set('name', name);
    }
    if (author) {
      params = params.set('author', author);
    }
    if (intent) params = params.set('intent', intent);
    if (messagetime) params = params.set('messagetime', messagetime);

    const options = { headers, params };

    return this.http.get<Product[]>(url, options);
  }
}
