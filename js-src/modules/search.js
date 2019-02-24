import utils from '../utilities/utils';

const [resultListContainerElement] = document.getElementsByClassName('search-result-list');

/**
 * queryString
 * @type {*}
 */
const queryString = utils.getParameterByName('search');

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
      if (utils.elementExists(amountOfResultsElement)) {
        amountOfResultsElement.innerHTML = `(${searchInformation.totalResults})`;
      }
      items.forEach(item => {
        const clone = makeResultContainer(searchResultTemplateElement);
        setResultHead(clone, item.htmlTitle, item.link, item.htmlFormattedUrl);
        setResultSnippet(clone, item.htmlSnippet);
        resultListContainerElement.appendChild(clone);
      });
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
 * @desc show pagination, add index to next and previous button
 */
const pagination = function() {
  const nextButtonClassName = 'pagination__button-next';
  const previousButtonClassName = 'pagination__button-previous';
  const [pagination] = document.getElementsByClassName('pagination');
  const [nextButton] = document.getElementsByClassName(nextButtonClassName);
  const [previousButton] = document.getElementsByClassName(previousButtonClassName);

  const queries = JSON.parse(this.responseText).queries;
  const nextPage = queries.nextPage;
  const previousPage = queries.previousPage;

  if (pagination) {
    pagination.style.display = 'flex';
    if (nextPage) {
      nextButton.dataset.goToPageIndex = nextPage[0].startIndex;
    }
    if (previousPage) {
      previousButton.style.display = 'flex';
      previousButton.dataset.goToPageIndex = previousPage[0].startIndex;
    }
  }
};

/**
 * loadResults
 * @desc Load the results via Google API
 * @param query {string} | the query to seach for
 */
const loadResults = (query, startIndex) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = showResults;
  xhr.addEventListener("load", pagination);
  const method = 'GET',
        url = `https://www.googleapis.com/customsearch/v1` +
              `?key=${process.env.GOOGLE_API_KEY}` +
              `&cx=${process.env.GOOGLE_ENGINE}` +
              `&q=${query}&hl=en&start=${startIndex}`;
  xhr.open(method, url, true);
  xhr.send();
};

export default function() {

  // on page load
  if (queryString !== null && queryString !== '') {

    const urlParamIndex = window.location.hash.substring(1);
    const startIndex = urlParamIndex !== '' ? urlParamIndex : 1;

    loadResults(queryString, startIndex);

    const searchBox = document.getElementById('search-knowledgebase');
    if (utils.elementExists(searchBox)) {
      searchBox.value = decodeURIComponent(`${queryString}`.replace(/\+/g, '%20'));
    }
  }

  // when the hash is changed
  // fade out the existing content
  // fade in new content
  // window.dispatchEvent(new HashChangeEvent('hashchange'));
  // window.onhashchange = function() {
  //   console.log('this hash is changed!');
  // }
}
