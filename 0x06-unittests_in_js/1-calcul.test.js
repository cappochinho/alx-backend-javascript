const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('based on the type of operation passed', () => {
    assert.strictEqual(calculateNumber(3.4, 5.8, 'SUM'), 9);
    assert.strictEqual(calculateNumber(2.5, -1.2, 'SUBTRACT'), 4);
    assert.strictEqual(calculateNumber(3.4, 0.3, 'DIVIDE'), 'Error');
    assert.strictEqual(calculateNumber(0.5, 6.3, 'DIVIDE'), (1/6));
  })
})
