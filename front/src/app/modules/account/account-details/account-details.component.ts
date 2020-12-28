import { Observable, of, Subscription } from 'rxjs';
import { AccountState } from './../../../shared/states/account-state';
import { Account } from '../../../shared/Account';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AccountService } from '../account.service';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  public account$: Observable<Account>;

  constructor(private accountService: AccountService, private store: Store) { }

  ngOnInit(): void {
    this.account$ = this.store.select(AccountState.getLogin)
      .pipe(
        mergeMap(
          (login: string): Observable<Account> => {
            if (login !== '') {
              return this.accountService.getUser(login);
            }
            else {
              return of(null);
            }
          }
        )
      );
  }

}
