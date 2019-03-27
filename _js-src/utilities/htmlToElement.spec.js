import { describe } from 'mocha';
const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const isFunction = require('../typeChecking/isFunction').default;
const htmlToElement = require('./htmlToElement').default;

const mockHTML = `<div class="test"></div>`;

describe('htmlToElement...', function() {
  beforeEach(function() {
    global.Element = window.Element;
  });
  it(`should be a function [object Function]`, function() {
    expect(isFunction(htmlToElement)).to.equal(true);
  });
  it(`should convert a string to a HTML element`, function() {
    expect(mockHTML).to.be.a('string');
    const isValidHTML = htmlToElement(mockHTML) instanceof Element;
    expect(isValidHTML).to.equal(true);
  });
});
