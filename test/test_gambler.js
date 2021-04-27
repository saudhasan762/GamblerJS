const assert = require('chai').assert;
const utility = require('../utility');

describe('Gambler Simulation Testing', function(){
    it('Test Winning Bet', function(){
        let result = utility.calculateAmountForADay(1, 100, 0);
        assert.equal(result, 150);
    });

    it('Test Losing Bet', function(){
        let result = utility.calculateAmountForADay(0, 100, 0);
        assert.equal(result, 50);
    });
});