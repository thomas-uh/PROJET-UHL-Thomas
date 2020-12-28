import { ProductCartComponent } from './product-cart/product-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  {
    path: 'list',
    component: ProductListComponent
  },
  {
    path: 'cart',
    component: ProductCartComponent
  },
  {
    path: 'detail/:name',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class ProductComponentRoutingModule {}
