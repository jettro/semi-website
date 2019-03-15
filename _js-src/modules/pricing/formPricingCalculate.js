import { elementExists } from '../../helpers/helpers';

const config = {
  'elementClassToCountBy': 'price',
  'elementClassTotalPrice': 'pricing-total'
};

function sum(arr) {
  const add = (a, b) => a + b;
  return arr.reduce(add);
}

function reCalculateTotal(elementsContainingPrices) {
  let prices = [];
  for (let price of elementsContainingPrices) {
    const priceNumber = parseInt(price.innerText);
    prices.push(priceNumber);
  }
  if (prices.constructor === Array) {
    if (prices.length !== 0) {
      return sum(prices);
    }
  } else {
    console.error(`The prices aren't in an Array, something has gone wrong.`);
  }
}

/**
 * @desc pricing is calculated based on elements per column with the class defined in above config
 * @param form
 */
export function formPricingInit (form) {
  const fieldSets = form.children;
  if (elementExists(fieldSets)) {
    for (let fieldset of fieldSets) {
      if (fieldset.id === 'use-case') {
        const columns = fieldset.getElementsByClassName('form-stepper-table__column');
        for (let column of columns) {
          // only calculate prices if it's a button
          if (column.classList.contains('ui-button')) {
            const columnPriceElements = column.getElementsByClassName(config.elementClassToCountBy);
            const total = reCalculateTotal(columnPriceElements);
            const totalContainer = column.getElementsByClassName(config.elementClassTotalPrice);
            if (totalContainer.length === 1) {
              totalContainer[0].innerText = total;
            } else if ((totalContainer.length >= 1)) {
              console.error(`There are more containers for the total sum of prices present in this column. It should have only one.`);
            } else {
              console.error(`There are no  containers for the total sum of prices. It should have one to show the total price.`);
            }
          }
        }
      }
    }
  } else {
    console.error(`There are no fieldsets present in the selected form '${config.formId}'.`);
  }
}

/**
 *
 * @param e
 * @param form
 */
export function formPricingCalculate (e, form) {}
