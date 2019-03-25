import PubSub from 'pubsub-js';
const merge = require('lodash.merge');

import { isNumber, elementExists } from '../../../../helpers/helpers';
import { setVariableMonthlyCost, reCalculateTotal } from '../../components/receipt/pricingReceiptFunctions';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import pricingConfig from '../../pricingConfig';

import listOptionsComponent from '../list-options/list'
import listOptionItemComponent from '../list-options/list-option-item';
import buttonRadioComponent from '../button-radio';
import expansionPanelHeadComponent from '../expansion-panel/expansion-panel-head';
import expansionPanelBodyComponent from '../expansion-panel/expansion-panel-body';
import tableComponent from '../table/table';
import tableHeadComponent from '../table/table-head';
import tableBodyComponent from '../table/table-body';
import tableRowComponent from '../table/table-row';
import collapseBodyComponent from '../collapse/collapse-body';
import collapseTriggerComponent from '../collapse/collapse-trigger';

const showPanelClass = 'panel-pricing-use-case--show';
const hidePanelClass = 'panel-pricing-use-case--hidden';

/**
 * @desc calculates the total cost of the use-cases
 * @param table {HTMLElement} The element containing all the pricing rows
 * @returns {number} the calculated total number
 */
const calcTotalCostUseCases =  function(table) {
  const tableRows = table.getElementsByClassName('table-pricing__row');
  let useCaseTotal = 0;
  for (let row of tableRows) {
    if (typeof row.dataset.subTotal !== 'undefined' && isNumber(row.dataset.subTotal)) {
      const useCaseSubTotal = row.dataset.subTotal;
      useCaseTotal += parseInt(useCaseSubTotal);
    }
  }
  return useCaseTotal;
};

/**
 * @desc toggle the existing panels based on use-case key
 * @param panels {object} the panels that exist on the page
 * @param currentUseCaseKey {string} The current use case key to compare
 */
const toggleUseCasePanels = function(panels, currentUseCaseKey) {
  if (typeof currentUseCaseKey === 'undefined') {
    console.info(`The use case key hasn't been defined.`);
  }
  Array.from(panels).forEach(panel => {
    const currentPanel = panel.dataset.useCase === currentUseCaseKey;
    const notCurrentPanel = panel.dataset.useCase !== currentUseCaseKey;
    if (currentPanel) {
      panel.classList.add(showPanelClass);
      panel.classList.remove(hidePanelClass);
    } else if (notCurrentPanel) {
      panel.classList.add(hidePanelClass);
      panel.classList.remove(showPanelClass);
    }
  });
};

/**
 * @desc gets the visible table based on the the hidden class being absent from the template
 * @param panels
 * @returns {*}
 */
const getVisibleTable = function(panels) {
  let result = [];
  Array.from(panels).forEach(panel => {
    if (!panel.classList.contains(hidePanelClass)) {
      result = panel;
    }
  });
  const [table] = result.getElementsByTagName('TABLE');
  return table;
};

/**
 * @desc removes an object by key from a [object Array]
 * @param object {Object} the array to remove the config object from
 * @param objectKey {String} a string which defines the  key to remove from [object Array]
 * @returns {Array} an array in which the
 */
export function removeObjectByKeyFromArray(object, objectKey) {
  let options = [];
  for (let option of Object.values(object)) {
    const [key] = Object.keys(option);
    /** don't include config as option option */
    if (key !== objectKey) {
      options.push(option);
    }
  }
  return options;
}

/**
 *
 * @param target {HTMLElement} the target this choice applies to
 * @param showNextChoiceHandler
 */
export default function(target, showNextChoiceHandler = undefined) {
  let existingPanelKeys = [];
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

    /** create list options */
    const optionsListItemButtonMap = new Map();
    removeObjectByKeyFromArray(options, 'config').forEach((option, i) => {

      /** create list item template so the button can be asserted inside */
      let template = document.createElement('template');
      listOptionItemComponent(undefined, 'multiplier').renderInto(template);

      /** use list item template to assert button radio into */
      let [li] = template.getElementsByTagName('LI');
      buttonRadioComponent(option.title, option.useCaseKey).renderInto(li);
      optionsListItemButtonMap.set(i, li);
    });

    /** insert optionsListItemButtonMap containing map with HTML elements into container */
    listOptionsComponent(optionsListItemButtonMap).renderInto(container);

    const panels = document.getElementsByClassName('panel-collapse');

    /** when a radio button in the list is clicked, show the table in an expansion panel */
    PubSub.subscribe('buttonClicked', (msg, button) => {
      const currentUseCase = button.dataset.useCase;
      const flattenedUseCaseData = Object.assign({}, ...data);
      const singleUseCase = flattenedUseCaseData[currentUseCase];

      /**
       * Toggle the panels
       */
      toggleUseCasePanels(panels, currentUseCase);

      const panelAlreadyExists = existingPanelKeys.includes(currentUseCase);
      if (!panelAlreadyExists) {
        /**
         * When the expansion panel with table does not exist, create it
         */
        existingPanelKeys.push(currentUseCase);

        const useCaseLabels = pricingUseCaseData.cpcLabels;
        const consumptions = singleUseCase.consumptions;

        const expansionPanelContainer = document.getElementById('panel-collapse-container');
        const expansionPanel = document.createElement('DIV');
        expansionPanel.classList.add('panel-collapse');
        expansionPanel.dataset.useCase = currentUseCase;
        expansionPanelContainer.insertAdjacentElement('beforeend', expansionPanel);

        expansionPanelHeadComponent(singleUseCase.panelLabel).renderInto(expansionPanel);
        expansionPanelBodyComponent().renderInto(expansionPanel);

        const collapseBodyElement = expansionPanel.querySelector('.panel-collapse__body');

        tableComponent().renderInto(collapseBodyElement);

        const [table] = collapseBodyElement.getElementsByTagName('TABLE');
        tableHeadComponent().renderInto(table);
        tableBodyComponent().renderInto(table);

        const [tableBody] = collapseBodyElement.getElementsByTagName('TBODY');
        const useCaseConsumptions = merge(useCaseLabels, consumptions);

        /** create a row for each consumption in a use case and add it in the body */
        useCaseConsumptions.forEach((option) => {
          const data = {
            title: option.title,
            desc: option.desc,
            cpc: option.cpc,
            average: option.average
          };

          const collapseElement = document.createElement('div');
          collapseTriggerComponent(data.title).renderInto(collapseElement);
          collapseBodyComponent(data.desc).renderInto(collapseElement);
          tableRowComponent(data, collapseElement).renderInto(tableBody);
        });
      }

      /** calculate the costs of visible table */
      const total = calcTotalCostUseCases(getVisibleTable(panels));
      setVariableMonthlyCost(total);
      /** recalculate the total */
      reCalculateTotal();

      /** show the next step */
      showNextChoiceHandler();
    });

  } else {
    console.info(`There is no pricing info container with the id ${container}`);
  }
}
