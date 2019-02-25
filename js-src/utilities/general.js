/**
 * @desc use to check if an element exists
 * @param element {*|Node|ActiveX.IXMLDOMNode} the element to check existence of
 * @returns {boolean}
 */
function elementExists(element) {
  return typeof element != 'undefined' && element != null;
}

/**
 * getParameterByName
 * @desc get the query param by name
 * @param name {string} the name of the parameter to get
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
