const expect = require("chai").expect;

//check if first parameter - string returns undefined
//second parameter is not integer - returns undefined
//check the index (negative number or bigger number) - returns Incorrect index
//if all parameters are valid: character at the specified index is string

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe("lookupChar", function () {
    it("should return undefined with a non-string first parameter", function () {
        let expectedResult = lookupChar(1, 1);

        expect(expectedResult).to.equal(undefined, "first parameter should be string")
    });

    it("should return undefined with a non-integer second parameter", function () {
        let expectedResult = lookupChar("1", "1");

        expect(expectedResult).to.equal(undefined, "second parameter should be integer only!");
    });

    it("should return undefined with a non-integer second parameter", function () {
        let expectedResult = lookupChar("1", 1.5);

        expect(expectedResult).to.equal(undefined, "second parameter should be integer only!");
    });

    it("should return 'Incorrect index' with negative index", function () {
        let expectedResult = lookupChar("Hello", -6);

        expect(expectedResult).to.equal("Incorrect index", "function did not return correct index.");

    });

    it("should return 'Incorrect index' bigger than length index", function () {
        let expectedResult = lookupChar('Hello', 16);

        expect(expectedResult).to.equal("Incorrect index", "function did not return the correct index");
    });

    it("should return correct character", function () {
        let expectedResult = lookupChar("Hello", 1);

        expect(expectedResult).to.equal('e', "function return correct result.");
    });
});