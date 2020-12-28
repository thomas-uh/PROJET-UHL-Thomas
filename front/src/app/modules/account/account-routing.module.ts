import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountCreationFormComponent } from './account-creation-form/account-creation-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [
  {
    path: 'view',
    component: AccountDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'register',
    component: AccountCreationFormComponent
  },
  {
    path: 'login',
    component: AccountLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AccountComponentRoutingModule {}
