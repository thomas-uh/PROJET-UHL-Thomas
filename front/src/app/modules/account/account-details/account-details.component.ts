import { Observable, of, Subscription } from 'rxjs';
import { AccountState } from './../../../shared/states/account-state';
import { Account } from '../../../shared/Account';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AccountService } from '../account.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  public account$: Observable<Account>;
  public historyOfPurchases$: Observable<Array<{order_id: number, date: {date: Date, timezone_type: number, timezone: string}}>>;

  constructor(private accountService: AccountService, private store: Store) { }

  ngOnInit(): void {
    this.account$ = this.accountService.getUser();
    this.historyOfPurchases$ = this.accountService.getPurchaseHistory().pipe(
      map(
        (apiResponse: {success: boolean, result: Array<{order_id: number, date: {date: Date, timezone_type: number, timezone: string}}>})
          : Array<{order_id: number, date: {date: Date, timezone_type: number, timezone: string}}> => {
          return apiResponse.result;
        }
      )
    )
  }

}
