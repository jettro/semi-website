
/**
 * @desc Add the total of cpc and average call amount to data attribute
 * @param target
 * @param cpc
 * @param average
 */
export default function(target, cpc, averageCalls) {
  // TODO: add error handler for cpc and average, for instance what happens when something other than a number is used
  const parsedCpc = parseFloat(cpc).toFixed(2);
  const parsedAverage = parseFloat(averageCalls).toFixed(2);
  target.dataset.subTotal = parsedAverage * parsedCpc;
}
