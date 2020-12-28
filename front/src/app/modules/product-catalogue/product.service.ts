import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './../../shared/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendProduct);
  }

  getProduct(name: string): Observable<Product> {
    return this.getProducts().pipe(
      map(
        (products: Product[]): Product => {
          return products.find((p) => p.name === name);
        }
      )
    );
  }
}
