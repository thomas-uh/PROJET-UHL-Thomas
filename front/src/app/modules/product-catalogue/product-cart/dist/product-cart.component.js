"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductCartComponent = void 0;
var productCart_action_1 = require("../../../shared/actions/productCart-action");
var core_1 = require("@angular/core");
var product_state_1 = require("../../../shared/states/product-state");
var ProductCartComponent = /** @class */ (function () {
    function ProductCartComponent(store) {
        this.store = store;
    }
    ProductCartComponent.prototype.ngOnInit = function () {
        this.productCart$ = this.store.select(function (state) { return state.productCart.products; });
        this.cartSize$ = this.store.select(product_state_1.ProductState.getNbOfProducts);
        this.cartValue$ = this.store.select(product_state_1.ProductState.getCartValue);
    };
    ProductCartComponent.prototype.ClearCart = function () {
        this.store.dispatch(new productCart_action_1.ClearCart());
    };
    ProductCartComponent.prototype.RemoveOneUnitFromCart = function (cartItem) {
        this.store.dispatch(new productCart_action_1.RemoveOneUnit(cartItem));
    };
    ProductCartComponent.prototype.RemoveFromCart = function (cartItem) {
        this.store.dispatch(new productCart_action_1.RemoveFromCart(cartItem));
    };
    ProductCartComponent = __decorate([
        core_1.Component({
            selector: 'app-product-cart',
            templateUrl: './product-cart.component.html',
            styleUrls: ['./product-cart.component.scss']
        })
    ], ProductCartComponent);
    return ProductCartComponent;
}());
exports.ProductCartComponent = ProductCartComponent;
