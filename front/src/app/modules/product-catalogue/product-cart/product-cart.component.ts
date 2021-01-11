import { Router } from '@angular/router';
import { CartItem } from './../../../shared/CartItem';
import { mergeMap, tap } from 'rxjs/operators';
import { ProductService } from './../product.service';
import { ClearCart, RemoveOneUnit, RemoveFromCart } from '../../../shared/actions/productCart-action';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { ProductState } from '../../../shared/states/product-state';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit, OnDestroy {

  public productCart$: Observable<CartItem[]>;
  public cartSize$: Observable<number>;
  public cartValue$: Observable<number>;

  public postError: boolean = false;

  private products: CartItem[] = [];
  private postCartSub: Subscription = null;

  constructor(private store: Store, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productCart$ = this.store.select(state => state.productCart.products).pipe(
      tap(
        (items: CartItem[]): void => {
          this.products = items;
        }
      )
    )

    this.cartSize$ = this.store.select(ProductState.getNbOfProducts);
    this.cartValue$ = this.store.select(ProductState.getCartValue);
  }

  ngOnDestroy(): void {
    if (this.postCartSub !== null) this.postCartSub.unsubscribe(); 
  }

  public ClearCart(): void {
    this.store.dispatch(new ClearCart());
  }

  public RemoveOneUnitFromCart(cartItem: CartItem): void {
    this.store.dispatch(new RemoveOneUnit(cartItem));
  }

  public RemoveFromCart(cartItem: CartItem): void {
    this.store.dispatch(new RemoveFromCart(cartItem));
  }

  public Order(): void {
    if (this.postCartSub !== null) this.postCartSub.unsubscribe();

    this.postCartSub = this.productService.postOrder(this.products).subscribe(response => {
     if (response.success) {
       this.store.dispatch(new ClearCart());
       this.postError = false;
       this.router.navigate(['/product/order/complete']);
     } else {
      this.postError = true;
     }
    });
  }
}
