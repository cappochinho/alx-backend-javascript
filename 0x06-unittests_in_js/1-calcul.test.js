const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 3.4, 5.8), 9);
  });

  it('should return the difference of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 2.5, -1.2), 4);
  });

  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 3.4, 0.3), 'Error');
  });

  it('should return the quotient of dividing two rounded numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 0.5, 6.3), (1 / 6));
  });
});
