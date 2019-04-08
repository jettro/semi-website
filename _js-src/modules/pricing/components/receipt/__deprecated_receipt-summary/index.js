import ReceiptSummaryModel from './ReceiptSummary.model';
import ReceiptSummaryController from './ReceiptSummary.controller';
import ReceiptSummaryView from './ReceiptSummary.view';

/**
 * @desc the receipt component
 */
export default function receiptSummaryComponent(pricingState) {
  const receiptSummaryModel = new ReceiptSummaryModel(pricingState),
    receiptSummaryController = new ReceiptSummaryController(receiptSummaryModel);
  return new ReceiptSummaryView(receiptSummaryController);
};
