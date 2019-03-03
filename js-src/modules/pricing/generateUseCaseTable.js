import { elementExists } from '../../helpers/helpers';
import createCloneFromTemplate from './createCloneFromTemplate';
import setUseCaseInfo from './setUseCaseInfo';
import generateCpcRows from './generateCpcRows';

const useCaseData = require('../../../_data/pricingUseCases');

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
