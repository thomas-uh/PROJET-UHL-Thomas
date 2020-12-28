import { AccountState } from './../../../shared/states/account-state';
import { RegisterJWT, RegisterLogin } from './../../../shared/actions/account-action';
import { AccountService } from './../account.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss']
})
export class AccountLoginComponent implements OnDestroy {

  public formSubmited: boolean = false;
  public authentified: boolean = false;

  public loginResponse$: Observable<{ success: boolean, login: string }>;
  private loginSub: Subscription = null;

  loginForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get login(): AbstractControl { return this.loginForm.get('login'); }
  get password(): AbstractControl { return this.loginForm.get('password'); }

  constructor(private accountServive: AccountService, private store: Store, private router: Router) { }

  ngOnDestroy(): void {
    if (this.loginSub != null) {
      this.loginSub.unsubscribe();
    }
  }

  onSubmit(): void {

    this.loginResponse$ = this.accountServive.login(this.loginForm.value.login, this.loginForm.value.password);

    if (this.loginSub != null) {
      this.loginSub.unsubscribe();
    }

    this.loginSub = this.loginResponse$.subscribe(body => {
      if (body.success) {
        this.store.dispatch(new RegisterLogin(body.login));
        this.router.navigate(['/account/view']);
      }
    });
  }
}
