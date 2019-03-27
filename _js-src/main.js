import './common';

const $script = require('scriptjs');

import elementExists from './utilities/elementExists';
const pricingConfig = require('./modules/pricing/pricingConfig').default;

/**
 * Only load the calculator when the calculator form is present.
 */
if (elementExists(document.getElementById(pricingConfig.formId))) {
  $script('/js/bundles/lib/calculator.bundle.js', function() {
    calculator.initCalculatorOnLoad();
  });
}
