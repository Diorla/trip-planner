import createElement from "../modules/createElement";

/**
 * It will be used to create a single trip card using innerHTML
 * @param {object} trip the trip object
 * @param {string} trip.tag the label
 * @param {string} trip.city the location
 * @param {string} trip.start the start date
 * @returns a node string
 */
const createCurrentTrip = ({ tag, city, start }) =>
  `<div class="trip-card">
    <div class="card-main">
      <div class="card-top">
        <span class="label">${tag}</span>
      </div>
      <div class="card-bottom">${city}</div>
    </div>
    <div class="card-info">
      <span>
        Started:
        <time datetime="${start}">${new Date(start).toDateString()}</time>
      </span>
    </div>
  </div>`;

/**
 * Renders the current trip
 * @param {object[]} current the list of trips
 */
export default function createCurrentTrips(current) {
  // Creates node string
  const currentTrip = `<h2>Current trip</h2><div class="trip-wrapper">${current
    .map((item) => createCurrentTrip(item))
    .join("")}</div>`;

  /**
   * Add it to webpage
   * Save it to local storage
   */
  createElement("current-trip", currentTrip, () => {
    localStorage.setItem("current", JSON.stringify(current));
  });
}
