const { isNumber } = require('../../helpers/helpers');

/**
 * @desc calculates the total cost of the use-cases
 * @param containerElement {HTMLElement} The element containing all the pricing rows
 * @returns {number} the calculated total number
 */
export default function(containerElement) {
  const tableRows = containerElement.getElementsByClassName('table-pricing__row');
  let useCaseTotal = 0;
  for (let row of tableRows) {
    if (typeof row.dataset.subTotal !== 'undefined' && isNumber(row.dataset.subTotal)) {
      const useCaseSubTotal = row.dataset.subTotal;
      useCaseTotal += parseInt(useCaseSubTotal);
    }
  }
  return useCaseTotal;
}
