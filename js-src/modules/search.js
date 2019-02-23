import utils from '../utilities/utils';

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

/**
 * queryString
 * @type {*}
 */
const queryString = getParameterByName('search');

/**
 * @desc set title and URL
 * @param el
 * @param title
 * @param link
 */
const setResultHead = function(el, title, link, formattedUrl) {
  el.getElementsByClassName(
    'search-result__title',
  )[0].innerHTML = `<a href="${link}" target="_self">${title}</a>`;
  el.getElementsByClassName(
    'search-result__url',
  )[0].innerHTML = `<a href="${link}" target="_self">${formattedUrl}</a>`;
};

/**
 * @desc set snippet in innerHTML
 * @param el
 * @param snippet
 */
const setResultSnippet = function(el, snippet) {
  el.getElementsByClassName('search-result__snippet')[0].innerHTML = snippet;
};

/**
 *
 * @param template
 * @returns {*|Node|ActiveX.IXMLDOMNode}
 */
const makeResultContainer = function(template) {
  const clone = template.cloneNode(true);
  clone.style.display = 'flex';
  return clone;
};

/**
 * @desc event handler for XMLHttpRequest changes
 */
const showResults = function() {
  const [searchResultTemplateElement] = document.getElementsByClassName('search-result');
  const [noResultsElement] = document.getElementsByClassName('jsNoSearchResults');
  const [searchReturnsForbiddenElement] = document.getElementsByClassName('js-search-google-403');
  const [resultListContainerElement] = document.getElementsByTagName('ol');
  const [amountOfResultsElement] = document.getElementsByClassName('number-of-results');

  const httpStatusOk = this.status === 200;
  const httpStatusForbidden = this.status === 403;
  const requestReadyStateDone = this.readyState === 4;

  const requestDone = httpStatusOk && requestReadyStateDone;

  if (requestDone) {
    const { items, searchInformation } = JSON.parse(this.responseText);

    const hasResults = typeof items !== 'undefined';
    if (hasResults) {
      if (utils.elementExists(noResultsElement)) {
        noResultsElement.style.display = 'none';
      }
      items.forEach(item => {
        const clone = makeResultContainer(searchResultTemplateElement);
        setResultHead(clone, item.htmlTitle, item.link, item.htmlFormattedUrl);
        setResultSnippet(clone, item.htmlSnippet);
        resultListContainerElement.appendChild(clone);
      });
      if (utils.elementExists(amountOfResultsElement)) {
        console.log(amountOfResultsElement);
        amountOfResultsElement.innerHTML = `(${searchInformation.totalResults})`;
      }
    } else if (utils.elementExists(noResultsElement) && noResultsElement.style.display === 'none') {
      noResultsElement.style.display = 'flex';
    }
  } else if (httpStatusForbidden) {
    if (searchReturnsForbiddenElement) {
      if (utils.elementExists(noResultsElement)) {
        noResultsElement.style.display = 'none';
      }
      searchReturnsForbiddenElement.style.display = 'flex';
    }
  }
};

/**
 * loadResults
 * @desc Load the results via Google API
 * @param query {string} | the query to seach for
 */
const loadResults = query => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = showResults;
  xhttp.open(
    'GET',
    `https://www.googleapis.com/customsearch/v1` +
      `?key=${process.env.GOOGLE_API_KEY}` +
      `&cx=${process.env.GOOGLE_ENGINE}` +
      `&q=${query}&hl=en`,
    true,
  );
  xhttp.send();
};

export default function() {
  if (queryString !== null && queryString !== '') {
    loadResults(queryString);
    const searchBox = document.getElementById('search-knowledgebase');
    if (utils.elementExists(searchBox)) {
      searchBox.value = decodeURIComponent(`${queryString}`.replace(/\+/g, '%20'));
    }
  }
}
