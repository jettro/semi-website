import { elementExists, nextSibling } from '../../helpers/helpers';
import pricingConfig from './pricingConfig';
import handleChoiceUseCases from './handleChoiceUseCases';
import handleChoiceHosting from './handleChoiceHosting';

// import { formPricingInit, formPricingCalculate } from './formPricingCalculate';

/**
 * @desc gets fieldset based on data attribute (step)
 * @param fieldSets
 * @param step
 */
const getChoiceFieldset = function(fieldSets, step) {
  for (let fieldSet of fieldSets) {
    if(fieldSet.dataset.step === step) return fieldSet;
  }
};

const showNextChoice = function(target) {
  const nextChoice = nextSibling(target);
  nextChoice.classList.remove('form-stepper__step--hidden');
  nextChoice.classList.add('form-stepper__step--show');
};

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
      const useCaseFieldset = getChoiceFieldset(fieldSets, 'use-case');

      /** execute the choices */
      handleChoiceUseCases(useCaseFieldset, function() {
        showNextChoice(useCaseFieldset);
      }).then(handleChoiceHosting);
    } else {
      console.error(`No form present. Are you sure the form with id '${pricingConfig.formId}' exists?`);
    }
  }

  /** interface definition */
  calculator.initCalculatorOnLoad = initCalculatorOnLoad;

  return calculator;
}));
