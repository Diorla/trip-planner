function formatDate(date) {
  const dt = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();
  return `${year}-${("00" + month).slice(-2)}-${("00" + dt).slice(-2)}`;
}

function dateRangeGenerator() {
  return {
    start: formatDate(new Date(Date.now() - 8.64e7 * 6)),
    end: formatDate(Date.now()),
  };
}

module.exports = dateRangeGenerator;
