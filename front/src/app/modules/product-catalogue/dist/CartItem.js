"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CartItem = void 0;
var Product_1 = require("./Product");
var CartItem = /** @class */ (function (_super) {
    __extends(CartItem, _super);
    function CartItem(name, description, price) {
        var _this = _super.call(this, name, description, price) || this;
        _this.quantity = 0;
        return _this;
    }
    return CartItem;
}(Product_1.Product));
exports.CartItem = CartItem;
