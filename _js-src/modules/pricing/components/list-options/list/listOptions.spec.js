//
// import { describe } from 'mocha';
// const { assert, expect } = require('chai');
// const jsdom = require('jsdom');
// const { JSDOM } = jsdom;
//
// import ListOptionsComponent from './';
//
// describe('ListOptions...', function() {
//   beforeEach(function() {
//     // TODO: will need this when dom manipulation occurs (pending test case)
//     // global.dom = new JSDOM('<!doctype html><html><body></body></html>');
//     // global.document = dom.window.document;
//   });
//
//   it(`should be a class constructor [object Function]`, function() {
//     expect(Object.prototype.toString.call(ListOptionsComponent)).to.equal('[object Function]');
//   });
//
//   it(`should throw specific error if no children are passed in as arguments`, function() {
//     assert.throws(() => new ListOptionsComponent().init(), Error, "No child elements are provided. A list must have child list items.");
//   });
//
//   it(`should throw specific error if wrong types are passed in as arguments`, function() {
//     const string = '';
//     const object = {};
//     const array = [];
//     const map = new Map();
//     assert.throws(() => new ListOptions(string).init(), Error, "The parameter \"children\" is not a map [object Map]\".");
//     assert.throws(() => new ListOptions(object).init(), Error, "The parameter \"children\" is not a map [object Map]\".");
//     assert.throws(() => new ListOptions(array).init(), Error, "The parameter \"children\" is not a map [object Map]\".");
//     assert.doesNotThrow(() => new ListOptions(map).init(), Error, "The parameter \"children\" is not a map [object Map]\".");
//   });
//
//   it(`method .render() should return a HTMLUListElement`, function() {
//     const map = new Map();
//     expect(new ListOptions(map).render()).to.be.a('HTMLUListElement');
//   });
//
// });
//
// describe.skip('ListOptions skipped...', function() {
//   it(`method .render() with list items as arguments (parameter: children) should render list with list items`, function() {});
// });
