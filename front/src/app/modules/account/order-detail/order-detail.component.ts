import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  public orderDetail$: Observable<Array<{product_id: number, product_name: string, product_price: number, quantity: number}>>;
  public order$: Observable<{order_id: number, date: {date: Date, timezone_type: number, timezone: string}}>;

  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit(): void {
    this.orderDetail$ = this.accountService.getPurchaseDetail(Number.parseInt(this.route.snapshot.paramMap.get('order_id'))).pipe(
      map(
        (apiResponse: {success: boolean, result: Array<{product_id: number, product_name: string, product_price: number, quantity: number}>})
          : Array<{product_id: number, product_name: string, product_price: number, quantity: number}> => {
          return apiResponse.result;
        }
      )
    );

    this.order$ = this.accountService.getPurchase(Number.parseInt(this.route.snapshot.paramMap.get('order_id'))).pipe(
      map(
        (apiResponse: {success: boolean, result: {order_id: number, date: {date: Date, timezone_type: number, timezone: string}}})
          : {order_id: number, date: {date: Date, timezone_type: number, timezone: string}} => {
          return apiResponse.result;
        }
      )
    );
  }

}
