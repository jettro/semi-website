import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';
import listOptionItemComponent from '../list-option-item';
import buttonComponent from '../../button/button';
import buttonRadioComponent from '../../button/button-radio';

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
    this.list = stringToHTMLCollection(ListOptionsView.htmlString())[0];

    this.controller.options.map(option => {
      this[_addListItem](option);
    });

    this.init();
  }

  init() {
    if (this.controller.config && typeof this.controller.config.useCaseKey != 'undefined')
      this.list.dataset.useCaseKey = this.controller.config.useCaseKey;
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {HTMLElement} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.list);
  }

  [_addListItem](option) {
    /** if pubSubScope is defined add it to the button */
    const pubSubScope = (typeof this.controller.buttonData !== 'undefined') ? this.controller.buttonData.pubSubScope : undefined;

    const button = (this.controller.config && this.controller.config.multi === true) ?
        /** when the config is set to multi, create the regular button */
        buttonComponent(option, pubSubScope).create() :
        /** otherwise create the radio button (default) */
        buttonRadioComponent(option, pubSubScope).create();

    /** create list option */
    listOptionItemComponent(button).renderInto(this.list);
  }
}
