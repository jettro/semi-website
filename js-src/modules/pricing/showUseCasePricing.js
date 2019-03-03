import { elementExists } from '../../helpers/helpers';
import generateCpcRows from './generateCpcRows';

const useCaseData = require('../../../_data/pricingUseCases');

/**
 *
 * @param e {}
 * @param useCaseKey {string} Use case key is used to retrieve data from ./_data/pricingUseCases.json
 * @param pricingInfoTemplateId {string} The container of the pricing information
 */
export default function(e, useCaseKey, pricingInfoTemplateId, pricingRowTemplateId) {
  const useCaseLabels = useCaseData.cpcLabels;
  const thisUseCaseData = useCaseData.useCases[0][useCaseKey];
  const consumptions = thisUseCaseData.consumptions;
  const infoTemplateElement = document.getElementById(pricingInfoTemplateId);

  if (elementExists(infoTemplateElement)) {

    console.log(infoTemplateElement);

    const [panelLabelElement] = document.getElementsByClassName('use-case-panel-label');
    const [panelDescriptionElement] = document.getElementsByClassName('use-case-panel-description');

    // retrieve data
    const label = thisUseCaseData.infoLabel;
    const description = thisUseCaseData.desc;

    // show the entire pricing element (if it is hidden)
    infoTemplateElement.style.display = 'flex';

    // TODO: remove old one and show new one (perhaps this entire function needs to be restated)

    if (elementExists(panelLabelElement) && typeof(label) != 'undefined') {
      panelLabelElement.innerHTML = label;
    }
    if (elementExists(panelDescriptionElement) && typeof(description) != 'undefined') {
      panelDescriptionElement.innerHTML = description;
    }

    const rowTemplateElement = document.getElementById(pricingRowTemplateId);
    const [rowContainer] = document.getElementsByClassName('table-row-container');

    if(elementExists(rowContainer)) {
      generateCpcRows(rowTemplateElement, useCaseLabels, consumptions, rowContainer)
    } else {
     console.info(`No container for the row elements is present. (rowContainer: ${rowContainer})`);
    }

  } else {
    console.info(`Pricing container with classname ${pricingContainerClassName} does not exist. Please check the markup.`);
  }
}
