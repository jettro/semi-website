/** TODO: replace this function with a more solid one (and combine with ./localizeNumber.js instead) */
/**
 * @desc localizes the string to number, and replaces the points with commas
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
