import utils from '../utilities/utils';

// TODO: refactor this const into functions or config
const [resultListContainerElement] = document.getElementsByClassName('search-result-list');
const [searchResultTemplateElement] = document.getElementsByClassName('search-result');
const [pagination] = document.getElementsByClassName('pagination');
const nextButtonClassName = 'pagination__button-next';
const previousButtonClassName = 'pagination__button-previous';

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
 * @desc remove all list items except the first since that's the template
 */
const removeSearchResultsListItems = function() {
  const results = resultListContainerElement.getElementsByClassName('search-result');
  while (results[1]) results[1].parentNode.removeChild(results[1]);
};

/**
 * @desc Hide markup containing no results info
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
 *
 * @param response
 * @returns {*}
 */
const searchResultsListItems = function(response) {
  const { items } = response;
  const hasResults = typeof items !== 'undefined';
  if (hasResults) {
    const myMap = new Map();
    items.forEach((item, i) => {
      const clone = makeResultContainer(searchResultTemplateElement);
      setResultHead(clone, item.htmlTitle, item.link, item.htmlFormattedUrl);
      setResultSnippet(clone, item.htmlSnippet);
      myMap.set(i, clone);
    });
    return myMap;
  }
};

/**
 *
 * @param response
 */
const generateResults = function(response) {
  const searchResultListItems = searchResultsListItems(response);
  searchResultListItems.forEach((item) => {
    resultListContainerElement.appendChild(item);
  });
};

/**
 * @desc show pagination, add index to next and previous button
 * @param response
 */
const generatePagination = function(response) {
  const [nextButton] = document.getElementsByClassName(nextButtonClassName);
  const [previousButton] = document.getElementsByClassName(previousButtonClassName);
  const queries = response.queries;
  const nextPage = queries.nextPage;
  const previousPage = queries.previousPage;
  if (pagination) {
    pagination.style.display = 'flex';
    if (nextPage) {
      nextButton.style.display = 'flex';
      nextButton.dataset.goToPageIndex = nextPage[0].startIndex;
    } else {
      nextButton.style.display = 'none';
    }
    if (previousPage) {
      previousButton.style.display = 'flex';
      previousButton.dataset.goToPageIndex = previousPage[0].startIndex;
    } else {
      previousButton.style.display = 'none';
    }
  }
};

/**
 *
 * @param query
 */
const showUpdatedSearchbox = function(query) {
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

  // initially on pageload populate page using XHR
  const queryString = utils.getParameterByName('search');
  if (queryString !== null && queryString !== '') {

    const urlParamIndex = window.location.hash.substring(1);
    const startIndex = urlParamIndex !== '' ? urlParamIndex : 1;

    const searchResultsPromise = getJSONResults(
      `https://www.googleapis.com/customsearch/v1` +
      `?key=${process.env.GOOGLE_API_KEY}` +
      `&cx=${process.env.GOOGLE_ENGINE}` +
      `&q=${queryString}&hl=en&start=${startIndex}`);

    searchResultsPromise.then(function(response) {
       hideNoResultsInfo();
       showNumberOfResults(response);
       generateResults(response);
       resultListContainerElement.classList.add('search-result-list--fade-in');
       generatePagination(response);
       showUpdatedSearchbox(queryString);
     })
     .catch(function(e){
       console.info(e);
     });
  }

  // when pagination is clicked re-generate using XHR
  if (utils.elementExists(pagination)) {
    pagination.addEventListener('click', function(e) {
      if (e.target.classList.contains(nextButtonClassName) || e.target.classList.contains(previousButtonClassName)) {
        const newStartIndex = e.target.dataset.goToPageIndex;
        const newSearchResultsPromise = getJSONResults(
          `https://www.googleapis.com/customsearch/v1` +
          `?key=${process.env.GOOGLE_API_KEY}` +
          `&cx=${process.env.GOOGLE_ENGINE}` +
          `&q=${queryString}&hl=en&start=${newStartIndex}`);

        resultListContainerElement.classList.remove('search-result-list--fade-in');

        newSearchResultsPromise.then(function(response) {
          removeSearchResultsListItems();
          // timeout for animation to finish
          setTimeout(function(){
            generateResults(response);
            resultListContainerElement.classList.add('search-result-list--fade-in');
            generatePagination(response);
          }, 250);

          window.location.hash = newStartIndex;
        })
        .catch(function(e){
          console.info(e);
        });
      }
    }, true)
  }
};
