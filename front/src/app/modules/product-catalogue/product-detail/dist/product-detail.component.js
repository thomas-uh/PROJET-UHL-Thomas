"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailComponent = void 0;
var core_1 = require("@angular/core");
var productCart_action_1 = require("../../../shared/actions/productCart-action");
var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(productService, route, store) {
        this.productService = productService;
        this.route = route;
        this.store = store;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product$ = this.productService.getProduct(this.route.snapshot.paramMap.get('name'));
        this.productSub = this.product$.subscribe(function (val) { return _this.product = val; });
    };
    ProductDetailComponent.prototype.AddToCart = function (product) {
        this.store.dispatch(new productCart_action_1.AddProductToCart(product));
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.productSub.unsubscribe();
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.scss']
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
