import { elementExists } from '../../helpers/helpers';
import generateUseCaseTable from './generateUseCaseTable';
import pricingConfig from './pricingConfig';

/**
 *
 * @param panels {object} the panels that exist on the page
 * @param currentUseCaseKey {string} use case key to test if the element already exists
 * @returns {boolean} returns true if the element doesn't exist
 */
const panelDoesNotExist = function(panels, currentUseCaseKey) {
  const panelsMap = new Map();
  Array.from(panels).forEach((panel, i) => {
    const panelUseCaseKey = panel.dataset.useCase;
    panelsMap.set(i, panelUseCaseKey === currentUseCaseKey);
  });
  for (let [k, v] of panelsMap) {
    if (v === true) {
      return false;
    }
  }
  return true;
};

/**
 * @desc toggle the existing panels based on use-case key
 * @param panels {object} the panels that exist on the page
 * @param currentUseCaseKey {string} The current use case key to compare
 */
const toggleUseCasePanels = function(panels, currentUseCaseKey) {
  const showPanelClass = 'template-pricing-use-case--show';
  const hidePanelClass = 'template-pricing-use-case--hidden';

  if (typeof currentUseCaseKey === 'undefined') {
    console.info(`The use case key hasn't been defined.`);
  }
  Array.from(panels).forEach(panel => {
    const notAUseCasePanel = typeof panel.dataset.useCase === 'undefined';
    const currentPanel = panel.dataset.useCase === currentUseCaseKey;
    const notCurrentPanel = panel.dataset.useCase !== currentUseCaseKey;
    if (notAUseCasePanel) {
      return;
    }
    if (currentPanel) {
      panel.classList.add(showPanelClass);
      panel.classList.remove(hidePanelClass);
    }
    if (notCurrentPanel) {
      panel.classList.add(hidePanelClass);
      panel.classList.remove(showPanelClass);
    }
  });
};

/**
 * @desc This shows the use case pricing information block
 * @param useCaseKey {string} A key to identify the correct values in the pricingUseCases.json (JSON) file
 * @param pricingInfoContainerId {string} The container for all the pricing info blocks
 * @param useCaseKey {string} Use case key is used to retrieve data from ./_data/pricingUseCases.json
 */
export default function(useCaseKey, pricingInfoContainerId) {
  const pricingUseCaseContainer = document.getElementById(pricingInfoContainerId);
  if (elementExists(pricingUseCaseContainer)) {
    const panels = pricingUseCaseContainer.getElementsByClassName(pricingConfig.panelsClassName);

    /** hide the other panels if it's not the use-case that's clicked */
    toggleUseCasePanels(panels, useCaseKey);

    if (panelDoesNotExist(panels, useCaseKey)) {
      /** the panel doesn't exist, create it */
      generateUseCaseTable(
        useCaseKey,
        pricingConfig.pricingInfoTableContainerClassName,
        pricingConfig.pricingRowTemplateClassName,
        pricingConfig.pricingInfoTemplateId,
      );
    }
  } else {
    console.info(`There is no pricing info container with the id ${pricingUseCaseContaine}`);
  }
}
