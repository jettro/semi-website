/**
 * @desc Returns a nice format of the number
 * @param number {Number} the number to localize
 * @param languageCode {String} localization language
 *        (see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation)
 * @returns {String}
 */
export default function(number, languageCode = 'nl') {
  const converted = Number(number).toLocaleString(languageCode);
  return converted;
}
