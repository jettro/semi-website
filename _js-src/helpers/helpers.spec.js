import { describe } from 'mocha';
const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const elementExists = require('./helpers').elementExists;

describe('elementExists...', function() {
  beforeEach(function() {
    const { window } = new JSDOM('<!doctype html><html><div></div></html>');
    global.window = window;
  });
  it(`should be a function [object Function]`, function() {
    expect(Object.prototype.toString.call(elementExists)).to.equal('[object Function]');
  });
  it(`should return 'false' if the function is called without function arguments`, function() {
    expect(elementExists()).to.equal(false);
  });
  it(`should return 'false' if the element doesn't exist`, function() {
    const falseElement = global.window.document.querySelector('p');
    expect(elementExists(falseElement)).to.equal(false);
  });
  it(`should return 'true' if the element does exist`, function() {
    const mockElement = global.window.document.querySelector('div');
    expect(elementExists(mockElement)).to.equal(true);
  });
});
