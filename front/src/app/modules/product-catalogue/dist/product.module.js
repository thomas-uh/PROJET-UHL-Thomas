"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductModule = void 0;
var product_cart_component_1 = require("./product-cart/product-cart.component");
var product_list_component_1 = require("./product-list/product-list.component");
var product_filter_component_1 = require("./product-filter/product-filter.component");
var custom_directives_module_1 = require("./../../../directives/custom-directives.module");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var custom_pipes_module_1 = require("./../../../pipes/custom-pipes.module");
var product_routing_module_1 = require("./product-routing.module");
var common_1 = require("@angular/common");
var product_detail_component_1 = require("./product-detail/product-detail.component");
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            declarations: [
                product_filter_component_1.ProductFilterComponent,
                product_list_component_1.ProductListComponent,
                product_cart_component_1.ProductCartComponent,
                product_detail_component_1.ProductDetailComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                custom_pipes_module_1.CustomPipes,
                custom_directives_module_1.CustomDirectives,
                product_routing_module_1.ProductComponentRoutingModule,
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
