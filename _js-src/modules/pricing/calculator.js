import elementExists from '../../utilities/elementExists';
import getChoiceFieldset from './common/getChoiceFieldset';
import handleChoiceClusters from './components/step/handleChoiceClusters';
import handleChoiceContextionaries from './components/step/handleChoiceContextionaries';
import handleChoiceHosting from './components/step/handleChoiceHosting';
import handleChoiceNetworkNodes from './components/step/handleChoiceNetworkNodes';
import handleChoiceUseCases from './components/step/handleChoiceUseCases';
import handleChoiceWeaviates from './components/step/handleChoiceWeaviates';
import pricingConfig from './pricingConfig';
import pricingUseCaseData from '../../../_data/pricingUseCases';
import receiptComponent from './components/receipt/receipt';
import listOptionItemComponent from './components/list-options/list-option-item';
import receiptSummaryComponent from './components/receipt/receipt-summary';

(function(factory) {
  /** Find the global object for export to both the browser and web workers. */
  const globalObject = (typeof window === 'object' && window) || (typeof self === 'object' && self);

  /**
   *  Setup calculator.js for different environments.
   *  First is Node.js or CommonJS.
   */
  if (typeof exports !== 'undefined') {
    factory(exports);
  } else if (globalObject) {
    /**
     * Export calculator globally even when using AMD for cases when this script
     * is loaded with others that may still expect a global calculator.
     */
    globalObject.calculator = factory({});

    /** Finally register the global calculator with AMD. */
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return globalObject.calculator;
      });
    }
  }
})(function(calculator) {
  function initCalculatorOnLoad() {
    /** @type {HTMLElement!} */
    const formPricing = document.getElementById(pricingConfig.formId);
    /** @type {HTMLElement!} */
    const receiptSidebar = document.getElementById(pricingConfig.receiptId);

    if (!elementExists(formPricing))
      console.error(`No form container element present. Are you sure the form with id '${pricingConfig.formId}' exists?`);

    if (!elementExists(receiptSidebar))
      console.error(`No sidebar container element present. Are you sure the form with id '${pricingConfig.receiptId}' exists?`);

    /** @type {HTMLCollectionOf!} */
    const fieldSets = formPricing.getElementsByTagName('FIELDSET');
    /** @type {HTMLElement!} */
    const fieldsetUseCase = getChoiceFieldset(fieldSets, 'use-case');
    /** @type {HTMLElement!} */
    const fieldsetHostingPreference = getChoiceFieldset(fieldSets, 'hosting-preference');
    /** @type {HTMLElement!} */
    const fieldsetClusters = getChoiceFieldset(fieldSets, 'clusters');
    /** @type {HTMLElement!} */
    const fieldsetContextionaries = getChoiceFieldset(fieldSets, 'contextionaries');
    /** @type {HTMLElement!} */
    const fieldsetWeaviates = getChoiceFieldset(fieldSets, 'weaviates');
    /** @type {HTMLElement!} */
    const fieldsetNetworkNodes = getChoiceFieldset(fieldSets, 'network-nodes');

    /** @type {Array} */
    const useCaseData = pricingUseCaseData.useCases;
    /** @type {Object<string, any>!} */
    const flattenedUseCaseData = Object.assign({}, ...useCaseData);

    handleChoiceUseCases(fieldsetUseCase, flattenedUseCaseData, function() {
      const nextFieldset = fieldsetHostingPreference;
      if (nextFieldset.classList.contains(pricingConfig.hideClass)) {
        nextFieldset.classList.remove(pricingConfig.hideClass);
        nextFieldset.classList.add(pricingConfig.showClass);
      }
    });

    handleChoiceHosting(
      fieldsetUseCase,
      flattenedUseCaseData,
      fieldsetHostingPreference,
      fieldSets,
      function() {
        const nextFieldset = fieldsetClusters;
        if (nextFieldset.classList.contains(pricingConfig.hideClass)) {
          nextFieldset.classList.remove(pricingConfig.hideClass);
          nextFieldset.classList.add(pricingConfig.showClass);
        }
      },
    );

    handleChoiceClusters(fieldsetClusters, function() {
      const nextFieldset = fieldsetContextionaries;
      nextFieldset.classList.remove(pricingConfig.hideClass);
      nextFieldset.classList.add(pricingConfig.showClass);
    });

    handleChoiceContextionaries(fieldsetContextionaries, function() {
      const nextFieldset = fieldsetWeaviates;
      nextFieldset.classList.remove(pricingConfig.hideClass);
      nextFieldset.classList.add(pricingConfig.showClass);
    });

    handleChoiceWeaviates(fieldsetWeaviates, function() {
      const nextFieldset = fieldsetNetworkNodes;
      nextFieldset.classList.remove(pricingConfig.hideClass);
      nextFieldset.classList.add(pricingConfig.showClass);
    });

    handleChoiceNetworkNodes(fieldsetNetworkNodes, function() {
      console.log('the final receipt can be shown');
    });


    receiptComponent().createInto(receiptSidebar);

  }

  /** interface definition */
  calculator.initCalculatorOnLoad = initCalculatorOnLoad;

  return calculator;
});
