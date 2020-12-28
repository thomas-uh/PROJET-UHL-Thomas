import { ProductFilter } from './../../../shared/ProductFilter';
import { Subscription } from 'rxjs';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit, OnDestroy {
  @Output() filterEvent: EventEmitter<ProductFilter> = new EventEmitter<ProductFilter>();

  filterForm = new FormGroup({
    nameFilter: new FormControl(''),
    priceFilterLE: new FormControl(''),
    priceFilterGE: new FormControl('')
  });

  private filterFormSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.filterFormSubscription = this.filterForm.valueChanges.subscribe(filters => {
      this.filterEvent.emit(
        new ProductFilter(
          filters.nameFilter,
          filters.priceFilterLE === '' || filters.priceFilterLE < 0 ? -1 : filters.priceFilterLE,
          filters.priceFilterGE === '' || filters.priceFilterGE < 0 ? -1 : filters.priceFilterGE
        )
      );
    });
  }

  ngOnDestroy(): void {
    this.filterFormSubscription.unsubscribe();
  }
}
