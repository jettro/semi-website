import PubSub from 'pubsub-js';

import { isNumber, elementExists } from '../../../../helpers/helpers';
import { setVariableMonthlyCost, reCalculateTotal } from '../../components/receipt/pricingReceiptFunctions';
import createListItems from '../../common/createListItems';
import pricingUseCaseData from '../../../../../_data/pricingUseCases';
import pricingConfig from '../../pricingConfig';
import { ListOptions } from '../list-options';

import { TableController, TableModel, TableView } from '../table/table';
import { TableHeadController, TableHeadModel, TableHeadView } from '../table/table-head';
import { TableBodyController, TableBodyModel, TableBodyView } from '../table/table-body';
import { TableRowController, TableRowModel, TableRowView } from '../table/table-row';
import { ExpansionPanelHeadController, ExpansionPanelHeadModel, ExpansionPanelHeadView } from '../expansion-panel/expansion-panel-head';
import { ExpansionPanelBodyController, ExpansionPanelBodyModel, ExpansionPanelBodyView } from '../expansion-panel/expansion-panel-body';

const merge = require('lodash.merge');

const showPanelClass = 'panel-pricing-use-case--show';
const hidePanelClass = 'panel-pricing-use-case--hidden';

/**
 * @desc calculates the total cost of the use-cases
 * @param containerElement {HTMLElement} The element containing all the pricing rows
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
 * @desc gets the visible table based on the the hidden class being abscent from the template
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

    const listOptionsElement = new ListOptions(createListItems(options)).render();

    /** insert list with buttons to container */
    container.insertAdjacentElement('beforeend', listOptionsElement);

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

        const tableModel = new TableModel(),
          tableController = new TableController(tableModel),
          tableView = new TableView(tableController);

        const tableHeadModel = new TableHeadModel(),
          tableHeadController = new TableHeadController(tableHeadModel),
          tableHeadView = new TableHeadView(tableHeadController);

        const tableBodyModel = new TableBodyModel(),
          tableBodyController = new TableBodyController(tableBodyModel),
          tableBodyView = new TableBodyView(tableBodyController);

        const expansionPanelHeadModel = new ExpansionPanelHeadModel(singleUseCase.panelLabel),
          expansionPanelHeadController = new ExpansionPanelHeadController(expansionPanelHeadModel),
          expansionPanelHeadView = new ExpansionPanelHeadView(expansionPanelHeadController);

        const expansionPanelBodyModel = new ExpansionPanelBodyModel(),
          expansionPanelBodyController = new ExpansionPanelBodyController(expansionPanelBodyModel),
          expansionPanelBodyView = new ExpansionPanelBodyView(expansionPanelBodyController);

        const expansionPanelContainer = document.getElementById('panel-collapse-container');
        const expansionPanel = document.createElement('DIV');
        expansionPanel.classList.add('panel-collapse');
        expansionPanel.dataset.useCase = currentUseCase;
        expansionPanelContainer.insertAdjacentElement('beforeend', expansionPanel);
        expansionPanel.insertAdjacentElement('beforeend', expansionPanelHeadView.render());
        expansionPanel.insertAdjacentElement('beforeend', expansionPanelBodyView.render());

        const collapseBodyElement = expansionPanel.querySelector('.panel-collapse__body');
        collapseBodyElement.insertAdjacentElement('beforeend', tableView.render());
        const [table] = collapseBodyElement.getElementsByTagName('TABLE');
        table.insertAdjacentElement('beforeend', tableHeadView.render());
        table.insertAdjacentElement('beforeend', tableBodyView.render());
        const [tableBody] = collapseBodyElement.getElementsByTagName('TBODY');

        const useCaseConsumptions = merge(useCaseLabels, consumptions);

        /** create a row for each consumption in a use case and add it in the body */
        useCaseConsumptions.forEach((option) => {
          const tableRowModel = new TableRowModel(option.title, option.desc, option.cpc, option.average),
            tableRowController = new TableRowController(tableRowModel),
            tableRowView = new TableRowView(tableRowController);

          tableBody.insertAdjacentElement('beforeend', tableRowView.render());
        });
      }

      /** calculate the costs of visible table */
      const total = calcTotalCostUseCases(getVisibleTable(panels));
      setVariableMonthlyCost(total);
      /** recalculate the total */
      reCalculateTotal();

      showNextChoiceHandler();
    });

  } else {
    console.info(`There is no pricing info container with the id ${container}`);
  }
}
