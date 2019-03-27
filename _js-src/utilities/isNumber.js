
/**
 * @desc parses number with comma decimal separator
 * @param n {number}
 * @returns {boolean}
 */
export default function(n) {
  n = n.replace(/\./g, '').replace(',', '.');
  return !isNaN(parseFloat(n)) && isFinite(n);
}
