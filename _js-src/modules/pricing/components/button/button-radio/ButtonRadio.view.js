import ButtonView from '../button/Button.view';
import getClosest from '../../../../../utilities/getClosest';
import PubSub from 'pubsub-js';
import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

const _convertToRadio = Symbol('_convertToRadio: The method to convert a regular button to a radio button.');
const _removeOtherActiveStates = Symbol('_removeOtherActiveStates: Only one radio button may be active at a time.');

const config = {
  classNameActive: "ui-button--active",
  classNameDefault: "ui-button--default"
};

export default class ButtonRadioView extends ButtonView {

  static htmlRadioIcon() {
    return `<span class="ui-button__radio-icon"></span>`;
  }

  /**
   * @param element {object} the element to remove the active state from
   */
  static removeActiveStateByElement(element) {
    element.classList.remove(config.classNameActive);
    element.setAttribute('aria-checked', 'false');
  }

  /**
   * @param element {object} the element to set the active state on
   */
  static setActiveStateByElement(element) {
    element.classList.add(config.classNameActive);
    element.setAttribute('aria-checked', 'true');
  }

  constructor(controller) {
    super(controller);
    this._radioIcon = stringToHTMLCollection(ButtonRadioView.htmlRadioIcon())[0];
    this[_convertToRadio]();

    PubSub.subscribe('buttonClicked.default', (msg, data) => {
      this[_removeOtherActiveStates](msg, data);
    });
  }

  /**
   * @desc get's the siblings of the current radio button element
   * @returns {*}
   */
  get siblings() {
    const list = getClosest(this.buttonElement, 'UL');
    return list.getElementsByTagName('BUTTON');
  }

  /**
   * @desc adds radio icon to button
   */
  [_convertToRadio]() {
    this.buttonElement.setAttribute('role', 'radio');
    this.buttonElement.insertAdjacentElement('afterbegin', this._radioIcon);
  }

  /**
   * Removal of active state is done via element manipulation
   * @param msg
   * @param data
   */
  [_removeOtherActiveStates](msg, data) {
    if (data.clickedButton === this.buttonElement) {
      ButtonRadioView.setActiveStateByElement(this.buttonElement);
      Object.entries(this.siblings).forEach(([key, sibling]) => {
        if (sibling !== data.clickedButton) {
          ButtonRadioView.removeActiveStateByElement(sibling);
        }
      });
    }
  }
}
