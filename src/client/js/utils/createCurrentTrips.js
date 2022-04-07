import createElement from "../modules/createElement";

function createCurrentTrip({ tag, city, start }) {
  return `<div class="trip-card">
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
}

export default function createCurrentTrips(current) {
  const currentTrip = `<h2>Current trip</h2><div class="trip-wrapper">${current
    .map((item) => createCurrentTrip(item))
    .join("")}</div>`;
  createElement("current-trip", currentTrip, () => {
    localStorage.setItem("current", JSON.stringify(current));
  });
}
