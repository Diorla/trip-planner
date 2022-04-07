export default function dateRange(start, end) {
  const startDate = +new Date(start);
  const endDate = +new Date(end);
  const now = Date.now();

  if (now < startDate) return "before";
  if (now > endDate) return "after";
  return "within";
}
