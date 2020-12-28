"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomDirectives = void 0;
var showValidationError_directive_1 = require("./showValidationError.directive");
var core_1 = require("@angular/core");
var field_match_directive_1 = require("./field-match.directive");
var CustomDirectives = /** @class */ (function () {
    function CustomDirectives() {
    }
    CustomDirectives = __decorate([
        core_1.NgModule({
            declarations: [
                field_match_directive_1.FieldMatchDirective,
                showValidationError_directive_1.ValidationErrorDirective
            ],
            exports: [
                field_match_directive_1.FieldMatchDirective,
                showValidationError_directive_1.ValidationErrorDirective
            ]
        })
    ], CustomDirectives);
    return CustomDirectives;
}());
exports.CustomDirectives = CustomDirectives;
