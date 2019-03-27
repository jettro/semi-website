import { describe } from 'mocha';
const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const isFunction = require('../typeChecking/isFunction').default;
const inputExistsOfType = require('./inputExistsOfType').default;

describe('inputExistsOfType...', function() {
  beforeEach(function() {
  const { window } = new JSDOM(`
    <!doctype html><html>
        <label>Example range</label>
        <input type="range" />
        <label>Example text</label>
        <input type="text" />
        <label>Another example text</label>
        <input type="text" />
    </html>`);
    global.window = window;
    global.document = window.document;
    global.Element = window.Element;
    global.HTMLCollection = window.HTMLCollection;
  });
  it(`should be a function [object Function]`, function() {
    expect(isFunction(inputExistsOfType)).to.equal(true);
  });
  it(`should be able to handle one input field with a to determined attribute`, function() {
    const nodeList = document.querySelectorAll('[type="range"]');
    expect(inputExistsOfType(nodeList, 'range')).to.be.equal(true);
  });
  it(`should throw exception if the first argument is of type Element`, function() {
    const [singleInputField] = document.querySelectorAll('[type="range"]');
    expect(() => inputExistsOfType(singleInputField, 'range')).to.throw();
  });
  it(`should be able to handle multiple input fields with a to determined attribute`, function() {
    const htmlCollection = document.getElementsByTagName('INPUT');
    expect(inputExistsOfType(htmlCollection, 'text')).to.be.equal(true);
  });
  it(`should throw exception is the second argument isn't of type 'Selector String'`, function() {
    const htmlCollection = document.getElementsByTagName('INPUT');
    expect(() => inputExistsOfType(htmlCollection, true)).to.throw();
  });
});
