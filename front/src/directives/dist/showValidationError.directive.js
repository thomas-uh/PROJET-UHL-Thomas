"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ValidationErrorDirective = void 0;
var core_1 = require("@angular/core");
var ValidationErrorDirective = /** @class */ (function () {
    function ValidationErrorDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ValidationErrorDirective.prototype.onInput = function () {
        if (this.control.invalid) {
            this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid red');
        }
        else {
            this.renderer.removeStyle(this.el.nativeElement, 'border');
        }
    };
    __decorate([
        core_1.Input('appShowValidationErrors')
    ], ValidationErrorDirective.prototype, "control");
    __decorate([
        core_1.HostListener('input')
    ], ValidationErrorDirective.prototype, "onInput");
    ValidationErrorDirective = __decorate([
        core_1.Directive({
            selector: '[appShowValidationErrors]'
        })
    ], ValidationErrorDirective);
    return ValidationErrorDirective;
}());
exports.ValidationErrorDirective = ValidationErrorDirective;
