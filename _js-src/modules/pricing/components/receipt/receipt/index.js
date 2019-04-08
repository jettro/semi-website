import ReceiptModel from './Receipt.model';
import ReceiptController from './Receipt.controller';
import ReceiptView from './Receipt.view';

/**
 * @desc the receipt component
 */
export default function receiptComponent() {
  const receiptModel = new ReceiptModel(),
    receiptController = new ReceiptController(receiptModel);
  return new ReceiptView(receiptController);
};
