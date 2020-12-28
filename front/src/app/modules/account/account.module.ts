import { AccountLoginComponent } from './account-login/account-login.component';
import { CommonModule } from '@angular/common';
import { CustomDirectives } from './../../../directives/custom-directives.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountCreationFormComponent } from './account-creation-form/account-creation-form.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPipes } from './../../../pipes/custom-pipes.module';
import { AccountComponentRoutingModule } from './account-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiAccountInterceptor } from './api-account-interceptor';


@NgModule({
  declarations: [
    AccountCreationFormComponent,
    AccountDetailsComponent,
    AccountLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipes,
    CustomDirectives,
    AccountComponentRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiAccountInterceptor, multi: true
    },
  ],
})
export class AccountModule {
}
