import "../styles/upcoming.scss";
import fetchData from "./modules/fetchData";
import dateRange from "./modules/dateRange";
import createUpcomingTrips from "./utils/createUpcomingTrips";

window.addEventListener("DOMContentLoaded", () => {
  createUpcomingTrips(JSON.parse(localStorage.getItem("upcoming")) || []);
  const upcoming = [];
  fetchData("/trips")
    .then((trips) => {
      trips.forEach((elem) => {
        const type = dateRange(elem.start, elem.end);
        if (type !== "within" && type !== "before") upcoming.push(elem);
      });
      createUpcomingTrips(upcoming);
    })
    .catch((err) => {
      console.log(err);
    });
});
