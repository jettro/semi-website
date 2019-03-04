import { localizeNumberToString, localizeStringToNumber } from '../../helpers/helpers';
import pricingConfig from './pricingConfig';

/**
 * @desc set subTotal for 'variable monthly cost'
 * @param subTotal
 */
function setVariableMonthlyCost(subTotal) {
  /** append to receipt */
  const monthlyTotalElement = document.getElementById(pricingConfig.receipt.montlyTotalId);
  monthlyTotalElement.innerHTML = localizeNumberToString(subTotal);
  /** make the subtotal active */
  const receiptEntriesUseCase = document.getElementsByClassName('receipt__use-case');
  for (let entry of receiptEntriesUseCase) {
    entry.classList.remove('receipt__entry-inactive');
  }
}

/**
 * @desc calculates what the difference in price is
 * @param multiplier {string} The amount to multiply the total by (number is percentage)
 *                            For example if multiplier = 100 then the returned value is 0
 * @param priceStr {string} the price as a string from the receipt
 * @returns {string}
 */
function calculateDifference(multiplier, priceStr) {
  /** calculate price */
  const priceBefore = priceStr;
  const priceBeforeFormatted = localizeStringToNumber(priceBefore);
  const sum = parseInt((multiplier / 100) * priceBeforeFormatted);
  const difference = priceBeforeFormatted - sum;
  return localizeNumberToString(difference);
}

/**
 *
 * @param multiplier {string}
 * @param useCasePrice {HTMLElement}
 */
function setHostingAdjustment(multiplier, useCasePrice) {
  /** append to receipt */
  const hostingAdjustmentElement = document.getElementById(pricingConfig.receipt.hostingAdjustmentId);
  hostingAdjustmentElement.innerHTML = calculateDifference(multiplier, useCasePrice.textContent);
  /** make the subtotal active */
  const receiptEntriesUseCase = document.getElementsByClassName('receipt__hosting');
  for (let entry of receiptEntriesUseCase) {
    entry.classList.remove('receipt__entry-inactive');
  }
}

/**
 *
 * @param multiplier {string}
 * @param useCasePrice {HTMLElement}
 */
function setHostingCluster(multiplier, useCasePrice) {
  /** append to receipt */
  const hostingAdjustmentElement = document.getElementById(pricingConfig.receipt.hostingAdjustmentId);
  hostingAdjustmentElement.innerHTML = calculateDifference(multiplier, useCasePrice.textContent);
  /** make the subtotal active */
  const receiptEntriesUseCase = document.getElementsByClassName('receipt__cluster');
  for (let entry of receiptEntriesUseCase) {
    entry.classList.remove('receipt__entry-inactive');
  }
}

export { setVariableMonthlyCost, setHostingAdjustment, setHostingCluster};
