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

  it(`method .create() should return a string`, function() {
    expect(mockRadioButton.create()).to.be.a('string');
  });

  it(`when instance is created using method .create(), the title should be set`, function() {
    const createdRadioButton = mockRadioButton.create();
    expect(createdRadioButton).to.contain(global.title);
  });

});

describe.skip('ButtonRadio skipped...', function() {
  it(`method .render() should also have the title`, function() {});
});
