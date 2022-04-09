/**
 * Used to determine if today's date falls within the start and end date, or the date has already passed.
 * @param {any} start the start date
 * @param {any} end the end date
 * @returns "before" | "after" | "within"
 */
export default function dateRange(start, end) {
  const startDate = +new Date(start);
  const endDate = +new Date(end);
  const now = Date.now();

  if (now < startDate) return "before";
  if (now > endDate) return "after";
  return "within";
}
