const { describe, it } = require('mocha');
const assert = require('assert');
const Pow = require('../src/app/components/utils');
const Foo = require('../src/app/components/testing-functions');
const assert2 = require('chai').assert;

describe('Pow', function () {

    function makeTest(x) {
        let expected1 = x * x * x;
        let expected2 = Math.sqrt(x);
        const powItem = new Pow();
        it(`${x} в степени 3 будет ${expected1}`, function () {
            assert.equal(powItem.increaseVal(x, 3), expected1);
        });
        it(`корень из ${x} будет ${expected2}`, function () {
            assert.equal(powItem.sqrt(x), expected2);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }

});


describe("Sample tests", function () {
    const newItem = new Foo();
    it("should work for some integers", function () {
        assert2.equal(newItem.reverseBits(417), 267);
        assert2.equal(newItem.reverseBits(267), 417);
        assert2.equal(newItem.reverseBits(0), 0);
        assert2.equal(newItem.reverseBits(2017), 1087);
        assert2.equal(newItem.reverseBits(1023), 1023);
        assert2.equal(newItem.reverseBits(1024), 1);
        assert2.equal(newItem.reverseBits(Number.MAX_SAFE_INTEGER), Number.MAX_SAFE_INTEGER);
    });
});