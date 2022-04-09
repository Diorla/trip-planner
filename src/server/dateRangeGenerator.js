/**
 * It will pad the date appropriately, e.g. "2021-9-3" to "2021-09-03"
 * @param {any} date it will be converted into date
 * @returns string
 */
function formatDate(date) {
  const dt = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();
  return `${year}-${("00" + month).slice(-2)}-${("00" + dt).slice(-2)}`;
}

/**
 * Returns start and end date within 6 days from today
 * @returns {object} dateRange
 * @returns {string} dateRange.start
 * @returns {string} dateRange.end
 */
function dateRangeGenerator() {
  return {
    start: formatDate(new Date(Date.now() - 8.64e7 * 6)),
    end: formatDate(Date.now()),
  };
}

module.exports = dateRangeGenerator;
