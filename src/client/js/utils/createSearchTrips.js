import createElement from "../modules/createElement";
import coordsToDMS from "../modules/coordsToDMS";

function createSearchTrip({ name, description, long, lat, region, id }) {
  return `<div class="search-card">
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
}

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
