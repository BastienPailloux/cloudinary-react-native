"use strict";

/**
 * @desc Turns arguments that aren't arrays into arrays
 * @param arg
 * @returns { any | any[] }
 */
function toArray(arg) {
  switch (true) {
    case arg == null:
      return [];
    case isArray(arg):
      return arg;
    default:
      return [arg];
  }
}
function isArray(arg) {
  return Array.isArray(arg);
}
module.exports = toArray;
//# sourceMappingURL=toArray.js.map