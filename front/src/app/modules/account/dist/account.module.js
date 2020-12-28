"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountModule = void 0;
var common_1 = require("@angular/common");
var custom_directives_module_1 = require("./../../../directives/custom-directives.module");
var account_details_component_1 = require("./account-details/account-details.component");
var account_creation_form_component_1 = require("./account-creation-form/account-creation-form.component");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var custom_pipes_module_1 = require("./../../../pipes/custom-pipes.module");
var account_routing_module_1 = require("./account-routing.module");
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            declarations: [
                account_creation_form_component_1.AccountCreationFormComponent,
                account_details_component_1.AccountDetailsComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                custom_pipes_module_1.CustomPipes,
                custom_directives_module_1.CustomDirectives,
                account_routing_module_1.AccountComponentRoutingModule,
            ]
        })
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
