import { describe } from 'mocha';
const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const isFunction = require('../typeChecking/isFunction').default;
const localizeStringToNumber = require('./localizeNumber').default;

/**
 * In JS use the decimals always by point
 */
const numberDefaultNotation = parseFloat('1000000.10');

describe('localizeStringToNumber...', function() {
  // beforeEach(function() {});
  it(`should be a function [object Function]`, function() {
    expect(isFunction(localizeStringToNumber)).to.equal(true);
  });
  /** does not work */
  // it(`should return in European format`, function() {
  //   expect(localizeStringToNumber(numberDefaultNotation)).to.equal('1.000.000,10');
  // });
});