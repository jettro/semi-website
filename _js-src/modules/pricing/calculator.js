import { elementExists } from '../../helpers/helpers';
import pricingConfig from './pricingConfig';
import getChoiceFieldset from './common/getChoiceFieldset';
import handleChoiceUseCases from './components/step/handleChoiceUseCases';
import handleChoiceHosting from './components/step/handleChoiceHosting';
import handleChoiceClusters from './components/step/handleChoiceClusters';
import handleChoiceContextionaries from './components/step/handleChoiceContextionaries';
import handleChoiceWeaviates from './components/step/handleChoiceWeaviates';
import handleChoiceNetworkNodes from './components/step/handleChoiceNetworkNodes';
import { setFixedCostPrice } from './components/receipt/pricingReceiptFunctions';
import pricingUseCaseData from '../../../_data/pricingUseCases';

(function(factory) {

  /** Find the global object for export to both the browser and web workers. */
  var globalObject = typeof window === 'object' && window ||
    typeof self === 'object' && self;

  /**
   *  Setup calculator.js for different environments.
   *  First is Node.js or CommonJS.
   */
  if(typeof exports !== 'undefined') {
    factory(exports);
  } else if(globalObject) {
    /**
     * Export calculator globally even when using AMD for cases when this script
     * is loaded with others that may still expect a global calculator.
     */
    globalObject.calculator = factory({});

    /** Finally register the global calculator with AMD. */
    if(typeof define === 'function' && define.amd) {
      define([], function() {
        return globalObject.calculator;
      });
    }
  }

}(function(calculator) {
  function initCalculatorOnLoad() {
    const formPricing = document.getElementById(pricingConfig.formId);

    if (elementExists(formPricing)) {

      const fieldSets = formPricing.getElementsByTagName('FIELDSET');
      const fieldsetUseCase = getChoiceFieldset(fieldSets, 'use-case');
      const fieldsetHostingPreference = getChoiceFieldset(fieldSets, 'hosting-preference');
      const fieldsetClusters = getChoiceFieldset(fieldSets, 'clusters');
      const fieldsetContextionaries = getChoiceFieldset(fieldSets, 'contextionaries');
      const fieldsetWeaviates = getChoiceFieldset(fieldSets, 'weaviates');
      const fieldsetNetworkNodes = getChoiceFieldset(fieldSets, 'network-nodes');
      const fieldsetShowClass = 'form-stepper__step--show';
      const fieldsetHideClass = 'form-stepper__step--hide';
      let weaviatePrice = '0';
      let nodeNetworksPrice = '0';

      const useCaseData = pricingUseCaseData.useCases;
      const flattenedUseCaseData = Object.assign({}, ...useCaseData);

      /** execute the choices */

      /** first fieldset, use cases */
      handleChoiceUseCases(fieldsetUseCase, flattenedUseCaseData, function() {
        const nextFieldset = getChoiceFieldset(fieldSets, 'hosting-preference');
        if (nextFieldset.classList.contains(pricingConfig.hideClass)) {
          nextFieldset.classList.remove(pricingConfig.hideClass);
          nextFieldset.classList.add(pricingConfig.showClass);
        }
      });

      /** second fieldset, hosting preference */
      handleChoiceHosting(fieldsetUseCase, flattenedUseCaseData, fieldsetHostingPreference, fieldSets, function() {
        const nextFieldset = getChoiceFieldset(fieldSets, 'clusters');
        if (nextFieldset.classList.contains(pricingConfig.hideClass)) {
          nextFieldset.classList.remove(pricingConfig.hideClass);
          nextFieldset.classList.add(pricingConfig.showClass);
        }
      });

      /** third fieldset, number of clusters */
      handleChoiceClusters(fieldsetClusters, function() {
        const nextFieldset = getChoiceFieldset(fieldSets, 'contextionaries');
        nextFieldset.classList.remove(pricingConfig.hideClass);
        nextFieldset.classList.add(pricingConfig.showClass);
      });

      /** fourth fieldset, type of network nodes (contextionaries) */
      handleChoiceContextionaries(fieldsetContextionaries, function() {
        const nextFieldset = getChoiceFieldset(fieldSets, 'weaviates');
        nextFieldset.classList.remove(pricingConfig.hideClass);
        nextFieldset.classList.add(pricingConfig.showClass);
      });

      // /** fifth fieldset, required number of weaviates */
      // handleChoiceWeaviates(fieldsetWeaviates, function(weaviatePrice) {
      //   /** each time a weaviate button is clicked, recalculate the fixed price */
      //   setFixedCostPrice(weaviatePrice, nodeNetworksPrice);
      // }, function() {
      //   const nextFieldset = getChoiceFieldset(fieldSets, 'network-nodes');
      //   nextFieldset.classList.remove('form-stepper__step--hide');
      //   nextFieldset.classList.add('form-stepper__step--show');
      // });
      //
      // /** sixt fieldset, the desired network nodes */
      // handleChoiceNetworkNodes(fieldsetNetworkNodes, function(price) {
      //   nodeNetworksPrice = price;
      //   setFixedCostPrice(weaviatePrice, nodeNetworksPrice);
      // }, function() {
      //   console.log('the next one can be shown');
      // });


    } else {
      console.error(`No form present. Are you sure the form with id '${pricingConfig.formId}' exists?`);
    }

  }

  /** interface definition */
  calculator.initCalculatorOnLoad = initCalculatorOnLoad;

  return calculator;
}));
