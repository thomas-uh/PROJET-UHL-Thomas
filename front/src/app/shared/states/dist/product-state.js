"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ProductState = void 0;
var CartItem_1 = require("./../CartItem");
var store_1 = require("@ngxs/store");
var productCart_action_1 = require("./../actions/productCart-action");
var ProductState = /** @class */ (function () {
    function ProductState() {
    }
    ProductState.getNbOfProducts = function (state) {
        var cartSize = 0;
        state.products.forEach(function (item) {
            cartSize += item.quantity;
        });
        return cartSize;
    };
    ProductState.getCartValue = function (state) {
        var cartValue = 0;
        state.products.forEach(function (item) {
            cartValue += (item.quantity * item.price);
        });
        return cartValue;
    };
    ProductState.prototype.add = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var state = getState();
        var index = state.products.findIndex(function (element) { return element.name === payload.name; });
        // Le produit n'est pas encore dans le panier
        if (index === -1) {
            var cartItem = new CartItem_1.CartItem(payload.name, payload.description, payload.price);
            cartItem.quantity = 1;
            patchState({
                products: __spreadArrays(state.products, [cartItem])
            });
        }
        else {
            var updatedCart = state.products;
            updatedCart[index].quantity++;
            patchState({
                products: updatedCart
            });
        }
    };
    ProductState.prototype.removeOne = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var state = getState();
        var index = state.products.findIndex(function (element) { return element.name === payload.name; });
        if (index !== -1) {
            var updatedCart = state.products;
            updatedCart[index].quantity--;
            if (updatedCart[index].quantity === 0) {
                updatedCart.splice(index, 1);
            }
            patchState({
                products: updatedCart
            });
        }
    };
    ProductState.prototype.remove = function (_a, _b) {
        var getState = _a.getState, patchState = _a.patchState;
        var payload = _b.payload;
        var state = getState();
        var index = state.products.findIndex(function (element) { return element.name === payload.name; });
        if (index !== -1) {
            var updatedCart = state.products;
            updatedCart.splice(index, 1);
            patchState({
                products: updatedCart
            });
        }
    };
    ProductState.prototype.clear = function (_a) {
        var getState = _a.getState, patchState = _a.patchState;
        var state = getState();
        patchState({
            products: []
        });
    };
    __decorate([
        store_1.Action(productCart_action_1.AddProductToCart)
    ], ProductState.prototype, "add");
    __decorate([
        store_1.Action(productCart_action_1.RemoveOneUnit)
    ], ProductState.prototype, "removeOne");
    __decorate([
        store_1.Action(productCart_action_1.RemoveFromCart)
    ], ProductState.prototype, "remove");
    __decorate([
        store_1.Action(productCart_action_1.ClearCart)
    ], ProductState.prototype, "clear");
    __decorate([
        store_1.Selector()
    ], ProductState, "getNbOfProducts");
    __decorate([
        store_1.Selector()
    ], ProductState, "getCartValue");
    ProductState = __decorate([
        store_1.State({
            name: 'productCart',
            defaults: {
                products: []
            }
        })
    ], ProductState);
    return ProductState;
}());
exports.ProductState = ProductState;
