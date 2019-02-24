/**
 * @desc
 * @param element
 * @returns {boolean}
 */
function elementExists(element) {
  return typeof element != 'undefined' && element != null;
}

/**
 * getParameterByName
 * @desc get the query param by name
 * @param name
 * @returns {*}
 */
const getParameterByName = name => {
  const cleanName = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${cleanName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(window.location.href);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace('/+/g', ' '));
};

export default { elementExists, getParameterByName };
