const {describe, it} = require('mocha');
const assert = require('assert');
const Pow = require('../src/app/components/utils');

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