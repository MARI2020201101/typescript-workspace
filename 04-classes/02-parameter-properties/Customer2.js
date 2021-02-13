"use strict";
var Customer2 = /** @class */ (function () {
    function Customer2(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
        this.firstname = _firstname;
        this.lastname = _lastname;
    }
    Object.defineProperty(Customer2.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (firstname) {
            this._firstname = firstname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer2;
}());
var customer2 = new Customer2("mari", "kuga");
console.log(customer2);
console.log(customer2.firstname);
console.log(customer2.lastname);
