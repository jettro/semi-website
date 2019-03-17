import { htmlToElement } from '../../../../helpers/helpers';

const _createTitle = Symbol('createTitle');
const _createDescription = Symbol('createDescription');

/** Class representing a radio button. */
export default class ButtonRadio {

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
   * @param title {string?} the title of the button
   * @param description {string?}
   */
  constructor(title = undefined, description = undefined) {
    this._title = title;
    this._description = description;
    /** constructs the html element from html template literal (string) */
    this._html = htmlToElement(ButtonRadio.htmlString());
  }

  /**
   * @returns {Element}
   */
  init(){
    this[_createTitle](this._html);
    this[_createDescription](this._html);
    return this._html;
  }

  /**
   * Use this if you need to render the element
   * @returns {Element} the radio button
   */
  render() {
    return this.init();
  }

  /**
   * use this if you need to use the element as a string
   * @returns {String} returns the element as a string
   */
  create() {
    return this.init().outerHTML;
  }

  /**
   * @returns {Element}
   */
  [_createTitle]() {
    if (typeof(this._title) !== 'undefined') {
      const [labelElement] = this._html.getElementsByClassName('ui-button__title');
      labelElement.innerHTML = this._title;
    }
    return this._html;
  }

  /**
   * @returns {Element}
   */
  [_createDescription]() {
    if (typeof(this._description) !== 'undefined') {
      const [descriptionElement] = this._html.getElementsByClassName('ui-button__description');
      descriptionElement.innerHTML = this._description;
    }
    return this._html;
  }

}
