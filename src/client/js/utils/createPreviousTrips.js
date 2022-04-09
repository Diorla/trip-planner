import createElement from "../modules/createElement";

/**
 * It will be used to create a single trip card using innerHTML
 * @param {object} trip the trip object
 * @param {string} trip.tag the label
 * @param {string} trip.city the location
 * @param {string} trip.start the start date
 * @param {string} trip.end the end date
 * @returns a node string
 */
const createPreviousTrip = ({ tag, city, start, end }) =>
  `<div class="trip-card">
    <div class="card-main">
      <div class="card-top">
        <span class="label">${tag}</span>
      </div>
      <div class="card-bottom">${city}</div>
    </div>
    <div class="card-info">
      <time datetime="${start}">${new Date(start).toDateString()}</time>
      <span>to</span>
      <time datetime="${end}">${new Date(end).toDateString()}</time>
    </div>
  </div>`;

export default function createPreviousTrips(previous) {
  const previousTrip = `<h2>Previous trip</h2><div class="trip-wrapper">${previous
    .map((item) => createPreviousTrip(item))
    .join("")}</div>`;
  createElement("previous-trip", previousTrip, () => {
    localStorage.setItem("previous", JSON.stringify(previous));
  });
}
