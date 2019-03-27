/**
 * @desc test to see if value is a string
 * @param entry {*}
 */
export default function (entry) {
  const isTypeString = typeof entry === 'string' || entry instanceof String;
  return (isTypeString);
}
