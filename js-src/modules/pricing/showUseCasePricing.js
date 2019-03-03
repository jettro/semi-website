import { elementExists } from '../../helpers/helpers';
import generateCpcRows from './generateCpcRows';
import setUseCaseInfo from './setUseCaseInfo';
import createCloneFromTemplate from './createCloneFromTemplate';

const useCaseData = require('../../../_data/pricingUseCases');

/**
 * @desc This shows the use case pricing information block
 * @param useCaseKey {string} A key to identify the correct values in the pricingUseCases.json (JSON) file
 * @param pricingInfoContainerId {string} The container for all the pricing info blocks
 * @param pricingInfoTemplateId {string} The template for the pricing information block
 * @param useCaseKey {string} Use case key is used to retrieve data from ./_data/pricingUseCases.json
 * @param pricingInfoTableContainerClassName {string} The container of the pricing information table
 * @param pricingRowTemplateClassName {string} The template for each pricing information table row
 */
export default function(
  useCaseKey,
  pricingInfoContainerId,
  pricingInfoTemplateId,
  pricingInfoTableContainerClassName,
  pricingRowTemplateClassName,
) {
  const useCaseLabels = useCaseData.cpcLabels;
  const thisUseCaseData = useCaseData.useCases[0][useCaseKey];
  const consumptions = thisUseCaseData.consumptions;
  const infoTemplateElement = document.getElementById(pricingInfoTemplateId);

  if (elementExists(infoTemplateElement)) {
    const cloneInfoContainer = document.getElementById('container-pricing-use-case');
    const cloneInfoTemplate = createCloneFromTemplate(infoTemplateElement);

    const thisInfoChildElements = cloneInfoTemplate.querySelectorAll('*');

    // append the clone it on the right location
    cloneInfoContainer.appendChild(cloneInfoTemplate);

    // show/hide the template
    // TODO: add logic so only one template is shown,
    //       and the other that was shown remains in the DOM
    cloneInfoTemplate.classList.remove('template-pricing-use-case--hidden');
    cloneInfoTemplate.classList.add('template-pricing-use-case--show');

    thisInfoChildElements.forEach(childNode => {
      setUseCaseInfo(childNode, 'use-case-panel-label', thisUseCaseData.infoLabel);
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
