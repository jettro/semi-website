import ReceiptActionModel from './ReceiptAction.model';
import ReceiptActionController from './ReceiptAction.controller';
import ReceiptActionView from './ReceiptAction.view';

/**
 * @desc the receipt component
 */
export default function receiptActionComponent() {
  const receiptActionModel = new ReceiptActionModel(),
    receiptActionController = new ReceiptActionController(receiptActionModel);
  return new ReceiptActionView(receiptActionController);
};
