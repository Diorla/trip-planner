import createElement from "../modules/createElement";

function createSavedTrip({ name, description, long, lat, region }) {
  return `<div class="search-card">
    <div class="card-top">
      <div class="location">
        <div>${name}</div>
        <div>${description}</div>
      </div>
      <div class="coords">
        <div>Long: ${long}</div>
        <div>Lat: ${lat}</div>
      </div>
    </div>
    <div class="card-main">${region}</div>
    <div class="card-bottom">
      <a href="/location?name=${name}">Select Location</a>
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
