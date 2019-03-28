import stringToHTMLCollection from '../../../../utilities/stringToHTMLCollection';

import PubSub from 'pubsub-js';

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
    if (typeof(this.controller.showTarget) !== 'undefined') {
      this.setDataTarget();
    }
    if (this.controller.isDefault === true) {
      this.setDefaultState();
    }
    PubSub.subscribe('buttonClicked.default', (msg, data) => {
      this.toggleStates(msg, data)
    });
  }

  removeActiveState(button) {
    button.classList.remove("ui-button--active");
    button.setAttribute('aria-checked', 'false');
  }

  setActiveState() {
    this.buttonElement.classList.add("ui-button--active");
    this.buttonElement.setAttribute('aria-checked', 'true');
  }

  setDefaultState() {
    this.self.setActiveState();
    this.buttonElement.classList.add("ui-button--default");
  }

  setDataTarget() {
    this.buttonElement.dataset.targetShow = this.controller.showTarget;
  }

  toggleStates(msg, data) {
    if (data.button === this.buttonElement) {
      /** remove active state from all buttons in the same section */
      const listItems = data.radioList.getElementsByTagName('li');
      Object.keys(listItems).forEach(key => {
        const button = listItems[key].querySelector('[role="radio"]');
        this.self.removeActiveState(button);
      });
      /** then add the active state tot this specific button */
      this.self.setActiveState();
    }
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    if (this.controller.useCaseKey !== undefined)
      this.buttonElement.dataset.useCase = this.controller.useCaseKey;
    targetNode.insertAdjacentElement('beforeend', this.buttonElement);
  }
}
