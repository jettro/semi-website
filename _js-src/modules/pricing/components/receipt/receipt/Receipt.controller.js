import receiptActionComponent from '../receipt-action';
import receiptTotalsComponent from '../receipt-totals';
import PubSub from 'pubsub-js';

/** @type {{variableMonthlyCost: string, hostingOptimization: string, clusters: string, weaviates: string, networkNodes}} */
const defaultPricing = {
  variableMonthlyCost: '0,00',
  hostingOptimization: '0,00',
  clusters: '0,00',
  weaviates: '0,00',
  networkNodes: '0,00',
};

/**
 * @desc calculates what the difference in price is
 * @param multiplier {string} The amount to multiply the total by (number is percentage)
 *                            For example if multiplier = 100 then the returned value is 0
 * @param priceStr {string} the price as a string from the receipt
 * @returns {number}
 */
function calculateDifference(multiplier, priceStr) {
  const sum = (multiplier / 100) * priceStr;
  return sum - parseInt(priceStr);
}

export default class ReceiptController {
  constructor(model) {
    this.model = model;
    this.model.defaultPricing = defaultPricing;
    this.receiptTotalsComponent = receiptTotalsComponent;
    this.receiptActionComponent = receiptActionComponent;

    PubSub.subscribe('useCases.panelShown.default', (msg, pubSubData) => {
      this.updateHandler('useCase', pubSubData);
    });

    PubSub.subscribe('hosting.hostingBySemi', (msg, pubSubData) => {
      this.updateHandler('hosting', pubSubData);
    });

    PubSub.subscribe('hosting.hostingByCustomer', (msg, pubSubData) => {
      this.updateHandler('hosting', pubSubData);
    });

    PubSub.subscribe('cluster.buttonClicked', (msg, pubSubData) => {
      this.updateHandler('clusters', pubSubData);
    });

    PubSub.subscribe('recurring.weaviates.buttonClicked', (msg, pubSubData) => {
      this.updateHandler('weaviates', pubSubData);
    });

    PubSub.subscribe('recurring.networkNodes.buttonClicked', (msg, pubSubData) => {
      this.updateHandler('networkNodes', pubSubData);
    });

    /**
     *
     * @param updateEventType
     * @param data
     */
    this.updateHandler = function(updateEventType, data) {
      const useCaseSubTotal = this.model.variableMonthlyCost;

      if (updateEventType === 'useCase') {
        this.model.variableMonthlyCost = data.subTotal;
        this.model.notifyAll(updateEventType);
      }

      if (updateEventType === 'hosting') {
        this.model.hostingOptimization = calculateDifference(data.multiplier, useCaseSubTotal);
        this.model.notifyAll(updateEventType);
      }

      if (updateEventType === 'clusters') {
        this.model.clusters = calculateDifference(data.multiplier, useCaseSubTotal);
        this.model.notifyAll(updateEventType);
      }

      if (updateEventType === 'weaviates') {
        this.model.weaviates = data.fixed;
        this.model.notifyAll(updateEventType);
      }

      if (updateEventType === 'networkNodes') {
        this.model.networkNodes = data.fixed;
        this.model.notifyAll(updateEventType);
      }
    };
  }

  /**
   * @returns {number}
   */
  get variableMonthlyCost() {
    return parseInt(this.model.variableMonthlyCost);
  }

  /**
   * @returns {number}
   */
  get hostingOptimization() {
    return parseInt(this.model.hostingOptimization);
  }

  /**
   * @returns {number}
   */
  get clusters() {
    return parseInt(this.model.clusters);
  }

  /**
   * @returns {number}
   */
  get recurring() {
    return parseInt(this.model.weaviates, 10) + parseInt(this.model.networkNodes, 10);
  }
}
