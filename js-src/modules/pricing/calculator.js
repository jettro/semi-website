import formPricingRadioButtons from './formPricingRadioButtons';
import { formPricingInit, formPricingCalculate } from './formPricingCalculate';
import { elementExists } from '../../helpers/helpers';
import pricingConfig from './pricingConfig';

(function(factory) {

  // Find the global object for export to both the browser and web workers.
  var globalObject = typeof window === 'object' && window ||
    typeof self === 'object' && self;

  // Setup calculator.js for different environments. First is Node.js or
  // CommonJS.
  if(typeof exports !== 'undefined') {
    factory(exports);
  } else if(globalObject) {
    // Export calculator globally even when using AMD for cases when this script
    // is loaded with others that may still expect a global calculator.
    globalObject.calculator = factory({});

    // Finally register the global calculator with AMD.
    if(typeof define === 'function' && define.amd) {
      define([], function() {
        return globalObject.calculator;
      });
    }
  }

}(function(calculator) {

  console.log('inside calculator');

  function initCalculatorOnLoad() {

    const formPricing = document.getElementById(pricingConfig.formId);

    if (elementExists(formPricing)) {
      // initial setting of receipt
      formPricingInit(formPricing);
      // form interactions
      formPricing.addEventListener('click', e => {
        e.preventDefault();
        formPricingRadioButtons(e, formPricing);
        formPricingCalculate(e, formPricing);
        // TODO: add form handler
      }, false);
    } else {
      console.error(`No form present. Are you sure the form with id '${pricingConfig.formId}' exists?`);
    }
  }

  /* interface definition */
  calculator.initCalculatorOnLoad = initCalculatorOnLoad;

  return calculator;
}));
