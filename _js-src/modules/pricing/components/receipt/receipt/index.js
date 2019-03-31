import ReceiptModel from './Receipt.model';
import ReceiptController from './Receipt.controller';
import ReceiptView from './Receipt.view';

/**
 * @desc the receipt component
 */
export default function receiptComponent(pricingState) {
  const receiptModel = new ReceiptModel(pricingState),
    receiptController = new ReceiptController(receiptModel);
  return new ReceiptView(receiptController);
};
