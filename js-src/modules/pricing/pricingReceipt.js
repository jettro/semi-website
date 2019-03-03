import { localizeNumber } from '../../helpers/helpers';

/**
 * @desc set subTotal for 'variable monthly cost'
 * @param subTotal
 */
export function setVariableMonthlyCost(subTotal) {
  const monthlyTotal = document.getElementById('monthlyTotal');
  const receiptEntriesUseCase = document.getElementsByClassName('receipt__use-case');
  monthlyTotal.innerHTML = localizeNumber(subTotal);

  console.log(receiptEntriesUseCase);
  for (let entry of receiptEntriesUseCase) {
      console.log(entry);
      entry.classList.remove('receipt__entry-inactive');
  }
}
