import { AccountState } from './../../shared/states/account-state';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private store: Store) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.store.select(AccountState.getJWTToken)
            .pipe(
                mergeMap(
                    (jwt: string): Observable<boolean> => {
                        if (jwt === '') {
                            return of(false);
                        } else {
                            return of(true);
                        }
                    }
                )
            );
    }

}