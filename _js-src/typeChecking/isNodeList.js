/**
 * @desc test to see if value is nodeList
 * @param entry {*}
 */
export default function (entry) {
  const isTypeNodeList = Object.prototype.toString.call(entry) === '[object NodeList]';
  return (isTypeNodeList);
}