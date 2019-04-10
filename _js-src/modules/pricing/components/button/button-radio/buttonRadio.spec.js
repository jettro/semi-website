import { describe } from 'mocha';
const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// import { ButtonRadioModel, ButtonRadioController, ButtonRadioView } from './';
//
// describe('ButtonRadio...', function() {
//   beforeEach(function() {
//     global.dom = new JSDOM('<!doctype html><html><body></body></html>');
//     global.document = dom.window.document;
//     global.title = 'my test title';
//     global.model = new ButtonRadioModel(title);
//     global.controller = new ButtonRadioController(model);
//     global.view = new ButtonRadioView(controller);
//   });
//
//   it(`MVC should be a class constructors [object Function]`, function() {
//     /** note: Javascript doesn't have a true class type, it's a function */
//     expect(Object.prototype.toString.call(ButtonRadioModel)).to.equal('[object Function]');
//     expect(Object.prototype.toString.call(ButtonRadioController)).to.equal('[object Function]');
//     expect(Object.prototype.toString.call(ButtonRadioView)).to.equal('[object Function]');
//   });
//
//   it(`method .render() should return a HTMLButtonElement`, function() {
//     expect(view.render()).to.be.a('HTMLButtonElement');
//   });
//
// });
//
// describe.skip('ButtonRadio skipped...', function() {
//   it(`method .render() should have the title`, function() {});
// });
