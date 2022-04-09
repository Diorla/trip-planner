import createElement from "../modules/createElement";

/**
 * It will be used to create a single trip card using innerHTML
 * @param {object} trip the trip object
 * @param {string} trip.tag the label
 * @param {string} trip.city the location
 * @param {string} trip.start the start date
 * @returns a node string
 */
const createUpcomingTrip = ({ tag, city, start }) =>
  `<div class="trip-card">
    <div class="card-main">
      <div class="card-top">
        <span class="label">${tag}</span>
      </div>
      <div class="card-bottom">${city}</div>
    </div>
    <div class="card-info">
      <span>
        On:
        <time datetime="${start}">${new Date(start).toDateString()}</time>
      </span>
    </div>
  </div>`;

export default function createUpcomingTrips(upcoming) {
  const upcomingTrip = `<h2>Upcoming trip</h2><div class="trip-wrapper">${upcoming
    .map((item) => createUpcomingTrip(item))
    .join("")}</div>`;
  createElement("upcoming-trip", upcomingTrip, () => {
    localStorage.setItem("upcoming", JSON.stringify(upcoming));
  });
}
