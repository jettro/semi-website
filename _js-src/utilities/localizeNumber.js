
/**
 * @desc localize the number to the language of choice
 * @param n {number} the number to localize
 * @returns {string}
 */
export default function(n) {
  const numberLanguage = 'nl';
  return Number(n).toLocaleString(numberLanguage);
}
