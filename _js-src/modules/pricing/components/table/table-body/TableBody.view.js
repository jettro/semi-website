import tableRowComponent from '../table-row';
import stringToHTMLCollection from '../../../../../utilities/stringToHTMLCollection';
import CollapseComponent from '../../collapse/collapse';

export default class TableBodyView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a TableBodyController.');
    }
    return controller;
  }

  /**
   * @returns {string} the button html element as a string
   */
  static htmlString() {
    return `<tbody class="table-row-container"></tbody>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = TableBodyView.initialize(controller);
    this.tableBody = stringToHTMLCollection(TableBodyView.htmlString())[0];

    Object.entries(this.controller.rows).forEach(([key, row]) => {
      const collapseElement = CollapseComponent(row.title, row.desc).create();
      // TODO: Start by a refactor into custom element maybe?
      // console.log(collapseElement);
      tableRowComponent(row, collapseElement).renderInto(this.tableBody);
    });
  }

  /**
   * @desc renders into the target node provided
   * @param targetNode {Element} the target node provided
   */
  renderInto(targetNode) {
    if(!targetNode) return;
    targetNode.insertAdjacentElement('beforeend', this.tableBody);
  }
}
