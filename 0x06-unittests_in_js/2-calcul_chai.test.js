const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber('SUM', 3.4, 5.8)).to.equal(9);
  });

  it('should return the difference of two rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 2.5, -1.2)).to.equal(4);
  });

  it('should return "Error" when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 3.4, 0.3)).to.equal('Error');
  });

  it('should return the quotient of dividing two rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 0.5, 6.3)).to.equal(1/6);
  });
});
