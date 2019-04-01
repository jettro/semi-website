import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';
import listOptionItemComponent from '../list-option-item';
import buttonRadioComponent from '../../button-radio';

const _addListItem = Symbol('addListItem');

export default class ListOptionsView {

  /**
   * @returns {string} the list html element as a string
   */
  static htmlString() {
    return `<ul class="list-ui list-buttons-radio"></ul>`;
  }

  constructor(controller){
    this.controller = controller;
    /** constructs the html element from html template literal (string) */
    this._list = stringToHTMLCollection(ListOptionsView.htmlString())[0];

    this.controller.options.map(option => {
      this[_addListItem](option);
    });
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {HTMLElement} the target node provided
   */
  renderInto(targetNode) {
    if (this._dataAttr !== undefined)
      this._list.dataset[this._dataAttr.attr] = this._dataAttr.value;
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this._list);
  }

  [_addListItem](option) {
    const pubSubScope = (typeof this.controller.buttonData !== 'undefined') ? this.controller.buttonData.pubSubScope : undefined;

    /** create button */
    const buttonRadio = buttonRadioComponent(option, pubSubScope).create();

    /** create list option */
    listOptionItemComponent(buttonRadio).renderInto(this._list);
  }
}
