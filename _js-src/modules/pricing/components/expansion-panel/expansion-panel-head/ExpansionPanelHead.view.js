import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

import PubSub from 'pubsub-js';

export default class ExpansionPanelHeadView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a ExpansionPanelHeadController.');
    }
    return controller;
  }

  /**
   * @returns {string} the button html element as a string
   */
  static htmlString() {
    return `<div class="panel-collapse__head">
                <h3 class="use-case-panel-label"></h3>
            </div>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = ExpansionPanelHeadView.initialize(controller);
    this.expansionPanelHead = stringToHTMLCollection(ExpansionPanelHeadView.htmlString())[0];
    this.expansionPanelHead.addEventListener('click', this.controller);
    this.titleElement = this.expansionPanelHead.getElementsByClassName('use-case-panel-label')[0];
    this.titleElement.innerText = this.controller.title;
    PubSub.subscribe('expansionPanelHeadClicked', (msg, expansionPanelHead) => { this.toggleStates(msg, expansionPanelHead) });
  }

  toggleStates(msg, expansionPanelHead) {
    if (expansionPanelHead === this.expansionPanelHead) {
      this.expansionPanelHead.classList.toggle("panel-collapse__head--panel-shown");
    }
  }

  /**
   * Use this if you need to render the element
   * @param targetNode {Element} the expansion panel header
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.expansionPanelHead);
  }
}
