import { htmlToElement } from '../../../../../helpers/helpers';

import PubSub from 'pubsub-js';

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
    return `<button class="button--link button-collapse feature-label" type="button"></button>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = CollapseTriggerView.initialize(controller);
    this.html = htmlToElement(CollapseTriggerView.htmlString());
    this.collapseTrigger = this.html;
    this.collapseTrigger.addEventListener('click', this.controller);
    this.html.innerText = this.controller.label;
    PubSub.subscribe('collapseTriggerClicked', (msg, collapseTrigger) => {
      this.toggleStates(msg, collapseTrigger);
    });
  }

  toggleStates(msg, collapseTrigger) {
    const [collapseTriggerButton] = collapseTrigger.getElementsByTagName('button');
    if (collapseTriggerButton === this.collapseTrigger) {
      this.html.classList.toggle("show");
    }
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.html);
  }
}
