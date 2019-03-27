import pricingConfig from '../../pricingConfig';
import localizeNumber from '../../../../utilities/localizeNumber';
import localizeStringToNumber from '../../../../utilities/localizeStringToNumber';

/**
 * @desc {Number} set subTotal for 'variable monthly cost'
 * @param subTotal
 */
function setVariableMonthlyCost(subTotal) {
  /** append to receipt */
  const monthlyTotalElement = document.getElementById(pricingConfig.receipt.montlyTotalId);
  monthlyTotalElement.innerHTML = localizeNumber(subTotal);
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
  const difference = sum - priceBeforeFormatted;
  return localizeNumber(difference);
}

/**
 * @param subTotal {string} the subtotal to add
 * @param multiplier {string=undefined} the amount to multiply it by
 */
function setHostingAdjustment(subTotal, multiplier = 'undefined') {
  /** if no multiplier is set, just assign subTotal as price directly */
  const price = multiplier !== 'undefined' ? calculateDifference(multiplier, subTotal) : subTotal;
  const hostingAdjustmentElement = document.getElementById(
    pricingConfig.receipt.hostingAdjustmentId,
  );
  /** append to receipt */
  hostingAdjustmentElement.innerHTML = price;
  /** make the subtotal active */
  const receiptEntriesUseCase = document.getElementsByClassName('receipt__hosting');
  for (let entry of receiptEntriesUseCase) {
    entry.classList.remove('receipt__entry-inactive');
  }
  /** recalculate the total */
  reCalculateTotal();
}

/**
 *
 * @param multiplier {string} the mutliplier to multiply the amount by
 * @param useCasePrice {string} the total use case price
 */
function setHostingCluster(multiplier, useCasePrice) {
  const price = calculateDifference(multiplier, useCasePrice);
  /** append to receipt */
  const clusterAdjustmentElement = document.getElementById(pricingConfig.receipt.clustersId);
  clusterAdjustmentElement.innerHTML = price;
  /** make the subtotal active */
  const receiptEntriesUseCase = document.getElementsByClassName('receipt__clusters');
  for (let entry of receiptEntriesUseCase) {
    entry.classList.remove('receipt__entry-inactive');
  }
  /** recalculate the total */
  reCalculateTotal();
}

/**
 * @desc Add the sub total price of monthly fixed costs
 *       note: The number of Weaviates is a static price, so no multiply calculation needed.
 * @param weaviatesPrice {string} the price as defined by the selected weaviates option
 * @param networkNodesPrice {string} the price as defined by the selected network nodes option
 */
function setFixedCostPrice(weaviatesPrice, networkNodesPrice) {
  /** append to receipt */
  const weaviateAdjustmentElement = document.getElementById(pricingConfig.receipt.weaviateId);
  /** Note: assumes the prices have no decimals! */
  weaviateAdjustmentElement.innerHTML = Number(weaviatesPrice) + Number(networkNodesPrice);
  /** make the subtotal active */
  const receiptEntriesUseCase = document.getElementsByClassName('receipt__recurring');
  for (let entry of receiptEntriesUseCase) {
    entry.classList.remove('receipt__entry-inactive');
  }
  /** recalculate the total */
  reCalculateTotal();
}

function setTotal(totalPrice) {
  /** append to receipt */
  const totalElement = document.getElementById(pricingConfig.receipt.totalId);
  totalElement.innerHTML = totalPrice;
}

function reCalculateTotal() {
  const monthlyTotalElement = document.getElementById(pricingConfig.receipt.montlyTotalId);
  const clusterAdjustmentElement = document.getElementById(pricingConfig.receipt.clustersId);
  const WeaviateAdjustmentElement = document.getElementById(pricingConfig.receipt.weaviateId);
  const hostingAdjustmentElement = document.getElementById(
    pricingConfig.receipt.hostingAdjustmentId,
  );
  const monthlyTotal = localizeStringToNumber(monthlyTotalElement.textContent);
  const clusterTotal = localizeStringToNumber(clusterAdjustmentElement.textContent);
  const weaviateTotal = localizeStringToNumber(WeaviateAdjustmentElement.textContent);
  const hostingTotal = localizeStringToNumber(hostingAdjustmentElement.textContent);
  const total = monthlyTotal + clusterTotal + weaviateTotal + hostingTotal;
  setTotal(localizeNumber(total));
}

export {
  setVariableMonthlyCost,
  setHostingAdjustment,
  setHostingCluster,
  setFixedCostPrice,
  reCalculateTotal,
  setTotal
};
