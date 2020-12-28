"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FieldMatchDirective = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FieldMatchDirective = /** @class */ (function () {
    function FieldMatchDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    FieldMatchDirective_1 = FieldMatchDirective;
    FieldMatchDirective.prototype.validate = function (control) {
        return this.valueToMatch === control.value ? null : { fieldnotmatching: true };
    };
    FieldMatchDirective.prototype.ngOnChanges = function (changes) {
        this.field.updateValueAndValidity();
    };
    var FieldMatchDirective_1;
    __decorate([
        core_1.Input('appFieldMatch')
    ], FieldMatchDirective.prototype, "valueToMatch");
    __decorate([
        core_1.Input()
    ], FieldMatchDirective.prototype, "field");
    FieldMatchDirective = FieldMatchDirective_1 = __decorate([
        core_1.Directive({
            selector: '[appFieldMatch]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: FieldMatchDirective_1, multi: true }]
        })
    ], FieldMatchDirective);
    return FieldMatchDirective;
}());
exports.FieldMatchDirective = FieldMatchDirective;
