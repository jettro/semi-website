
/**
 * @desc localizes the string to number depending on the language of choice
 * @param n {number} the number to localize
 * @returns {number}
 */
export default function(n) {
  /**
   * can be used for conversion to non-EU numbers:
   * return parseFloat(n.replace(",", ".")).toFixed(2);
   * source: https://stackoverflow.com/questions/28894971/problems-with-javascript-parseint-decimal-string
   */
  /** note: this function doesn't return decimals */
  return parseFloat(n.replace(/\./g,''));
}
