var Money = function(amount, currency) {
    this.amount = amount;
    this.currency = currency;
};

Money.prototype.multiply = function(times) {
    return new Money(this.amount * times, this.currency);
};