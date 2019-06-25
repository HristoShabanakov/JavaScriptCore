const expect = require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof (num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcerObject", function () {
    it("AddFive with positive number, should return the number + 5", function () {
        let expectedResult = mathEnforcer.addFive(10);

        expect(expectedResult).to.equal(15, "function return result with positive number");
    });

    it("AddFive with negative number, should return the number - 5", function () {
        let expectedResult = mathEnforcer.addFive(-10);

        expect(expectedResult).to.equal(-5, "function return result with negative number");
    });

    it("AddFive with floating-point number, should return the number + 5.5", function () {
        let expectedResult = mathEnforcer.addFive(10.5);

        expect(expectedResult).to.equal(15.5, "function return result with floating-point number");
    });

    it("AddFive with string as parameter", function () {
        let expectedResult = mathEnforcer.addFive("mathEnforcer");

        expect(expectedResult).to.equal(undefined, "function return undefined with string as parameter");
    });

    it("SubstractTen with positive number, should return the number - 10", function () {
        let expectedResult = mathEnforcer.subtractTen(10);

        expect(expectedResult).to.equal(0, "function return result with positive number");
    });

    it("SubstractTen with negative number, should return the number - 10", function () {
        let expectedResult = mathEnforcer.subtractTen(-10);

        expect(expectedResult).to.equal(-20, "function return result with negative number");
    });

    it("SubstractTen with floating-point number, should return the number - 10", function () {
        let expectedResult = mathEnforcer.subtractTen(10.5);

        expect(expectedResult).to.be.closeTo(0.5, 0.01, "function return result with floating-point number");
    });

    it("SubstractTen with string, should return undefined", function () {
        let expectedResult = mathEnforcer.subtractTen("10.5");

        expect(expectedResult).to.equal(undefined, "function return undefined with string as input");
    });

    it("Sum with two positive numbers should return their sum", () => {
        let expectedResult = mathEnforcer.sum(10, 10);

        expect(expectedResult).to.equal(20, "function return the sum of two positive numbers.")
    });

    it("Sum with two negative numbers should return their sum", () => {
        let expectedResult = mathEnforcer.sum(-10, -10);

        expect(expectedResult).to.equal(-20, "function return the sum of two negative numbers.")
    });

    it("Sum with two floating-point numbers should return their sum", () => {
        let expectedResult = mathEnforcer.sum(5.4, 6.7);

        expect(expectedResult).to.be.closeTo(12.1, 0.01, "function return the sum of two negative numbers.")
    });

    it("Sum with one number and string", () => {
        let expectedResult = mathEnforcer.sum(1, "2");

        expect(expectedResult).to.equal(undefined, "function return undefined with string as second parameter.")
    });

    it("Sum with one string and number", () => {
        let expectedResult = mathEnforcer.sum("1", 2);

        expect(expectedResult).to.equal(undefined, "function return undefined with string as first parameter.")
    });

});