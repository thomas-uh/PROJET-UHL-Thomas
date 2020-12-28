"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountComponentRoutingModule = void 0;
var account_creation_form_component_1 = require("./account-creation-form/account-creation-form.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var account_details_component_1 = require("./account-details/account-details.component");
var routes = [
    {
        path: 'create',
        component: account_creation_form_component_1.AccountCreationFormComponent
    },
    {
        path: 'view',
        component: account_details_component_1.AccountDetailsComponent
    },
];
var AccountComponentRoutingModule = /** @class */ (function () {
    function AccountComponentRoutingModule() {
    }
    AccountComponentRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], AccountComponentRoutingModule);
    return AccountComponentRoutingModule;
}());
exports.AccountComponentRoutingModule = AccountComponentRoutingModule;
