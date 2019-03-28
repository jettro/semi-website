import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

import PubSub from 'pubsub-js';

export default class CollapseBodyView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a CollapseBodyController.');
    }
    return controller;
  }

  /**
   * @returns {string} the button html element as a string
   */
  static htmlString() {
    return `<div class="collapse" aria-expanded="false">
               <p class="feature-description"></p>
           </div>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = CollapseBodyView.initialize(controller);
    this.collapseBody = stringToHTMLCollection(CollapseBodyView.htmlString())[0];
    this.labelElement = this.collapseBody.getElementsByClassName('feature-description')[0];
    this.labelElement.innerText = this.controller.description;
    PubSub.subscribe('collapseTriggerClicked', (msg, collapseTrigger) => {
      this.toggleStates(msg, collapseTrigger);
    });
  }

  toggleStates(msg, collapseTrigger) {
    const [sibling] = this.collapseBody.parentNode.getElementsByClassName('collapse');
    const [collapseBody] = collapseTrigger.getElementsByClassName('collapse');
    if (collapseBody === sibling) {
      this.collapseBody.classList.toggle("show");
      /** toggle attribute */
      const attrExpanded = this.collapseBody.getAttribute("aria-expanded");
      if (attrExpanded !== null) {
        if (attrExpanded === 'false') {
          this.collapseBody.setAttribute("aria-expanded", true);
        } else if (attrExpanded === 'true') {
          this.collapseBody.setAttribute("aria-expanded", false);
        }
      }
    }
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.collapseBody);
  }
}
