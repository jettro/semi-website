/**
 * @desc test to see if value is HTMLCollection
 * @param entry {*}
 */
export default function (entry) {
  const isTypeHTMLCollection = entry instanceof HTMLCollection;
  return (isTypeHTMLCollection);
}