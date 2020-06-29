const {describe, it} = require('mocha');
const assert = require('assert');
const Pow = require('../src/app/components/utils');

describe('Pow', function () {

    function makeTest(x) {
        let expected = x * x * x;
        const v = Pow.pow(2,2);
        console.log(v);
        it(`${x} в степени 3 будет ${expected}`, function () {
            assert.equal(Pow.pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }

});