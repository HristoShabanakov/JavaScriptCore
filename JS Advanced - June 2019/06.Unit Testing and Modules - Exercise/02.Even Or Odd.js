const expect = require("chai").expect;

function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }

    if (string.length % 2 === 0) {
        return 'even';
    }
    return 'odd';
}

describe("isOddOrEven", function () {
    //if parameter is not string(number)
    //if parameter is not string(object)

    it("test with number parameter, should return undefined", function () {
        let expected = isOddOrEven(100);

        expect(expected).to.equal(undefined, "function did not return correct result")

    });

    it("test with object parameter, should return undefined.", function () {
        let expectedResult = isOddOrEven({
            name: "Test"
        });

        expect(expectedResult).to.be.equal(undefined, "function did not return correct result")
    });

    it("String parameter with even length, should return even", function () {
        let expectedResult = isOddOrEven("testeven");

        expect(expectedResult).to.be.equal("even", "function return string with even length");
    });

    it("String parameter with odd length, should return odd", function () {
        let expectedResult = isOddOrEven("javascripts");

        expect(expectedResult).to.be.equal("odd", "function return string with odd length");
    });
})