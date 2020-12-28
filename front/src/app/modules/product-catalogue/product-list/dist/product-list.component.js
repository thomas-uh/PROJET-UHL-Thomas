"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductListComponent = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var productCart_action_1 = require("../../../shared/actions/productCart-action");
var ProductFilter_1 = require("./../../../shared/ProductFilter");
var product_state_1 = require("./../../../shared/states/product-state");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(productService, store) {
        this.productService = productService;
        this.store = store;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.cartSize$ = this.store.select(product_state_1.ProductState.getNbOfProducts);
        this.products$ = this.productService.getProducts();
        this.filters$ = new rxjs_1.BehaviorSubject(new ProductFilter_1.ProductFilter('', -1, -1));
        this.filteredProducts$ = rxjs_1.combineLatest([this.products$, this.filters$]).pipe(operators_1.map(function (_a) {
            var products = _a[0], filters = _a[1];
            return products.filter(function (product) {
                var nameCondition;
                var lowerThanPriceCondition;
                var greaterThanPriceCondition;
                if (filters.nameFilter === null || filters.nameFilter.length === 0) {
                    nameCondition = true;
                }
                else {
                    nameCondition = product.name.toLocaleLowerCase().includes(filters.nameFilter.toLocaleLowerCase());
                }
                if ((filters.priceLEFilter === -1 || filters.priceLEFilter === null)) {
                    lowerThanPriceCondition = true;
                }
                else {
                    lowerThanPriceCondition = product.price <= filters.priceLEFilter;
                }
                if ((filters.priceGEFilter === -1 || filters.priceGEFilter === null)) {
                    greaterThanPriceCondition = true;
                }
                else {
                    greaterThanPriceCondition = product.price >= filters.priceGEFilter;
                }
                return nameCondition && lowerThanPriceCondition && greaterThanPriceCondition;
            });
        }));
    };
    ProductListComponent.prototype.AddToCart = function (product) {
        this.store.dispatch(new productCart_action_1.AddProductToCart(product));
    };
    ProductListComponent.prototype.onFilterEvent = function (filters) {
        this.filters$.next(filters);
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'app-product-list',
            templateUrl: './product-list.component.html',
            styleUrls: ['./product-list.component.scss']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
