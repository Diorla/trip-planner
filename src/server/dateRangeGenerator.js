// new Date(Date.now() - (1000*60*60*24*10))

function formatDate(date) {
  const dt = new Date(date).getDate();
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();
  return `${year}-${("00" + month).slice(-2)}-${("00" + dt).slice(-2)}`;
}

function dateRangeGenerator() {
  return {
    start: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 24 * 6)),
    end: formatDate(Date.now()),
  };
}

module.exports = dateRangeGenerator;
