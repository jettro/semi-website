
import expansionPanelHeadComponent from '../expansion-panel-head';
import expansionPanelBodyComponent from '../expansion-panel-body';
import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

export default class ExpansionPanelView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a ButtonRadioController.');
    }
    return controller;
  }

  static htmlString() {
    return `<div class="panel-collapse"></div>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = ExpansionPanelView.initialize(controller);
    this.expansionPanel = stringToHTMLCollection(ExpansionPanelView.htmlString())[0];
    this.panelLabel = this.controller.panelLabel;
    this.expansionPanel.dataset.useCase = this.controller.currentUseCase;
    expansionPanelHeadComponent(this.panelLabel).renderInto(this.expansionPanel);
    expansionPanelBodyComponent().renderInto(this.expansionPanel);
  };

  /**
   * @desc renders into the target node provided
   * @param targetNode {HTMLElement} the target node provided
   */
  renderInto(targetNode) {
    if (!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.expansionPanel);
  }
};
