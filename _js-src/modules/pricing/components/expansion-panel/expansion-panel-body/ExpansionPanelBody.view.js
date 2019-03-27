import htmlToElement from '../../../../../utilities/htmlToElement';

import PubSub from 'pubsub-js';

export default class ExpansionPanelBodyView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a ExpansionPanelBodyController.');
    }
    return controller;
  }

  /**
   * @returns {string} the expansion panel body html element as a string
   */
  static htmlString() {
    return `<div class="panel-collapse__body collapse hidden" aria-expanded="false"></div>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = ExpansionPanelBodyView.initialize(controller);
    this.html = htmlToElement(ExpansionPanelBodyView.htmlString());
    this.expansionBody = this.html;
    PubSub.subscribe('expansionPanelHeadClicked', (msg, expansionPanelHead) => { this.toggleStates(msg, expansionPanelHead) });
  }

  toggleStates(msg, expansionPanelHead) {
    const [sibling] = this.expansionBody.parentNode.getElementsByClassName('panel-collapse__head');

    if (expansionPanelHead === sibling) {
      this.html.classList.toggle("show");
      /** toggle attribute */
      const attrExpanded = this.html.getAttribute("aria-expanded");
      if (attrExpanded !== null) {
        if (attrExpanded === 'false') {
          this.html.setAttribute("aria-expanded", true);
        } else if (attrExpanded === 'true') {
          this.html.setAttribute("aria-expanded", false);
        }
      }
    }
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {HTMLElement} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.html);
  }
}
