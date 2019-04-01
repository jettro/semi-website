import PubSub from 'pubsub-js';
import stringToHTMLCollection from '../../../../utilities/stringToHTMLCollection';

const _removeActiveState = Symbol('removeActiveState');
const _setActiveState = Symbol('setActiveState');
const _setDataTarget = Symbol('setDataTarget');
const _setDefaultState = Symbol('setDefaultState');
const _setUseCaseKey = Symbol('setUseCaseKey');
const _setValue = Symbol('createValue');
const _toggleStates = Symbol('toggleStates');

export default class ButtonRadioView {

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
    return `<button class="ui-button" type="button" role="radio" aria-checked="false">
                <span class="ui-button__radio-icon"></span>
                <span class="ui-button__title"></span>
                <span class="ui-button__description"></span>
            </button>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.self = this;
    this.controller = ButtonRadioView.initialize(controller);
    this.buttonElement = stringToHTMLCollection(ButtonRadioView.htmlString())[0];
    this.buttonElement.addEventListener('click', this.controller);
    this.titleElement = this.buttonElement.getElementsByClassName('ui-button__title')[0];
    this.titleElement.innerText = this.controller.title;
    this.value = this.controller.value;
    this.valueType = this.controller.valueType;

    PubSub.subscribe('buttonClicked.default', (msg, data) => {
      this[_toggleStates](msg, data);
    });
  }

  init() {
    if (this.controller.isDefault === true) {
      this[_setDefaultState]();
    }
    if (typeof(this.controller.useCaseKey) !== 'undefined') {
      this[_setUseCaseKey]();
    }
    if (typeof(this.controller.showTarget) !== 'undefined') {
      this[_setDataTarget]();
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

  [_setUseCaseKey]() {
    if (this.controller.useCaseKey !== undefined)
      this.buttonElement.dataset.useCase = this.controller.useCaseKey;
  }

  [_setActiveState]() {
    this.buttonElement.classList.add("ui-button--active");
    this.buttonElement.setAttribute('aria-checked', 'true');
  }

  [_setDefaultState]() {
    this.self[_setActiveState]();
    this.buttonElement.classList.add("ui-button--default");
  }

  [_setDataTarget]() {
    if (this.controller.showTarget !== undefined)
      this.buttonElement.dataset.targetShow = this.controller.showTarget;
  }

  [_removeActiveState](button) {
    button.classList.remove("ui-button--active");
    button.setAttribute('aria-checked', 'false');
  }

  [_toggleStates](msg, data) {
    if (data.button === this.buttonElement) {
      /** remove active state from all buttons in the same section */
      const listItems = data.radioList.getElementsByTagName('li');
      Object.keys(listItems).forEach(key => {
        const button = listItems[key].querySelector('[role="radio"]');
        this.self[_removeActiveState](button);
      });
      /** then add the active state tot this specific button */
      this.self[_setActiveState]();
    }
  }

  [_setValue]() {
    if (typeof(this.value) !== 'undefined') {
      this.buttonElement.dataset[this.valueType] = this.value;
    }
  }
}
