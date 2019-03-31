/**
 * @desc Removes an object by key from an Array
 * @param object {Object<string, any>} the array to remove the config object from
 * @param objectKey {String} a string which defines the  key to remove from the Array
 * @returns {?Array} New array where the defined object is removed from
 */
export default function(object, objectKey) {
  /** @type {Array!} */
  let options = [];
  for (let option of Object.values(object)) {
    const [key] = Object.keys(option);
    if (key !== objectKey) {
      options.push(option);
    }
  }
  return options;
}