const calculateNumber = require('./2-calcul_chai');
const { expect } = require('chai');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber(3.4, 5.8, 'SUM')).to.equal(9);
  });

  it('should return the difference of two rounded numbers', () => {
    expect(calculateNumber(2.5, -1.2, 'SUBTRACT')).to.equal(4);
  });

  it('should return "Error" when dividing by zero', () => {
    expect(calculateNumber(3.4, 0.3, 'DIVIDE')).to.equal('Error');
  });

  it('should return the quotient of dividing two rounded numbers', () => {
    expect(calculateNumber(0.5, 6.3, 'DIVIDE')).to.equal(1/6);
  });
});
