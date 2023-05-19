const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round the arguments and return the sum', () => {
    assert.strictEqual(calculateNumber(1.4, 2.7), 4);
    assert.strictEqual(calculateNumber(2.5, 3.2), 6);
    assert.strictEqual(calculateNumber(2.1, 4.9), 7);
  });
});
