"use strict";
exports.__esModule = true;
exports.ClearCart = exports.RemoveFromCart = exports.RemoveOneUnit = exports.AddProductToCart = void 0;
var AddProductToCart = /** @class */ (function () {
    function AddProductToCart(payload) {
        this.payload = payload;
    }
    AddProductToCart.type = '[Product Cart] Add';
    return AddProductToCart;
}());
exports.AddProductToCart = AddProductToCart;
var RemoveOneUnit = /** @class */ (function () {
    function RemoveOneUnit(payload) {
        this.payload = payload;
    }
    RemoveOneUnit.type = '[Product Cart] RemoveOne';
    return RemoveOneUnit;
}());
exports.RemoveOneUnit = RemoveOneUnit;
var RemoveFromCart = /** @class */ (function () {
    function RemoveFromCart(payload) {
        this.payload = payload;
    }
    RemoveFromCart.type = '[Product Cart] Remove';
    return RemoveFromCart;
}());
exports.RemoveFromCart = RemoveFromCart;
var ClearCart = /** @class */ (function () {
    function ClearCart() {
    }
    ClearCart.type = '[Product Cart] Clear';
    return ClearCart;
}());
exports.ClearCart = ClearCart;
