import { htmlToElement } from '../../../../../helpers/helpers';

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
    this.html = htmlToElement(CollapseBodyView.htmlString());
    this.collapseBody = this.html;
    this.labelElement = this.html.getElementsByClassName('feature-description')[0];
    this.labelElement.innerText = this.controller.description;
    PubSub.subscribe('collapseTriggerClicked', (msg, collapseTrigger) => { this.toggleStates(msg, collapseTrigger) });
  }

  toggleStates(msg, collapseTrigger) {
    const [sibling] = this.collapseBody.parentNode.getElementsByClassName('collapse');

    if (collapseTrigger === sibling) {
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
   * Use this if you need to render the element
   * @returns {Element} the expansion panel header
   */
  render() {
    return this.html;
  }
}
