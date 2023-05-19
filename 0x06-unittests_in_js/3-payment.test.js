const sinon = require('sinon');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberSpy;

  beforeEach(() => {
      calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    calculateNumberSpy.restore();
  });

  it('should use Utils.calculateNumber with correct parameters', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(
      calculateNumberSpy,
      'SUM',
      100,
      20
    );
  });
});
