// @ts-check
import "../styles/index.scss";
import fetchData from "./modules/fetchData";
import dateRange from "./modules/dateRange";
import createCurrentTrips from "./utils/createCurrentTrips";
import createUpcomingTrips from "./utils/createUpcomingTrips";
import createPreviousTrips from "./utils/createPreviousTrips";
import createSavedTrips from "./utils/createSavedTrips";

document.querySelector("button").addEventListener("click", () => {
  location.assign("/explore");
});

window.addEventListener("DOMContentLoaded", () => {
  createCurrentTrips(JSON.parse(localStorage.getItem("current")) || []);
  createUpcomingTrips(JSON.parse(localStorage.getItem("upcoming")) || []);
  createPreviousTrips(JSON.parse(localStorage.getItem("previous")) || []);
  createSavedTrips(JSON.parse(localStorage.getItem("saved")) || []);
  const previous = [];
  const current = [];
  const upcoming = [];
  const saved = [];
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
      console.log(err);
    });

  fetchData("/saved")
    .then((trips) => {
      trips.forEach((elem) => {
        saved.push(elem);
      });
      createSavedTrips(saved);
    })
    .catch((err) => {
      console.log(err);
    });
});
