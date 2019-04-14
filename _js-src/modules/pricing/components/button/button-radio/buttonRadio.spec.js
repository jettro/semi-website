import { describe } from 'mocha';
const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const config = require('../config');

const optionRequiredParams = require('../mockOptionRequiredParams');
const optionAllParams = require('../mockOptionAllParams');

import ButtonRadioModel from '../button-radio/ButtonRadio.model';
import ButtonRadioController from '../button-radio/ButtonRadio.controller';
import ButtonRadioView from '../button-radio/ButtonRadio.view';

import buttonComponent from '../button';

describe('component ButtonRadio...', function() {

  let dom;
  let mockButtonRequiredParams;
  let mockButtonAllParams;

  beforeEach(function() {
    dom = new JSDOM('<!doctype html><html lang="en"><div id="container"></div><body></body></html>');
    // global.window = dom.window;
    global.document = dom.window.document;

    /** mock data */
    // optionRequiredParams = optionRequiredParams;
    // optionAllParams = optionAllParams;

    const mockButtonModelRequiredParams = new ButtonRadioModel(optionRequiredParams),
      mockButtonControllerRequiredParams = new ButtonRadioController(mockButtonModelRequiredParams);
    mockButtonRequiredParams = new ButtonRadioView(mockButtonControllerRequiredParams);

    const mockButtonModelAllParams = new ButtonRadioModel(optionAllParams),
      mockButtonControllerAllParams = new ButtonRadioController(mockButtonModelAllParams);
    mockButtonAllParams = new ButtonRadioView(mockButtonControllerAllParams);
  });

  it(`MVC should be class constructors [object Function]`, function() {
    /** note: Javascript doesn't have a true class type, it's a function */
    expect(Object.prototype.toString.call(ButtonRadioModel)).to.equal('[object Function]');
    expect(Object.prototype.toString.call(ButtonRadioController)).to.equal('[object Function]');
    expect(Object.prototype.toString.call(ButtonRadioView)).to.equal('[object Function]');
  });

  it(`creating a view without providing a controller should throw an error`, function() {
    expect(() => new ButtonRadioView()).to.throw();
  });

  it(`method .setActiveStateByElement() should ...`, function() {
    expect(mockButtonRequiredParams.buttonElement.classList.contains(config.classNameActive)).to.equal(false);
    mockButtonRequiredParams.setActiveStateByElement();
    expect(mockButtonRequiredParams.buttonElement.classList.contains(config.classNameActive)).to.equal(true);
  });

  it(`method .removeActiveStateByElement() should ...`, function() {
    mockButtonRequiredParams.setActiveStateByElement();
    expect(mockButtonRequiredParams.buttonElement.classList.contains(config.classNameActive)).to.equal(true);
    mockButtonRequiredParams.removeActiveStateByElement();
    expect(mockButtonRequiredParams.buttonElement.classList.contains(config.classNameActive)).to.equal(false);
  });

  // it(`method _removeOtherActiveStates() should ...`, function() {
  //   const container = document.getElementById('container');
  //
  //   // buttonComponent({ title: optionAllParams.title }).renderInto(container);
  //   // buttonComponent({ title: optionAllParams.title }).renderInto(container);
  //   // buttonComponent({ title: optionAllParams.title }).renderInto(container);
  //
  //   // const button1 = container.children[0];
  //   // const button2 = container.children[1];
  //   // const button3 = container.children[2];
  //
  //   // test to see if all children are inactive
  //
  //   const button1 = buttonComponent({ title: optionAllParams.title }).create();
  //
  //   button1.addEventListener('click', function() {
  //     console.log('I was clicked');
  //   });
  //
  //   // const event = new MouseEvent('click', { bubbles: true, cancelable: false, composed: false });
  //   const event = new window.MouseEvent('click');
  //   // event.initEvent('click', true, true);
  //   button1.dispatchEvent(event);
  //
  //   console.log(button1.classList);
  //
  //   // when one is clicked set it active
  //
  //   // check to see if the others are inactive
  //
  //   // set another one active
  //
  // });

  describe.skip('click events on component', function() {
    it(`pubsub event cannot be tested since it's not picked up in Node`, function() {});
  });
});
