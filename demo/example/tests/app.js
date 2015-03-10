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

    it("multiply francs by scalar", function() {
        var five = new Franc(5);
        var ten = five.multiply(2);
        expect(ten.equals(new Franc(5 * 2))).to.be.true;
    });

    it("equality", function() {
        var a = new Dollar(5);
        var b = new Dollar(5);
        expect(a.equals(b)).to.be.true;
        var c = new Dollar(6);
        expect(c.equals(a)).to.be.false;
        var d = new Franc(6);
        expect(c.equals(d)).to.be.false;
        expect(d.equals(c)).to.be.false;
    });

    it("dollar currency", function() {
        var dollar = new Dollar(5);
        expect(dollar.currency).equals("USD");
    });

    it("franc currency", function() {
        var franc = new Franc(5);
        expect(franc.currency).equals("CHF");
    });
});