import { localizeNumberToString, localizeStringToNumber } from '../../helpers/helpers';
import pricingConfig from './pricingConfig';

/**
 * @desc set subTotal for 'variable monthly cost'
 * @param subTotal
 */
export function setVariableMonthlyCost(subTotal) {
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
 *
 * @param multiplier {string}
 * @param useCasePrice {HTMLElement}
 */
export function setHostingAdjustment(multiplier, useCasePrice) {
  /** calculate price */
  const priceBefore = useCasePrice.textContent;
  const priceBeforeFormatted = localizeStringToNumber(priceBefore);
  const sum = parseInt((multiplier / 100) * priceBeforeFormatted);
  const difference = priceBeforeFormatted - sum;
  /** append to receipt */
  const hostingAdjustmentElement = document.getElementById(pricingConfig.receipt.hostingAdjustmentId);
  hostingAdjustmentElement.innerHTML = localizeNumberToString(difference);
  /** make the subtotal active */
  const receiptEntriesUseCase = document.getElementsByClassName('receipt__hosting-adjustment');
  for (let entry of receiptEntriesUseCase) {
    entry.classList.remove('receipt__entry-inactive');
  }
}