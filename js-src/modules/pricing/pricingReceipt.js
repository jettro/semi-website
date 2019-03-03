import { localizeNumber } from '../../helpers/helpers';

/**
 * @desc set subTotal for 'variable monthly cost'
 * @param subTotal
 */
export function setVariableMonthlyCost(subTotal) {
  document.getElementById('monthlyTotal').innerHTML = localizeNumber(subTotal);
}