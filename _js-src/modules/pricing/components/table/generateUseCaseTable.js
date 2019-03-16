import { elementExists, localizeNumber } from '../../../../helpers/helpers';
import createCloneFromTemplate from '../../common/createCloneFromTemplate';
import setFeatureCellText from '../../common/setFeatureCellText';
import PubSub from 'pubsub-js';

const useCaseData = require('../../../../../_data/pricingUseCases');

/**
 *
 * @param node {HTMLElement} element to check if content should be added
 * @param targetClassName {string} The class to identify the node by
 * @param innerContent {string} The content to add
 */
const setUseCaseInfo = function(node, targetClassName, innerContent) {
  const targetExists = typeof(node.classList) != 'undefined' && node.classList.contains(targetClassName);
  if(targetExists && innerContent) {
    node.innerHTML = innerContent;
  }
};

/**
 * @desc Add the total of cpc and average call amount to data attribute
 * @param target
 * @param cpc
 * @param averageCalls
 */
const setFeatureSubTotal = function(target, cpc, averageCalls) {
  // TODO: add error handler for cpc and average, for instance what happens when something other than a number is used
  const parsedCpc = parseFloat(cpc).toFixed(2);
  const parsedAverage = parseFloat(averageCalls).toFixed(2);
  target.dataset.subTotal = parsedAverage * parsedCpc;
};

/**
 * @desc generate all the rows
 * @param template {HTMLElement} template to use for the clone for each row
 * @param labels {object} label to add as first cell of each row
 * @param data {object} data to be used in cells in each row
 * @param containerNode {HTMLElement} The container element in which the rows should be appended to
 */
const generateCpcRows = function(template, labels, data, containerNode) {
  const hasLabels = typeof labels !== 'undefined';

  if(hasLabels) {
    const rowsMap = new Map();
    /** Set all the data in the rows */
    labels.forEach((label, i) => {
      const cpcConverted = localizeNumber(data[i].cpc);
      const avgConverted = localizeNumber(data[i].average);
      /** clone the template for each label */
      const clone = createCloneFromTemplate(template);
      setFeatureCellText(clone, labels[i].title, 'feature-label');
      setFeatureCellText(clone, labels[i].desc, 'feature-description');
      setFeatureCellText(clone, cpcConverted, 'feature-cpc');
      setFeatureCellText(clone, avgConverted, 'feature-average');
      setFeatureSubTotal(clone, data[i].cpc, data[i].average);
      clone.classList.remove('template-table-pricing-row--hidden');
      clone.classList.add('template-table-pricing-row--visible');
      rowsMap.set(i, clone);
    });

    PubSub.publish('generatedCpcRows');

    /** Append all the rows to the row-container */
    rowsMap.forEach(item => {
      containerNode.appendChild(item);
    });
  }
};

/**
 * @param useCaseKey {string} A key to identify the correct values in the pricingUseCases.json (JSON) file
 * @param pricingInfoTableContainerClassName {string} The container of the pricing information table
 * @param pricingRowTemplateClassName {string} The template for each pricing information table row
 * @param pricingInfoTemplateId {string} The template for the pricing information block
 */
export default function(
  useCaseKey,
  pricingInfoTableContainerClassName,
  pricingRowTemplateClassName,
  pricingInfoTemplateId,
  callback
) {
  const infoTemplateElement = document.getElementById(pricingInfoTemplateId);

  if (elementExists(infoTemplateElement)) {
    const useCaseLabels = useCaseData.cpcLabels;
    const thisUseCaseData = useCaseData.useCases[0][useCaseKey];
    const consumptions = thisUseCaseData.consumptions;
    const cloneInfoContainer = document.getElementById('container-pricing-use-case');
    const cloneInfoTemplate = createCloneFromTemplate(infoTemplateElement);
    const thisInfoChildElements = cloneInfoTemplate.querySelectorAll('*');

    /** append the clone to the container */
    cloneInfoContainer.appendChild(cloneInfoTemplate);

    /** show the correct clone based on use-case key */
    cloneInfoTemplate.dataset.useCase = useCaseKey;

    /** show the table panel */
    cloneInfoTemplate.classList.remove('template-pricing-use-case--hidden');
    cloneInfoTemplate.classList.add('template-pricing-use-case--show');

    thisInfoChildElements.forEach(childNode => {
      setUseCaseInfo(childNode, 'use-case-panel-label', thisUseCaseData.panelLabel);
      setUseCaseInfo(childNode, 'use-case-panel-description', thisUseCaseData.desc);
    });

    // TODO: improvement: target the template and container element not by classname but by other
    //                    method. ID would be logical, but since each use-case info block will have
    //                    an instance of this, ID isn't possible since only one may exist. Perhaps
    //                    a data attribute? (research info for this)
    const [rowTemplateElement] = cloneInfoTemplate.getElementsByClassName(
      pricingRowTemplateClassName,
    );
    const [tableRowContainer] = cloneInfoTemplate.getElementsByClassName(
      pricingInfoTableContainerClassName,
    );

    if (elementExists(tableRowContainer)) {
      generateCpcRows(rowTemplateElement, useCaseLabels, consumptions, tableRowContainer);
      callback(tableRowContainer);
    } else {
      console.info(
        `No container for the row elements is present. (rowContainer: ${tableRowContainer})`,
      );
    }

  } else {
    console.info(
      `Pricing container with classname ${pricingContainerClassName} does not exist. Please check the markup.`,
    );
  }
}
