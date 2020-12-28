import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Store } from '@ngxs/store';
import { AddProductToCart } from '../../../shared/actions/productCart-action';
import { Product } from './../../../shared/Product';
import { ProductFilter } from './../../../shared/ProductFilter';
import { ProductState } from './../../../shared/states/product-state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products$: Observable<Product[]>;
  private filters$: BehaviorSubject<ProductFilter>;
  public filteredProducts$: Observable<Product[]>;
  public cartSize$: Observable<number>;

  constructor(private productService: ProductService, private store: Store) { }

  ngOnInit(): void {
    this.cartSize$ = this.store.select(ProductState.getNbOfProducts);

    this.products$ = this.productService.getProducts();

    this.filters$ = new BehaviorSubject(new ProductFilter('', -1, -1));

    this.filteredProducts$ = combineLatest([this.products$, this.filters$]).pipe(
      map(
        ([products, filters]: [Product[], ProductFilter]): Product[] => {
          return products.filter(product => {
            let nameCondition: boolean;
            let lowerThanPriceCondition: boolean;
            let greaterThanPriceCondition: boolean;

            if (filters.nameFilter === null || filters.nameFilter.length === 0) {
              nameCondition = true;
            }
            else {
              nameCondition = product.name.toLocaleLowerCase().includes(filters.nameFilter.toLocaleLowerCase());
            }

            if ((filters.priceLEFilter === -1 || filters.priceLEFilter === null)) {
              lowerThanPriceCondition = true;
            }
            else {
              lowerThanPriceCondition = product.price <= filters.priceLEFilter;
            }

            if ((filters.priceGEFilter === -1 || filters.priceGEFilter === null)) {
              greaterThanPriceCondition = true;
            }
            else {
              greaterThanPriceCondition = product.price >= filters.priceGEFilter;
            }

            return nameCondition && lowerThanPriceCondition && greaterThanPriceCondition;
          });
        }
      ),
    );
  }

  public AddToCart(product: Product): void {
    this.store.dispatch(new AddProductToCart(product));
  }

  public onFilterEvent(filters: ProductFilter): void {
    this.filters$.next(filters);
  }
}
