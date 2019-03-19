import { htmlToElement } from '../../../../helpers/helpers';

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
    this.titleElement = this.html.getElementsByClassName('ui-button__title')[0];
  }

  /**
   * Use this if you need to render the element
   * @returns {Element} the radio button
   */
  render() {
    this.titleElement.innerText = this.controller.getModelTitle();
    this.titleElement.addEventListener('click', this.controller);
    return this.html;
  }
}
