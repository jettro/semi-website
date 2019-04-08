import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';
import pricingConfig from '../../../pricingConfig';

const _updateVariableMonthlyCost = Symbol('updateVariableMonthlyCost');
const _updateHosting = Symbol('updateHosting');
const _updateClusters = Symbol('updateClusters');
const _updateWeaviates = Symbol('networkWeaviates');
const _updateNetworkNodes = Symbol('networkNodes');
const _updateTotal = Symbol('updateTotal');

const inactiveClass = 'receipt__entry-inactive';

export default class ReceiptView {
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

  static htmlString(controller) {
    return `<div class="receipt">
        <div class="card__title hidden-sm">
            <strong class="receipt__title">Price Summary</strong>
        </div>
        <button class="receipt--reverse-sm-1 button--link hidden-l-up" data-toggle="collapse" data-target="collapse">Show subtotals</button>
        <div class="collapse collapse-show-on-l-up">
            <dl class="receipt--reverse-sm-2 receipt__details">
                <dt class="receipt__entry-inactive receipt__use-case">Variable monthly cost</dt>
                <dd class="receipt__entry-inactive receipt__use-case price" id="price-monthly-total">${
                  controller.model.variableMonthlyCost
                }</dd>
                <dt class="receipt__entry-inactive receipt__hosting">Hosting/optimization</dt>
                <dd class="receipt__entry-inactive receipt__hosting price" id="price-hosting">${
                  controller.model.hostingOptimization
                }</dd>
                <dt class="receipt__entry-inactive receipt__clusters"># of clusters</dt>
                <dd class="receipt__entry-inactive receipt__clusters price" id="price-cluster">${
                  controller.model.clusters
                }</dd>
                <dt class="receipt__entry-inactive receipt__recurring">Recurring cost per month (fixed)</dt>
                <dd class="receipt__entry-inactive receipt__recurring price" id="price-recurring">${
                  controller.model.recurring
                }</dd>
            </dl>
        </div>
    </div>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = ReceiptView.initialize(controller);
    this.receipt = stringToHTMLCollection(ReceiptView.htmlString(controller))[0];
    this.receiptPriceContainers = this.receipt.getElementsByTagName('dd');
    this.controller.model.registerObserver(this);
    controller.receiptTotalsComponent().renderInto(this.receipt);
    controller.receiptActionComponent().renderInto(this.receipt);
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if (!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.receipt);
  }

  update(updateEventType) {
    /** always update the total */
    this[_updateTotal]();
    /** then update based on specific event type */
    if (updateEventType === 'useCase') {
      this[_updateVariableMonthlyCost]();
    }
    if (updateEventType === 'hosting') {
      this[_updateHosting]();
    }
    if (updateEventType === 'clusters') {
      this[_updateClusters]();
    }
    if (updateEventType === 'weaviates') {
      this[_updateWeaviates]();
    }
    if (updateEventType === 'networkNodes') {
      this[_updateNetworkNodes]();
    }
  }

  [_updateVariableMonthlyCost]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if ('price-monthly-total' === container.id) {
        const variableMonthlyCost = this.controller.variableMonthlyCost;
        container.previousElementSibling.classList.remove(inactiveClass);
        container.classList.remove(inactiveClass);
        container.innerHTML = variableMonthlyCost;
      }
    });
  }

  [_updateHosting]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if ('price-hosting' === container.id) {
        const optimization = this.controller.hostingOptimization;
        container.previousElementSibling.classList.remove(inactiveClass);
        container.classList.remove(inactiveClass);
        container.innerHTML = optimization;
      }
    });
  }

  [_updateClusters]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if ('price-cluster' === container.id) {
        const clusters = this.controller.clusters;
        container.previousElementSibling.classList.remove(inactiveClass);
        container.classList.remove(inactiveClass);
        container.innerHTML = clusters;
      }
    });
  }

  [_updateWeaviates]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if ('price-recurring' === container.id) {
        const recurring = this.controller.recurring;
        container.previousElementSibling.classList.remove(inactiveClass);
        container.classList.remove(inactiveClass);
        container.innerHTML = recurring;
      }
    });
  }

  [_updateNetworkNodes]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if ('price-recurring' === container.id) {
        const recurring = this.controller.recurring;
        container.previousElementSibling.classList.remove(inactiveClass);
        container.classList.remove(inactiveClass);
        container.innerHTML = recurring;
      }
    });
  }

  [_updateTotal]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if ('price-total' === container.id) {
        const variableMonthlyCost = this.controller.variableMonthlyCost;
        const optimization = this.controller.hostingOptimization;
        const clusters = this.controller.clusters;
        const recurring = this.controller.recurring;
        // const total = variableMonthlyCost + optimization + clusters + recurring;
        // console.log(total);
        const total = 999;
        container.innerHTML = total;
      }
    });
  }
}
