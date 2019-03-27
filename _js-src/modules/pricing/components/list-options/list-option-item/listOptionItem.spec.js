//
// import { describe } from 'mocha';
// const { assert, expect } = require('chai');
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
//
// import ListOptionItemView from './ListOptionItem';
//
// describe('ListOptionItem...', function() {
//   beforeEach(function() {
//     global.dom = new JSDOM('<!doctype html><html><body></body></html>');
//     global.document = dom.window.document;
//   });
//
//   it(`should be a class constructor [object Function]`, function() {
//     expect(Object.prototype.toString.call(ListOptionItemView)).to.equal('[object Function]');
//   });
//
//   it(`should throw specific error if wrong types are passed in as arguments`, function() {
//     const string = '';
//     const object = {};
//     const array = [];
//     const map = new Map();
//     const errorMessageValue = `The parameter "value" is not a string [object String]".`;
//     const errorMessageValueType = `The parameter "valueType" is not a string [object String]".`;
//     assert.throws(() => new ListOptionItemView(object).init(), Error, errorMessageValue);
//     assert.throws(() => new ListOptionItemView(array).init(), Error, errorMessageValue);
//     assert.throws(() => new ListOptionItemView(map).init(), Error, errorMessageValue);
//     assert.throws(() => new ListOptionItemView('', object).init(), Error, errorMessageValueType);
//     assert.throws(() => new ListOptionItemView('', array).init(), Error, errorMessageValueType);
//     assert.throws(() => new ListOptionItemView('', map).init(), Error, errorMessageValueType);
//   });
//
//   it(`method .render() should return a HTMLUListElement`, function() {
//     expect(new ListOptionItemView().render()).to.be.a('HTMLLIElement');
//   });
//
// });
//
// describe.skip('ListOptionItem skipped...', function() {
//   it(`should filter the "config" if a config option is passed in (maybe this filter shouldn't be a part of this component, it should be filtered on forehand?)`, function() {});
//   it(`should set the value`, function() {});
// });
