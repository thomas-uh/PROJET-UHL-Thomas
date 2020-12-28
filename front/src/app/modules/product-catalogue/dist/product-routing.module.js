"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductComponentRoutingModule = void 0;
var product_cart_component_1 = require("./product-cart/product-cart.component");
var product_list_component_1 = require("./product-list/product-list.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_detail_component_1 = require("./product-detail/product-detail.component");
var routes = [
    {
        path: 'list',
        component: product_list_component_1.ProductListComponent
    },
    {
        path: 'cart',
        component: product_cart_component_1.ProductCartComponent
    },
    {
        path: 'detail/:name',
        component: product_detail_component_1.ProductDetailComponent
    },
];
var ProductComponentRoutingModule = /** @class */ (function () {
    function ProductComponentRoutingModule() {
    }
    ProductComponentRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ProductComponentRoutingModule);
    return ProductComponentRoutingModule;
}());
exports.ProductComponentRoutingModule = ProductComponentRoutingModule;
