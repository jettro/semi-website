import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

export default class CollapseTriggerView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a CollapseTriggerController.');
    }
    return controller;
  }

  /**
   * @returns {string} the button html element as a string
   */
  static htmlString() {
    return `<button class="button--link collapse-style-icon" data-toggle="collapse" data-target="collapse" type="button"></button>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = CollapseTriggerView.initialize(controller);
    this.collapseTrigger = stringToHTMLCollection(CollapseTriggerView.htmlString())[0];
    this.collapseTrigger.innerText = this.controller.label;
    this.collapseTrigger.addEventListener('click', this.controller);
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.collapseTrigger);
  }
}
