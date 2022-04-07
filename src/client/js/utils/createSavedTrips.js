import createElement from "../modules/createElement";
import coordsToDMS from "../modules/coordsToDMS";

function createSavedTrip({ name, description, long, lat, region, id }) {
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

export default function createSavedTrips(saved) {
  const savedTrip = `<h2>Saved trip</h2><div class="trip-wrapper">${saved
    .map((item) => createSavedTrip(item))
    .join("")}</div>`;
  createElement("saved-trip", savedTrip, () => {
    localStorage.setItem("saved", JSON.stringify(saved));
  });
}
