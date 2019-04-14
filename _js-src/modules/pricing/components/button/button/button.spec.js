import { describe } from 'mocha';
const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const config = require('../config');

const optionRequiredParams = require('../mockOptionRequiredParams');
const optionAllParams = require('../mockOptionAllParams');

import ButtonModel from './Button.model';
import ButtonController from './Button.controller';
import ButtonView from './Button.view';

import buttonComponent from './';

describe('component Button...', function() {

  let dom;
  let mockButtonRequiredParams;
  let mockButtonAllParams;

  beforeEach(function() {
    dom = new JSDOM(
      '<!doctype html><html lang="en"><div id="container"></div><body></body></html>',
    );
    global.document = dom.window.document;

    const mockButtonModelRequiredParams = new ButtonModel(optionRequiredParams),
      mockButtonControllerRequiredParams = new ButtonController(mockButtonModelRequiredParams);
    mockButtonRequiredParams = new ButtonView(mockButtonControllerRequiredParams);

    const mockButtonModelAllParams = new ButtonModel(optionAllParams),
      mockButtonControllerAllParams = new ButtonController(mockButtonModelAllParams);
    mockButtonAllParams = new ButtonView(mockButtonControllerAllParams);
  });

  it(`MVC should be class constructors [object Function]`, function() {
    /** note: Javascript doesn't have a true class type, it's a function */
    expect(Object.prototype.toString.call(ButtonModel)).to.equal('[object Function]');
    expect(Object.prototype.toString.call(ButtonController)).to.equal('[object Function]');
    expect(Object.prototype.toString.call(ButtonView)).to.equal('[object Function]');
  });

  it(`creating a view without providing a controller should throw an error`, function() {
    expect(() => new ButtonView()).to.throw();
  });

  it(`getters on controller should work`, function() {
    expect(mockButtonAllParams.controller.title).to.equal(optionAllParams.title);
    expect(mockButtonAllParams.controller.useCaseKey).to.equal(optionAllParams.useCaseKey);
    expect(mockButtonAllParams.controller.value).to.equal(optionAllParams.value);
    expect(mockButtonAllParams.controller.valueType).to.equal(optionAllParams.valueType);
    expect(mockButtonAllParams.controller.isDefault).to.equal(optionAllParams.default);
  });

  it(`check default state on controller`, function() {
    expect(mockButtonRequiredParams.controller.active).to.equal(false);
  });

  it(`method .setActiveState() should set the active state in the controller of the button`, function() {
    expect(mockButtonRequiredParams.buttonElement.classList.contains(config.classNameActive)).to.equal(false);
    expect(mockButtonRequiredParams.buttonElement.getAttribute('aria-checked')).to.equal('false');
    mockButtonRequiredParams.setActiveView();
    expect(mockButtonRequiredParams.buttonElement.classList.contains(config.classNameActive)).to.equal(true);
    expect(mockButtonRequiredParams.buttonElement.getAttribute('aria-checked')).to.equal('true');
  });

  it(`method .removeActiveState() should remove the active state in the controller of the button`, function() {
    mockButtonRequiredParams.setActiveView();
    expect(mockButtonRequiredParams.buttonElement.classList.contains(config.classNameActive)).to.equal(true);
    expect(mockButtonRequiredParams.buttonElement.getAttribute('aria-checked')).to.equal('true');
    mockButtonRequiredParams.removeActiveView();
    expect(mockButtonRequiredParams.buttonElement.classList.contains(config.classNameActive)).to.equal(false);
    expect(mockButtonRequiredParams.buttonElement.getAttribute('aria-checked')).to.equal('false');
  });

  it(`method .create() should return a HTMLButtonElement`, function() {
    expect(mockButtonRequiredParams.create()).to.be.a('HTMLButtonElement');
  });

  it(`method .create() should create a button with the defined title`, function() {
    const button = buttonComponent({ title: optionAllParams.title }).create();
    const [titleElement] = button.getElementsByClassName('ui-button__title');
    expect(titleElement.innerText).to.equal(optionAllParams.title);
  });

  it(`method .create() should create a button which doesn't match predefined title`, function() {
    const button = buttonComponent({ title: 'this is some other title' }).create();
    const [titleElement] = button.getElementsByClassName('ui-button__title');
    expect(titleElement.innerText).to.not.equal(optionAllParams.title);
  });

  it(`should throw error if no title is defined, title should be assigned via parameter`, function() {
    expect(() => buttonComponent().create()).to.throw();
    const button = buttonComponent({ title: optionAllParams.title }).create();
    expect(button.getElementsByClassName('ui-button__title')[0].innerText).to.equal(
      optionAllParams.title,
    );
  });

  it(`usecaseKey should be assigned via parameter`, function() {
    const button = buttonComponent({
      title: optionAllParams.title,
      useCaseKey: optionAllParams.useCaseKey,
    }).create();
    expect(button.dataset.useCase).to.equal(optionAllParams.useCaseKey);
  });

  it(`value should be assigned via parameter, with a default valueType for the dataset`, function() {
    const button = buttonComponent({
      title: optionAllParams.title,
      value: optionAllParams.value,
    }).create();
    expect(parseInt(button.dataset.multiplier)).to.equal(optionAllParams.value);
    expect(Object.getOwnPropertyNames(button.dataset)[0]).to.equal(
      optionAllParams.valueTypeDefault,
    );
  });

  it(`value should be assigned via parameter, valueType should be adjustable via parameter`, function() {
    const button = buttonComponent({
      title: optionAllParams.title,
      value: optionAllParams.value,
      valueType: optionAllParams.valueType,
    }).create();
    expect(Object.getOwnPropertyNames(button.dataset)[0]).to.equal(optionAllParams.valueType);
  });

  it(`default should be undefined, or defined via parameter`, function() {
    const button1 = buttonComponent({ title: optionAllParams.title });
    expect(button1.controller.model.isDefault).to.equal(undefined);
    const button2 = buttonComponent({ title: optionAllParams.title, default: true });
    expect(button2.controller.model.isDefault).to.equal(true);
  });

  it(`scope can be defined via parameter`, function() {
    const button = buttonComponent({ title: optionAllParams.title }, 'test-scope');
    expect(button.controller.scope).to.equal('test-scope');
  });

  it(`method .renderInto() should insertAdjacentElement into target`, function() {
    const container = document.getElementById('container');
    mockButtonAllParams.renderInto(container);
    expect(container.getElementsByTagName('button')[0]).to.be.a('HTMLButtonElement');
  });

  describe.skip('click events on component', function() {
    it(`pubsub event cannot be tested since it's not picked up in Node`, function() {});
  });
});
