import createElement from "../modules/createElement";
import coordsToDMS from "../modules/coordsToDMS";

/**
 * It will be used to create a single trip card using innerHTML
 * @param {object} trip the trip object
 * @param {string} trip.name the name of the location
 * @param {string} trip.description basic info about the location
 * @param {string} trip.long the longitude
 * @param {string} trip.lat the latitude
 * @param {string} trip.region the administrative location
 * @param {string} trip.id unique id for that particular location for geoname
 * @returns a node string
 */
const createSearchTrip = ({ name, description, long, lat, region, id }) =>
  `<div class="search-card">
    <div class="card-top">
      <div class="location">
        <div>${name}</div>
        <div>${description}</div>
      </div>
      <div class="coords">
        <div>Long: ${coordsToDMS(long)}</div>
        <div>Lat: ${coordsToDMS(lat, false)}</div>
      </div>
    </div>
    <div class="card-main">${region}</div>
    <div class="card-bottom">
      <a href="/location?id=${id}">Select Location</a>
    </div>
  </div>`;

export default function createSearchTrips(search) {
  const searchTerm = location.search.replace("?q=", "");
  const searchTrip = `<h1>${searchTerm}</h1>
  <div class="subtitle">Top 10 results</div>
  <div class="trip-wrapper">${search
    .map((item) => createSearchTrip(item))
    .join("")}</div>`;
  createElement("search-trip", searchTrip, () => {
    localStorage.setItem("search", JSON.stringify(search));
  });
}
