const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(3.4, 5.8, 'SUM'), 9);
  });

  it('should return the difference of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(2.5, -1.2, 'SUBTRACT'), 4);
  });

  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber(3.4, 0.3, 'DIVIDE'), 'Error');
  });

  it('should return the quotient of dividing two rounded numbers', () => {
    assert.strictEqual(calculateNumber(0.5, 6.3, 'DIVIDE'), (1 / 6));
  });
});
