const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should use Utils.calculateNumber with correct parameters', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(
      calculateNumberStub,
      'SUM',
      100,
      20
    );
  });

  it('should log the correct message', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnceWithExactly(
      consoleLogSpy,
      'The total is: 10'
    );
  });
});
