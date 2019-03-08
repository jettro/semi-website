
import { localizeNumber } from '../../helpers/helpers';
import createCloneFromTemplate from './createCloneFromTemplate';
import setFeatureCellText from './setFeatureCellText';
import setFeatureSubTotal from './setFeatureSubTotal';

import PubSub from 'pubsub-js';

/**
 * @desc generate all the rows
 * @param template {HTMLElement} template to use for the clone for each row
 * @param labels {object} label to add as first cell of each row
 * @param data {object} data to be used in cells in each row
 * @param containerNode {HTMLElement} The container element in which the rows should be appended to
 */
export default function(template, labels, data, containerNode) {
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
    // setTimeout(function(){
    //   PubSub.unsubscribe( testSubscription );
    // }, 0);
  }
}
