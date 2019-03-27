/**
 * @desc test to see if value is of type Element
 * @param entry {*}
 */
export default function (entry) {
  const isTypeElement = entry instanceof Element;
  return (isTypeElement);
}