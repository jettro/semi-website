import { describe } from 'mocha';
const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const isFunction = require('../typeChecking/isFunction').default;
const localizeNumber = require('./localizeNumber').default;

/**
 * In JS use the decimals always by point
 */
const numberDefaultNotation = parseFloat('1000000.10');

describe('localizeNumber...', function() {
  beforeEach(function() {
    global.window = window;
  });
  it(`should be a function [object Function]`, function() {
    expect(isFunction(localizeNumber)).to.equal(true);
  });
  /**
   * Can't test: toLocaleString() does not work in this environment...
   */
  // it(`should return in European currency format`, function() {
  //   expect(localizeNumber(numberDefaultNotation, 'nl')).to.equal('1.000.000,1');
  // });
});