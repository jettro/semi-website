import { describe } from 'mocha';
const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const isFunction = require('../typeChecking/isFunction').default;
const stringToHTMLCollection = require('./stringToHTMLCollection').default;

const domClasses = {
  first: 'first',
  second: 'second',
  nested: 'nested'
};

const mockHTML = `
    <div class="${domClasses.first}"></div>
    <div class="${domClasses.second}">
        <div>
            <div>
                <div>
                  <div class="${domClasses.nested}">
                  </div>
                <div>
            </div>
        </div>
    </div>`;

describe('stringToHTMLCollection...', function() {
  beforeEach(function() {
    global.Element = window.Element;
  });
  it(`should be a function [object Function]`, function() {
    expect(isFunction(stringToHTMLCollection)).to.equal(true);
  });
  it(`should convert a string to a HTML element`, function() {
    expect(mockHTML).to.be.a('string');
    const isValidHTML = stringToHTMLCollection(mockHTML)[0] instanceof Element;
    expect(isValidHTML).to.equal(true);
  });
  it(`should return the first element`, function() {
    /** @type {HTMLElement} */
    const [firstElement] = stringToHTMLCollection(mockHTML);
    expect(firstElement.classList.contains(domClasses.first)).to.equal(true);
  });
  it(`should return the second element`, function() {
    /** @type {HTMLElement} */
    const secondElement = stringToHTMLCollection(mockHTML)[1];
    expect(secondElement.classList.contains(domClasses.second)).to.equal(true);
  });
  it(`should return a nested element (tested 4 levels deep)`, function() {
    /** @type {HTMLElement} */
    const secondElement = stringToHTMLCollection(mockHTML)[1];
    /** @type {Element} */
    const thirdElement = secondElement.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
    expect(thirdElement.classList.contains(domClasses.nested)).to.equal(true);
  });
});
