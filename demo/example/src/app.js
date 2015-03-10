var Money = function(amount, currency) {
    this.amount = amount;
    this.currency = currency;
};

var Dollar = function(amount) {
    Money.call(this, amount, "USD");
};
Dollar.prototype = new Money();

var Franc = function(amount) {
    Money.call(this, amount, "CHF");
};
Franc.prototype = new Money();

Money.prototype.multiply = function(times) {
    return new Money(this.amount * times, this.currency);
};

Money.prototype.equals = function(other) {
    return this.amount === other.amount && this.currency == other.currency;
};