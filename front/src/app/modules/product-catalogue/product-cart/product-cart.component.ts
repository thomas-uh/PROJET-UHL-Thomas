import { CartItem } from './../../../shared/CartItem';
import { mergeMap, tap } from 'rxjs/operators';
import { ProductService } from './../product.service';
import { ClearCart, RemoveOneUnit, RemoveFromCart } from '../../../shared/actions/productCart-action';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductState } from '../../../shared/states/product-state';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {

  public productCart$: Observable<CartItem[]>;
  public cartSize$: Observable<number>;
  public cartValue$: Observable<number>;

  private products: CartItem[] = [];

  constructor(private store: Store, private productService: ProductService) { }

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
    this.productService.postOrder(this.products).subscribe(val => console.log(val));
  }
}
