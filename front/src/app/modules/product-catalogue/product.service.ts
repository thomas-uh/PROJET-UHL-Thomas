import { CartItem } from './../../shared/CartItem';
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
    return this.http.get<Product[]>(environment.backendAPI + 'products/all');
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

  postOrder(products: CartItem[]): Observable<{success: boolean}> {
    let body = new URLSearchParams();
    body.set('products', JSON.stringify(products));

    return this.http.post<{success: boolean}>(
      environment.backendAPI + 'users/order',
      body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }
    );
  }
}
