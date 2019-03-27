import { describe } from 'mocha';
const expect = require('chai').expect;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const isFunction = require('../typeChecking/isFunction').default;
const getClosest = require('./getClosest').default;

const domClasses = {
  first: 'first-level',
  second: 'second-level',
  third: 'third-level'
};

describe('getClosest...', function() {
  beforeEach(function() {
    const { window } = new JSDOM(`
        <!doctype html><html>
            <div class="${domClasses.third}">
                <div class="${domClasses.second}">
                    <section class="${domClasses.first}">
                        <p>This is some <span>example</span>text</p>
                    </section>
                </div>
            </div>
        </html>`);
    global.window = window;
    global.document = window.document;
    global.Element = window.Element;
  });
  it(`should be a function [object Function]`, function() {
    expect(isFunction(getClosest)).to.equal(true);
  });
  it(`should throw exception if the first argument is not of type Element`, function() {
    expect(() => getClosest('0', 'div')).to.throw();
  });
  it(`should throw exception is the second argument isn't of type 'Selector String'`, function() {
    const element = global.window.document.querySelector('p');
    expect(() => getClosest(element, '0')).to.throw();
  });
  it(`should find the closest section`, function() {
    const paragraphElement = global.window.document.querySelector('p');
    expect(getClosest(paragraphElement, 'section').classList[0]).to.equal(domClasses.first);
  });
  it(`should skip the closest section and find the first closest div`, function() {
    const paragraphElement = global.window.document.querySelector('p');
    expect(getClosest(paragraphElement, 'div').classList[0]).to.equal(domClasses.second);
  });
  it(`should find an parent element even if it's the same type`, function() {
    const paragraphElement = global.window.document.querySelector('p');
    expect(getClosest(paragraphElement, 'section').classList[0]).to.equal(domClasses.first);
  });
});
