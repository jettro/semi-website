import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';
import PubSub from 'pubsub-js';

const _setDataTarget = Symbol('Sets the data target for the button');
const _setDefaultState = Symbol('Sets the default case for the button');
const _setUseCaseKey = Symbol('Sets the use case key for the button');
const _setValue = Symbol('Sets the value for the button');

const config = {
  classNameActive: "ui-button--active",
  classNameDefault: "ui-button--default"
};

export default class ButtonView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a ButtonRadioController.');
    }
    return controller;
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
    this.controller = ButtonView.initialize(controller);
    this.buttonElement = stringToHTMLCollection(ButtonView.htmlString())[0];
    this.buttonElement.addEventListener('click', this.controller);
    this.titleElement = this.buttonElement.getElementsByClassName('ui-button__title')[0];
    this.titleElement.innerText = this.controller.title;
    this.value = this.controller.value;
    this.valueType = this.controller.valueType;

    /** only allow toggle for ButtonView element itself, and not it's prototype inheritance */
    if (this.constructor.name === 'ButtonView') {
      PubSub.subscribe('buttonClicked.default', (msg, data) => {
        if (this.buttonElement === data.clickedButton) {
            this.toggleState();
        }
      });
    }
  }

  /**
   *
   */
  removeActiveState() {
    this.controller.active = false;
    this.buttonElement.classList.remove(config.classNameActive);
    this.buttonElement.setAttribute('aria-checked', 'false');
  }

  /**
   *
   */
  setActiveState() {
    this.controller.active = true;
    this.buttonElement.classList.add(config.classNameActive);
    this.buttonElement.setAttribute('aria-checked', 'true');
  }

  /**
   *
   */
  toggleState() {
    if (this.controller.active === true) {
      this.removeActiveState();
    } else {
      this.setActiveState();
    }
  }

  /**
   *
   */
  init() {
    if (this.controller.isDefault === true) {
      this[_setDefaultState]();
    }
    if (typeof(this.controller.useCaseKey) !== 'undefined') {
      this[_setUseCaseKey](this.controller.useCaseKey);
    }
    if (typeof(this.controller.showTarget) !== 'undefined') {
      this[_setDataTarget](this.controller.showTarget);
    }
    if (typeof(this.controller.value) !== 'undefined') {
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
    if(!targetNode) return;
    this.init();
    targetNode.insertAdjacentElement('beforeend', this.buttonElement);
  }

  [_setUseCaseKey](key) {
    if (this.controller.useCaseKey !== undefined)
      this.buttonElement.dataset.useCase = key;
  }

  [_setDataTarget](target) {
    if (this.controller.showTarget !== undefined)
      this.buttonElement.dataset.targetShow = target;
  }

  [_setDefaultState]() {
    this.setActiveState();
    this.buttonElement.classList.add(config.classNameDefault);
  }

  [_setValue]() {
    if (typeof(this.value) !== 'undefined') {
      this.buttonElement.dataset[this.valueType] = this.value;
    }
  }
}
