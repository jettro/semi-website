import { describe } from 'mocha';
const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

import ButtonRadio from './ButtonRadio';

describe('ButtonRadio...', function() {
  beforeEach(function() {
    global.dom = new JSDOM('<!doctype html><html><body></body></html>');
    global.document = dom.window.document;
    global.title = 'my test title';
    global.mockRadioButton = new ButtonRadio(title);
  });

  it(`should be a class constructor [object Function]`, function() {
    /** note: Javascript doesn't have a true class type, it's a function */
    expect(Object.prototype.toString.call(ButtonRadio)).to.equal('[object Function]');
  });

  it(`method .render() should return a HTMLButtonElement`, function() {
    expect(mockRadioButton.render()).to.be.a('HTMLButtonElement');
  });

});

describe.skip('ButtonRadio skipped...', function() {
  it(`method .render() should have the title`, function() {});
});
