
import setFeatureCellText from './setFeatureCellText';
import createCloneFromTemplate from './createCloneFromTemplate';

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
      /** clone the template for each label */
      const clone = createCloneFromTemplate(template);
      setFeatureCellText(clone, labels[i].title, 'feature-label');
      setFeatureCellText(clone, labels[i].desc, 'feature-description');
      setFeatureCellText(clone, data[i].cpc, 'feature-cpc');
      setFeatureCellText(clone, data[i].average, 'feature-average');
      clone.classList.remove('template-table-pricing-row--hidden');
      clone.classList.add('template-table-pricing-row--visible');
      rowsMap.set(i, clone);
    });
    /** Append all the rows to the row-container */
    rowsMap.forEach(item => {
      containerNode.appendChild(item);
    });
  }
}
