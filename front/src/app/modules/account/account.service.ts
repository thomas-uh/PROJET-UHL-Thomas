import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from './../../shared/Account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<{ success: boolean, login: string }>
  {
    let body = new URLSearchParams();
    body.set('login', login);
    body.set('password', password);

    return this.http.post<{ success: boolean, login: string }>(
      environment.backendAPI + 'users/login',
      body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }
      );
  }

  register(account: Account): Observable<{success: boolean, login: string}> {
    let body = new URLSearchParams();
    body.set('account', JSON.stringify(account));

    return this.http.post<{success: boolean, login: string}>(
      environment.backendAPI + 'users/register',
      body.toString(),
      {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      }
    );
  }

  getUser(): Observable<Account> {
    return this.http.get<Account>(environment.backendAPI + 'users/account');
  }

  getPurchaseHistory(): Observable<{success: boolean, result: Array<{order_id: number, date: {date: Date, timezone_type: number, timezone: string}}>}> {
    return this.http.get
      <{success: boolean, result: Array<{order_id: number, date: {date: Date, timezone_type: number, timezone: string}}>}>(
        environment.backendAPI + 'users/purchases/history'
    );
  }

  getPurchase(order_id: number): Observable<{success: boolean, result: {order_id: number, date: {date: Date, timezone_type: number, timezone: string}}}> {
    return this.http.get
      <{success: boolean, result: {order_id: number, date: {date: Date, timezone_type: number, timezone: string}}}>(
        environment.backendAPI + 'users/purchases/get/' + order_id
    );
  }

  getPurchaseDetail(order_id: number): Observable<{success: boolean, result: Array<{product_id: number, product_name: string, product_price: number, quantity: number}>}> {
    return this.http.get
      <{success: boolean, result: Array<{product_id: number, product_name: string, product_price: number, quantity: number}>}>(
        environment.backendAPI + 'users/purchases/detail/' + order_id
    );
  }
}
