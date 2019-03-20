import { addEventListenerOnce, elementExists } from '../../../../helpers/helpers';
import selectClickedElementByType from '../../common/selectClickedElementByType';
import createListItems from '../../common/createListItems';

import PubSub from 'pubsub-js';

import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import pricingConfig from '../../pricingConfig';
import { ListOptions } from '../list-options';

// /**
//  * @desc calculates the total cost of the use-cases
//  * @param containerElement {HTMLElement} The element containing all the pricing rows
//  * @returns {number} the calculated total number
//  */
// const calcTotalCostUseCases =  function(containerElement) {
//   const tableRows = containerElement.getElementsByClassName('table-pricing__row');
//   let useCaseTotal = 0;
//   for (let row of tableRows) {
//     if (typeof row.dataset.subTotal !== 'undefined' && isNumber(row.dataset.subTotal)) {
//       const useCaseSubTotal = row.dataset.subTotal;
//       useCaseTotal += parseInt(useCaseSubTotal);
//     }
//   }
//   return useCaseTotal;
// };
//
// /**
//  *
//  * @param panels {object} the panels that exist on the page
//  * @param currentUseCaseKey {string} use case key to test if the element already exists
//  * @returns {boolean} returns true if the element doesn't exist
//  */
// const panelDoesNotExist = function(panels, currentUseCaseKey) {
//   const panelsMap = new Map();
//   Array.from(panels).forEach((panel, i) => {
//     const panelUseCaseKey = panel.dataset.useCase;
//     panelsMap.set(i, panelUseCaseKey === currentUseCaseKey);
//   });
//   for (let [k, v] of panelsMap) {
//     if (v === true) {
//       return false;
//     }
//   }
//   return true;
// };
//
// /**
//  * @desc toggle the existing panels based on use-case key
//  * @param panels {object} the panels that exist on the page
//  * @param currentUseCaseKey {string} The current use case key to compare
//  */
// const toggleUseCasePanels = function(panels, currentUseCaseKey, callback) {
//   const showPanelClass = 'template-pricing-use-case--show';
//   const hidePanelClass = 'template-pricing-use-case--hidden';
//
//   if (typeof currentUseCaseKey === 'undefined') {
//     console.info(`The use case key hasn't been defined.`);
//   }
//   Array.from(panels).forEach(panel => {
//     const notAUseCasePanel = typeof panel.dataset.useCase === 'undefined';
//     const currentPanel = panel.dataset.useCase === currentUseCaseKey;
//     const notCurrentPanel = panel.dataset.useCase !== currentUseCaseKey;
//     if (notAUseCasePanel) {
//       return;
//     }
//     if (currentPanel) {
//       panel.classList.add(showPanelClass);
//       panel.classList.remove(hidePanelClass);
//       callback(panel);
//     }
//     if (notCurrentPanel) {
//       panel.classList.add(hidePanelClass);
//       panel.classList.remove(showPanelClass);
//     }
//   });
// };


/**
 *
 * @param target {HTMLElement} the target this choice applies to
 * @param showNextChoiceHandler
 */
export default function(target, showNextChoiceHandler = undefined) {

  const container = document.getElementById(pricingConfig.pricingInfoContainerId);

  const data = pricingUseCaseData.useCases;
  const options = data.map((o) => {
    const useCaseKey = Object.getOwnPropertyNames(o)[0];
    const title = Object.values(o)[0].title;
    if (!useCaseKey)
      throw new Error('You must provide a use case key in the data.');
    if (!title)
      throw new Error('You must provide a title in the  data.');
    return { title: title, useCaseKey: useCaseKey };
  });

  if (elementExists(container)) {

    const listOptionsElement = new ListOptions(createListItems(options)).render();

    /** insert list with buttons to container */
    container.insertAdjacentElement('beforeend', listOptionsElement);

    // let doCalculationOn;
    // const panels = container.getElementsByClassName(pricingConfig.panelsClassName);
    // /** hide the other panels if it's not the use-case that's clicked */
    // toggleUseCasePanels(panels, useCaseKey, function(panelContainer) {
    //   [doCalculationOn] = panelContainer.getElementsByClassName('table-row-container');
    // });
    //
    // if (panelDoesNotExist(panels, useCaseKey)) {
    //   /** the panel doesn't exist, create it */
    //   generateUseCaseTable(
    //     useCaseKey,
    //     pricingConfig.pricingInfoTableContainerClassName,
    //     pricingConfig.pricingRowTemplateClassName,
    //     pricingConfig.pricingInfoTemplateId,
    //     function(tableRowContainer) {
    //       doCalculationOn = tableRowContainer;
    //     },
    //   );
    // }
    //
    // if (doCalculationOn) {
    //   // TODO: maybe add pricingReceipt.setVariableMonthlyCost() as scoped function
    //   const total = calcTotalCostUseCases(doCalculationOn);
    //   setVariableMonthlyCost(total);
    //   /** recalculate the total */
    //   reCalculateTotal();
    // }

  } else {
    console.info(`There is no pricing info container with the id ${container}`);
  }

  // target.addEventListener('click', e => {
  //   e.preventDefault();
  //
  //   /** Logic for the radio buttons*/
  //   formPricingRadioButtons(e, target, function() {
  //     const button = selectClickedElementByType(e, 'BUTTON');
  //     if (elementExists(button)) {
  //       const useCaseKey = button.dataset.useCase;
  //       const useCaseKeyExists = useCaseKey !== '';
  //       if (useCaseKeyExists) {
  //         showUseCasePricing(useCaseKey);
  //       }
  //     }
  //   });
  // });

  PubSub.subscribe('buttonClicked', () => {
    showNextChoiceHandler();
  });
}
