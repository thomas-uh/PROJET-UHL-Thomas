import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then(
        m => m.AccountModule
      )
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product-catalogue/product.module').then(
        m => m.ProductModule
      )
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
