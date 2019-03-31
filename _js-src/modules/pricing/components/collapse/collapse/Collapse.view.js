import collapseTriggerComponent from '../collapse-trigger';
import collapseBodyComponent from '../collapse-body';

import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

export default class CollapseView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a TableBodyController.');
    }
    return controller;
  }

  /**
   * @returns {string} the button html element as a string
   */
  static htmlString() {
    return `<div></div>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = controller;
    this.collapse = stringToHTMLCollection(CollapseView.htmlString())[0];
    collapseTriggerComponent(this.controller.title).renderInto(this.collapse);
    collapseBodyComponent(this.controller.description).renderInto(this.collapse);
  }

  /**
   * @description creates an element to reuse in other element
   * @returns {Element | *}
   */
  create() {
    return this.collapse;
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.tableBody);
  }
}