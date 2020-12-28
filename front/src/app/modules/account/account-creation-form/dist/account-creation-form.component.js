"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.phoneNumberValidator = exports.zipCodeValidator = exports.noNumberValidator = exports.AccountCreationFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var Account_1 = require("../Account");
var Address_1 = require("../Address");
var AccountCreationFormComponent = /** @class */ (function () {
    function AccountCreationFormComponent(router) {
        this.router = router;
        this.genders = [
            'Madame',
            'Monsieur'
        ];
        this.accountForm = new forms_1.FormGroup({
            lastName: new forms_1.FormControl('', [forms_1.Validators.required, noNumberValidator]),
            firstName: new forms_1.FormControl('', [forms_1.Validators.required, noNumberValidator]),
            civility: new forms_1.FormControl('Madame', [forms_1.Validators.required]),
            street: new forms_1.FormControl('', [forms_1.Validators.required]),
            zipCode: new forms_1.FormControl('', [forms_1.Validators.required, zipCodeValidator]),
            city: new forms_1.FormControl('', [forms_1.Validators.required, noNumberValidator]),
            country: new forms_1.FormControl('', [forms_1.Validators.required, noNumberValidator]),
            phone: new forms_1.FormControl('', [forms_1.Validators.required, phoneNumberValidator]),
            email: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            login: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            password: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8)]),
            passwordConfirmation: new forms_1.FormControl('', [forms_1.Validators.required])
        });
    }
    Object.defineProperty(AccountCreationFormComponent.prototype, "lastName", {
        get: function () { return this.accountForm.get('lastName'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountCreationFormComponent.prototype, "firstName", {
        get: function () { return this.accountForm.get('firstName'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountCreationFormComponent.prototype, "street", {
        get: function () { return this.accountForm.get('street'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountCreationFormComponent.prototype, "zipCode", {
        get: function () { return this.accountForm.get('zipCode'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountCreationFormComponent.prototype, "city", {
        get: function () { return this.accountForm.get('city'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountCreationFormComponent.prototype, "country", {
        get: function () { return this.accountForm.get('country'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountCreationFormComponent.prototype, "phone", {
        get: function () { return this.accountForm.get('phone'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountCreationFormComponent.prototype, "email", {
        get: function () { return this.accountForm.get('email'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountCreationFormComponent.prototype, "login", {
        get: function () { return this.accountForm.get('login'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountCreationFormComponent.prototype, "password", {
        get: function () { return this.accountForm.get('password'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountCreationFormComponent.prototype, "passwordConfirmation", {
        get: function () { return this.accountForm.get('passwordConfirmation'); },
        enumerable: false,
        configurable: true
    });
    AccountCreationFormComponent.prototype.onSubmit = function () {
        if (!this.accountForm.valid) {
            return;
        }
        var address = new Address_1.Address(this.accountForm.value.street, this.accountForm.value.zipCode, this.accountForm.value.city, this.accountForm.value.country);
        var account = new Account_1.Account(this.accountForm.value.lastName, this.accountForm.value.firstName, this.accountForm.value.civility, address, this.accountForm.value.phone, this.accountForm.value.email, this.accountForm.value.login, this.accountForm.value.password);
        this.router.navigate(['account/view'], {
            state: {
                acc: account
            }
        });
    };
    AccountCreationFormComponent = __decorate([
        core_1.Component({
            selector: 'app-account-creation-form',
            templateUrl: './account-creation-form.component.html',
            styleUrls: ['./account-creation-form.component.scss']
        })
    ], AccountCreationFormComponent);
    return AccountCreationFormComponent;
}());
exports.AccountCreationFormComponent = AccountCreationFormComponent;
function noNumberValidator(control) {
    var regex = /^[a-zA-Z\s]*$/;
    return regex.test(control.value) ? null : { number: true };
}
exports.noNumberValidator = noNumberValidator;
function zipCodeValidator(control) {
    var regex = /^[0-9]{5}$/;
    return regex.test(control.value) ? null : { zipcode: true };
}
exports.zipCodeValidator = zipCodeValidator;
function phoneNumberValidator(control) {
    var phoneNumber = control.value;
    if (phoneNumber.charAt(0) === '+') {
        phoneNumber = phoneNumber.substr(4, phoneNumber.length - 3);
    }
    phoneNumber = phoneNumber.replace(/\s/g, '');
    var regex = /^[0-9]{9}$/;
    return regex.test(phoneNumber) ? null : { phoneinvalid: true };
}
exports.phoneNumberValidator = phoneNumberValidator;
