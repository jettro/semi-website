import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';
import PubSub from 'pubsub-js';

const _setDataTarget = Symbol('Sets the data target for the button');
const _setDefaultState = Symbol('Sets the default case for the button');
const _setUseCaseKey = Symbol('Sets the use case key for the button');
const _setValue = Symbol('Sets the value for the button');

const config = require('../config');

export default class ButtonView {
  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static requiredController(controller) {
    if (!controller) {
      throw new Error('You must provide a ButtonRadioController.');
    }
    return controller;
  }

  static isRequired(parameter) {
    if(parameter === undefined) {
      throw new Error(`Parameter is required.`);
    }
    return parameter;
  }

  /**
   * @returns {string} the button html element as a string
   */
  static htmlString() {
    return `<button class="ui-button" type="button" aria-checked="false">
                <span class="ui-button__title"></span>
                <span class="ui-button__description"></span>
            </button>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = ButtonView.requiredController(controller);

    this.title = ButtonView.isRequired(this.controller.title);
    this.useCaseKey = this.controller.useCaseKey;
    this.showTarget = this.controller.showTarget;
    this.value = this.controller.value;
    this.valueType = this.controller.valueType;

    this.buttonElement = stringToHTMLCollection(ButtonView.htmlString())[0];
    this.buttonElement.addEventListener('click', this.controller);
    this.titleElement = this.buttonElement.getElementsByClassName('ui-button__title')[0];
    this.titleElement.innerText = this.title;

    /** only register to default click if it's this current constructor (not a inherited constructor) */
    if (this.constructor.name === 'ButtonView') {
      PubSub.subscribe('buttonClicked.default', (msg, data) => {

        if (this.buttonElement === data.clickedButton) {
          if (this.controller.active === true) {
            this.setActiveView();
          }
          if (this.controller.active === false) {
            this.removeActiveView();
          }
        }
      });
    }
  }

  removeActiveView() {
    this.buttonElement.classList.remove(config.classNameActive);
    this.buttonElement.setAttribute('aria-checked', 'false');
  }

  setActiveView() {
    this.buttonElement.classList.add(config.classNameActive);
    this.buttonElement.setAttribute('aria-checked', 'true');
  }

  init() {
    if (this.controller.isDefault === true) {
      this[_setDefaultState]();
    }
    if (typeof this.controller.useCaseKey !== 'undefined') {
      this[_setUseCaseKey](this.useCaseKey);
    }
    if (typeof this.controller.showTarget !== 'undefined') {
      this[_setDataTarget](this.showTarget);
    }
    if (typeof this.controller.value !== 'undefined') {
      this[_setValue](this.value);
    }
  }

  /**
   * @description creates an element to reuse in other element
   * @returns {Element | *}
   */
  create() {
    this.init();
    return this.buttonElement;
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if (!targetNode) return;
    this.init();
    targetNode.insertAdjacentElement('beforeend', this.buttonElement);
  }


  [_setUseCaseKey](key) {
    if (this.controller.useCaseKey !== undefined) this.buttonElement.dataset.useCase = key;
  }

  [_setDataTarget](target) {
    if (this.controller.showTarget !== undefined) this.buttonElement.dataset.targetShow = target;
  }

  [_setDefaultState]() {
    this.setActiveView();
    this.buttonElement.classList.add(config.classNameDefault);
  }

  [_setValue]() {
    if (typeof this.value !== 'undefined') {
      this.buttonElement.dataset[this.valueType] = this.value;
    }
  }
}
