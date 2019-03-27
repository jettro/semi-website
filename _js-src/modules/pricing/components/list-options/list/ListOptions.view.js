import htmlToElement from '../../../../../utilities/htmlToElement';

const _addListItems = Symbol('addListItems');

export default class ListOptionsView {

  /**
   * @returns {string} the list html element as a string
   */
  static htmlString() {
    return `<ul class="list-ui list-buttons-radio"></ul>`;
  }

  constructor(controller){
    this.controller = controller;
    this._children = this.controller.children;
    /** constructs the html element from html template literal (string) */
    this._html = htmlToElement(ListOptionsView.htmlString());
    this._dataAttr = this.controller.dataAttr;
  }

  /**
   *
   * @returns {HTMLUListElement} A list
   */
  init(){
    if (this._dataAttr !== undefined)
      this._html.dataset[this._dataAttr.attr] = this._dataAttr.value;
    return this[_addListItems](this._html);
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {HTMLElement} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.init());
  }

  [_addListItems](node) {
    this._children.forEach((child) => {
      node.insertAdjacentElement('beforeend', child);
    });
    return node;
  }
}
