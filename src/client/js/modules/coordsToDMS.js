import getDecimal from "./getDecimal";

/**
 * Converts coords in decimals to degrees, minutes and seconds
 * @param {number} val the coordinate in longitude and latitude
 * @param {boolean} long is it longitude or latitude - default: true
 * @returns string
 */
export default function coordsToDMS(val, long = true) {
  const base = Math.abs(val);
  const deg = Math.floor(base);
  const minute = getDecimal(base) * 60;
  const second = getDecimal(minute) * 60;
  const positive = long ? "E" : "N";
  const negative = long ? "W" : "S";
  return val > 0
    ? `${deg}° ${Math.floor(minute)}' ${Math.floor(second)}'' ${positive}`
    : `${deg}° ${Math.floor(minute)}' ${Math.floor(second)}'' ${negative}`;
}
