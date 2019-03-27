/**
 * @desc test to see if entry is function
 * @param entry {*}
 */
export default function (entry) {
  const isTypeFunction = Object.prototype.toString.call(entry) === '[object Function]';
  return (isTypeFunction);
}
