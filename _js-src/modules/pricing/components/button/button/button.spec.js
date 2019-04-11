import { describe } from 'mocha';
const { expect } = require('chai');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

import ButtonModel from './Button.model';
import ButtonController from './Button.controller';
import ButtonView from './Button.view';

import buttonComponent from './';

describe('Button...', function() {
  beforeEach(function() {
    global.dom = new JSDOM('<!doctype html><html lang="en"><div id="container"></div><body></body></html>');
    global.document = dom.window.document;
    global.title = 'my test title';
    global.useCaseKey = 'AB';
    global.value = 999;
    global.valueTypeDefault = 'multiplier';
    global.valueType = 'anything';
    global.isDefault = true;
    global.showTarget = 'targetElementName';
    global.scopedPubSub = 'someScope';

    global.optionRequiredParams = { title: title };
    const mockButtonModelRequiredParams = new ButtonModel(optionRequiredParams),
      mockButtonControllerRequiredParams = new ButtonController(mockButtonModelRequiredParams);
    global.mockButtonRequiredParams = new ButtonView(mockButtonControllerRequiredParams);

    global.optionAllParams = {
      title: title,
      useCaseKey: useCaseKey,
      value: value,
      valueType: valueType,
      default: isDefault,
      showtarget: showTarget
    };
    const mockButtonModelAllParams = new ButtonModel(optionAllParams),
      mockButtonControllerAllParams = new ButtonController(mockButtonModelAllParams);
    global.mockButtonAllParams = new ButtonView(mockButtonControllerAllParams);
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
    expect(mockButtonAllParams.controller.title).to.equal(title);
    expect(mockButtonAllParams.controller.useCaseKey).to.equal(useCaseKey);
    expect(mockButtonAllParams.controller.value).to.equal(value);
    expect(mockButtonAllParams.controller.valueType).to.equal(valueType);
    expect(mockButtonAllParams.controller.isDefault).to.equal(isDefault);
  });

  it(`method .setActiveState() should set the active state in the controller of the button`, function() {
    expect(mockButtonRequiredParams.controller.active).to.equal(false);
    mockButtonRequiredParams.setActiveState();
    expect(mockButtonRequiredParams.controller.active).to.equal(true);
  });

  it(`method .removeActiveState() should remove the active state in the controller of the button`, function() {
    mockButtonRequiredParams.setActiveState();
    expect(mockButtonRequiredParams.controller.active).to.equal(true);
    mockButtonRequiredParams.removeActiveState();
    expect(mockButtonRequiredParams.controller.active).to.equal(false);
  });

  it(`method .toggleState() should toggle the active state in the controller of the button`, function() {
    expect(mockButtonRequiredParams.controller.active).to.equal(false);
    mockButtonRequiredParams.toggleState();
    expect(mockButtonRequiredParams.controller.active).to.equal(true);
    mockButtonRequiredParams.toggleState();
    expect(mockButtonRequiredParams.controller.active).to.equal(false);
  });

  it(`method .create() should return a HTMLButtonElement`, function() {
    expect(mockButtonRequiredParams.create()).to.be.a('HTMLButtonElement');
  });

  it(`method .create() should create a button with the defined title`, function() {
    const button = buttonComponent({ title: title }).create();
    const [titleElement] = button.getElementsByClassName('ui-button__title');
    expect(titleElement.innerText).to.equal(title);
  });

  it(`method .create() should create a button which doesn't match predefined title`, function() {
    const button = buttonComponent({ title: 'this is some other title' }).create();
    const [titleElement] = button.getElementsByClassName('ui-button__title');
    expect(titleElement.innerText).to.not.equal(title);
  });

  it(`should throw error if no title is defined, title should be assigned via parameter`, function() {
    expect(() => buttonComponent().create()).to.throw();
    const button = buttonComponent({ title: title }).create();
    expect(button.getElementsByClassName('ui-button__title')[0].innerText).to.equal(title);
  });

  it(`usecaseKey should be assigned via parameter`, function() {
    const button = buttonComponent({ title: title, useCaseKey: useCaseKey }).create();
    expect(button.dataset.useCase).to.equal(useCaseKey);
  });

  it(`value should be assigned via parameter, with a default valueType for the dataset`, function() {
    const button = buttonComponent({ title: title, value: value }).create();
    expect(parseInt(button.dataset.multiplier)).to.equal(value);
    expect(Object.getOwnPropertyNames(button.dataset)[0]).to.equal(valueTypeDefault);
  });

  it(`value should be assigned via parameter, valueType should be adjustable via parameter`, function() {
    const button = buttonComponent({ title: title, value: value, valueType: valueType }).create();
    expect(Object.getOwnPropertyNames(button.dataset)[0]).to.equal(valueType);
  });

  it(`default should be undefined, or defined via parameter`, function() {
    const button1 = buttonComponent({ title: title });
    expect(button1.controller.model.isDefault).to.equal(undefined);
    const button2 = buttonComponent({ title: title, default: true });
    expect(button2.controller.model.isDefault).to.equal(true);
  });

  it(`scope can be defined via parameter`, function() {
    const button = buttonComponent({ title: title }, "test-scope");
    expect(button.controller.scope).to.equal("test-scope");
  });

  it(`method .renderInto() should insertAdjacentElement into target`, function() {
    const container = document.getElementById('container');
    mockButtonAllParams.renderInto(container);
    expect(container.getElementsByTagName('button')[0]).to.be.a('HTMLButtonElement');
  });
});
