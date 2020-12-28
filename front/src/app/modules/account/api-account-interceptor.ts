import { AccountState } from './../../shared/states/account-state';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RegisterJWT, RegisterLogin } from 'src/app/shared/actions/account-action';

@Injectable()
export class ApiAccountInterceptor implements HttpInterceptor {

    private jwtToken: string = '';

    constructor( private router: Router, private store: Store) {
        this.store.select(AccountState.getJWTToken).subscribe(val => this.jwtToken = val);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (this.jwtToken !== '') {
            req = req.clone({ setHeaders: { Authorization: `Bearer ${this.jwtToken}` }});
        }

        return next.handle(req).pipe(
            tap(
                (evt: HttpEvent<any>) => {
                    if (evt instanceof HttpResponse) {
                        this.handleResponse(evt);
                    }
                },
                (error: HttpErrorResponse) => {
                    this.handleError(error);
                    return of(null);
                }
            )
        );
    }

    private handleResponse(response: HttpResponse<any>): void {
        const jwtToken: string = response.headers.get('authorization');

        if (jwtToken === null) {
            return;
        }

        const parts: string[] = jwtToken.split(' ');
        if (parts.length === 2) {
            this.store.dispatch(new RegisterJWT(parts[1]));
        }
    }

    private handleError(error: HttpErrorResponse): void {
        switch (error.status) {
            case 0:
                this.store.dispatch(new RegisterJWT(''));
                this.store.dispatch(new RegisterLogin(''));
                this.router.navigate(['/account/login']);
                break;
            case 401:
                this.store.dispatch(new RegisterJWT(''));
                this.store.dispatch(new RegisterLogin(''));
                this.router.navigate(['/account/login']);
                break;
        }
    }
}