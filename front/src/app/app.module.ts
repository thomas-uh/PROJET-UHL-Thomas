import { AccountState } from './shared/states/account-state';
import { AccountModule } from './modules/account/account.module';
import { CustomPipes } from '../pipes/custom-pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomDirectives } from '../directives/custom-directives.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductState } from './shared/states/product-state';
import { NgxsModule } from '@ngxs/store';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CustomPipes,
    CustomDirectives,
    HttpClientModule,
    AccountModule,
    AppRoutingModule,
    NgxsModule.forRoot([ProductState, AccountState])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
