import utils from '../utilities/utils';

// TODO: refactor this const into functions
const [resultListContainerElement] = document.getElementsByClassName('search-result-list');

/**
 * @desc set title and URL
 * @param el
 * @param title
 * @param link
 * @param formattedUrl
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
 *
 * @param response
 */
const generateSearchResultsList = function(response) {
  const [searchResultTemplateElement] = document.getElementsByClassName('search-result');
  const { items } = response;

  const hasResults = typeof items !== 'undefined';
  if (hasResults) {
    items.forEach(item => {
      const clone = makeResultContainer(searchResultTemplateElement);
      setResultHead(clone, item.htmlTitle, item.link, item.htmlFormattedUrl);
      setResultSnippet(clone, item.htmlSnippet);
      resultListContainerElement.appendChild(clone);
    });
  }
};

/**
 *
 */
const hideNoResultsInfo = function() {
  const [noResultsElement] = document.getElementsByClassName('jsNoSearchResults');
  if (utils.elementExists(noResultsElement)) {
    noResultsElement.style.display = 'none';
  }
};

/**
 *
 * @param response
 */
const showNumberOfResults = function(response) {
  const totalResults = response.searchInformation.totalResults;
  const [amountOfResultsElement] = document.getElementsByClassName('number-of-results');
  if (utils.elementExists(amountOfResultsElement)) {
    amountOfResultsElement.innerHTML = `(${totalResults})`;
  }
};


/**
 * @desc show pagination, add index to next and previous button
 * @param response
 */
const pagination = function(response) {
  const nextButtonClassName = 'pagination__button-next';
  const previousButtonClassName = 'pagination__button-previous';
  const [pagination] = document.getElementsByClassName('pagination');
  const [nextButton] = document.getElementsByClassName(nextButtonClassName);
  const [previousButton] = document.getElementsByClassName(previousButtonClassName);

  const queries = response.queries;
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
 *
 * @param query
 */
const showUpdateSearchbox = function(query) {
  const searchBox = document.getElementById('search-knowledgebase');
  if (utils.elementExists(searchBox)) {
    searchBox.value = decodeURIComponent(`${query}`.replace(/\+/g, '%20'));
  }
};

/**
 *
 * @param url
 * @returns {Promise<any>}
 */
const getJSONResults = function(url) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = handleResponse;
    xhr.onerror = function(error) { reject(error); };
    xhr.send();
    function handleResponse() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(this.statusText);
        }
      }
    }
  });
};

export default function() {

  const queryString = utils.getParameterByName('search');

  // on page load
  if (queryString !== null && queryString !== '') {

    const urlParamIndex = window.location.hash.substring(1);
    const startIndex = urlParamIndex !== '' ? urlParamIndex : 1;

    const ajaxPromise = getJSONResults(
      `https://www.googleapis.com/customsearch/v1` +
      `?key=${process.env.GOOGLE_API_KEY}` +
      `&cx=${process.env.GOOGLE_ENGINE}` +
      `&q=${queryString}&hl=en&start=${startIndex}`);

    ajaxPromise.then(function(response) {
                 hideNoResultsInfo();
                 showNumberOfResults(response);
                 generateSearchResultsList(response);
                 pagination(response);
                 showUpdateSearchbox(queryString);
               })
               .catch(function(e){ console.info(e); });
  }

  // when you click on a next or previous button it should change

  // when the hash is changed
  // fade out the existing content
  // fade in new content
  // window.dispatchEvent(new HashChangeEvent('hashchange'));
  // window.onhashchange = function() {
  //   console.log('this hash is changed!');
  // }
};



//   const [noResultsElement] = document.getElementsByClassName('jsNoSearchResults');
//   const [searchReturnsForbiddenElement] = document.getElementsByClassName('js-search-google-403');
//
//   const httpStatusOk = this.status === 200;
//   const httpStatusForbidden = this.status === 403;
//   const requestReadyStateDone = this.readyState === 4;
//
//   const requestDone = httpStatusOk && requestReadyStateDone;
//
//   if (requestDone) {
//
//   } else if (utils.elementExists(noResultsElement) && noResultsElement.style.display === 'none') {
//     noResultsElement.style.display = 'flex';
//   }
// } else if (httpStatusForbidden) {
//   if (searchReturnsForbiddenElement) {
//     if (utils.elementExists(noResultsElement)) {
//       noResultsElement.style.display = 'none';
//     }
//     searchReturnsForbiddenElement.style.display = 'flex';
//   }
// }