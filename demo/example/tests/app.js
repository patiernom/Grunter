describe("smoke test", function() {
    it("contains spec with an expectation", function() {
        expect(true).to.be.true;
    });
});

describe("money example", function() {
    it("multiply dollars by scalar", function() {
        var five = new Dollar(5);
        var ten = five.multiply(2);
        expect(ten.equals(new Dollar(5 * 2))).to.be.true;
        var fifteen = five.multiply(3);
        expect(fifteen.equals(new Dollar(5 * 3))).to.be.true;
    });
});