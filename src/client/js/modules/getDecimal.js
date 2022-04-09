/**
 * Returns only the decimal part of a number
 * @param {number} val a floating point number
 * @returns number
 * @example getDecimal(45.2335) // 0.2335
 */
export default function getDecimal(val) {
  return Math.abs(val) - Math.floor(Math.abs(val));
}
