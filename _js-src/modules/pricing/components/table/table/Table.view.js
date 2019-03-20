import { htmlToElement } from '../../../../../helpers/helpers';
import PubSub from 'pubsub-js';

export default class TableView {

  /**
   * @desc Test for basic necessary functionality
   * @param controller
   * @returns {*}
   */
  static initialize(controller) {
    if (!controller) {
      throw new Error('You must provide a TableController.');
    }
    return controller;
  }

  /**
   * @returns {string} the button html element as a string
   */
  static htmlString() {
    return `<table class="table-pricing table-zebra"></table>`;
  }

  /**
   * @param controller
   */
  constructor(controller) {
    this.controller = TableView.initialize(controller);
    this.html = htmlToElement(TableView.htmlString());
    this.table = this.html;
    // PubSub.subscribe('buttonClicked', () => { this.showThisTable() });
  }

  /**
   * Use this if you need to render the element
   * @returns {Element} the table
   */
  render() {
    return this.html;
  }

  showThisTable() {
    console.log('yes this is working!');
  }
}
