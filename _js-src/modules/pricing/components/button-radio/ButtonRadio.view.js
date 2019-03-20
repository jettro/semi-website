import { htmlToElement } from '../../../../helpers/helpers';

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
    this.controller = ButtonRadioView.initialize(controller);
    this.html = htmlToElement(ButtonRadioView.htmlString());
    this.buttonElement = this.html;
    this.buttonElement.addEventListener('click', this.controller);
    this.titleElement = this.html.getElementsByClassName('ui-button__title')[0];
    this.titleElement.innerText = this.controller.title;
    PubSub.subscribe('buttonClicked', (msg, button) => { this.toggleStates(msg, button) });
  }

  toggleStates(msg, button) {
    if (button === this.buttonElement) {
      this.html.classList.add("ui-button--active");
      this.html.setAttribute('aria-checked', 'true');
    } else {
      this.html.classList.remove("ui-button--active");
      this.html.setAttribute('aria-checked', 'false');
    }
  }

  /**
   * Use this if you need to render the element
   * @returns {Element} the radio button
   */
  render() {
    if (this.controller.useCaseKey !== undefined)
      this.html.dataset.useCase = this.controller.useCaseKey;
    return this.html;
  }
}
