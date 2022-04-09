import "../styles/index.scss";
import fetchData from "./modules/fetchData";
import dateRange from "./modules/dateRange";
import createCurrentTrips from "./utils/createCurrentTrips";
import createUpcomingTrips from "./utils/createUpcomingTrips";
import createPreviousTrips from "./utils/createPreviousTrips";
import createSavedTrips from "./utils/createSavedTrips";
import toast from "./modules/toast";

document.querySelector("button").addEventListener("click", () => {
  location.assign("/explore");
});

window.addEventListener("DOMContentLoaded", () => {
  // Use local storage to update UI before fetching data from server
  createCurrentTrips(JSON.parse(localStorage.getItem("current")) || []);
  createUpcomingTrips(JSON.parse(localStorage.getItem("upcoming")) || []);
  createPreviousTrips(JSON.parse(localStorage.getItem("previous")) || []);
  createSavedTrips(JSON.parse(localStorage.getItem("saved")) || []);

  const previous = [];
  const current = [];
  const upcoming = [];
  const saved = [];

  // Updates previous, upcoming and current trip
  fetchData("/trips")
    .then((trips) => {
      trips.forEach((elem) => {
        const type = dateRange(elem.start, elem.end);
        if (type === "within") current.push(elem);
        else if (type === "before") upcoming.push(elem);
        else previous.push(elem);
      });
      createCurrentTrips(current);
      createUpcomingTrips(upcoming);
      createPreviousTrips(previous);
    })
    .catch((err) => {
      toast(err.message);
    });

  // Updates saved trips
  fetchData("/saved-trips")
    .then((trips) => {
      trips.forEach((elem) => {
        saved.push(elem);
      });
      createSavedTrips(saved);
    })
    .catch((err) => {
      toast(err.message);
    });
});
