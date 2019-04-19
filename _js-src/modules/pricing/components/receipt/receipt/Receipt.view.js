import localizeNumber from '../../../../../utilities/localizeNumber';
import pricingConfig from '../../../pricingConfig';
import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';

const _updateVariableMonthlyCost = Symbol('updateVariableMonthlyCost');
const _updateHosting = Symbol('updateHosting');
const _updateClusters = Symbol('updateClusters');
const _updateWeaviates = Symbol('networkWeaviates');
const _updateNetworkNodes = Symbol('networkNodes');
const _updateTotal = Symbol('updateTotal');
const _updateContainer = Symbol('updateContainer');

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
            <a class="receipt__reset-form" href=".">Reset</a>
        </div>
        <button class="receipt--reverse-sm-1 button--link hidden-l-up" data-toggle="collapse" data-target="collapse">Price Summary</button>
        <div class="collapse collapse-show-on-l-up">
            <dl class="receipt--reverse-sm-2 receipt__details">
                <dt class="receipt__entry-inactive receipt__use-case">Variable monthly cost</dt>
                <dd class="receipt__entry-inactive receipt__use-case price" id="price-monthly-total">${
                  controller.variableMonthlyCost
                }</dd>
                <dt class="receipt__entry-inactive receipt__hosting">Hosting/optimization</dt>
                <dd class="receipt__entry-inactive receipt__hosting price" id="price-hosting">${
                  controller.hostingOptimization
                }</dd>
                <dt class="receipt__entry-inactive receipt__clusters"># of clusters</dt>
                <dd class="receipt__entry-inactive receipt__clusters price" id="price-cluster">${
                  controller.clusters
                }</dd>
                <dt class="receipt__entry-inactive receipt__recurring">Recurring cost per month (fixed)</dt>
                <dd class="receipt__entry-inactive receipt__recurring price" id="price-recurring">${
                  controller.recurring
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

  /**
   * @param container {object} the container to update
   * @param value {string} the value to add to the receipt
   */
  [_updateContainer](container, value) {
    container.previousElementSibling.classList.remove(inactiveClass);
    container.classList.remove(inactiveClass);
    container.innerHTML = localizeNumber(value);
  }

  /**
   * @desc update the variable monthly cost
   */
  [_updateVariableMonthlyCost]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if (pricingConfig.receipt.monthlyTotalId === container.id) {
        const variableMonthlyCost = this.controller.variableMonthlyCost;
        this[_updateContainer](container, variableMonthlyCost);
      }
    });
  }

  /**
   * @desc update the hosting cost
   */
  [_updateHosting]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if (pricingConfig.receipt.hostingId === container.id) {
        const optimization = this.controller.hostingOptimization;
        this[_updateContainer](container, optimization);
      }
    });
  }

  /**
   * @desc update the cluster cost
   */
  [_updateClusters]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if (pricingConfig.receipt.clustersId === container.id) {
        const clusters = this.controller.clusters;
        this[_updateContainer](container, clusters);
      }
    });
  }

  /**
   * @desc update the number of weaviates (part 1/2 of recurring cost)
   */
  [_updateWeaviates]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if (pricingConfig.receipt.recurringId === container.id) {
        const recurring = this.controller.recurring;
        this[_updateContainer](container, recurring);
      }
    });
  }

  /**
   * @desc update the number of network nodes (part 2/2 of recurring cost)
   */
  [_updateNetworkNodes]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if (pricingConfig.receipt.recurringId === container.id) {
        const recurring = this.controller.recurring;
        this[_updateContainer](container, recurring);
      }
    });
  }

  /**
   * @desc update the total of the receipt
   */
  [_updateTotal]() {
    Object.entries(this.receiptPriceContainers).forEach(([key, container]) => {
      if ('price-total' === container.id) {
        const variableMonthlyCost = this.controller.variableMonthlyCost;
        const optimization = this.controller.hostingOptimization;
        const clusters = this.controller.clusters;
        const recurring = this.controller.recurring;
        const total = variableMonthlyCost + optimization + clusters + recurring;
        container.innerHTML = localizeNumber(total);
      }
    });
  }
}
