"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(lastname, firstname, civility, address, phone, email, login, password) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.civility = civility;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.login = login;
        this.password = password;
    }
    return Account;
}());
exports.Account = Account;
