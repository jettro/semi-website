import ReceiptTotalsModel from './ReceiptTotals.model';
import ReceiptTotalsController from './ReceiptTotals.controller';
import ReceiptTotalsView from './ReceiptTotals.view';

/**
 * @desc the receipt component
 */
export default function receiptTotalsComponent() {
  const receiptTotalsModel = new ReceiptTotalsModel(),
    receiptTotalsController = new ReceiptTotalsController(receiptTotalsModel);
  return new ReceiptTotalsView(receiptTotalsController);
};
