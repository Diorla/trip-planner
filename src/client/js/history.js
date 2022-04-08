import "../styles/history.scss";
import fetchData from "./modules/fetchData";
import dateRange from "./modules/dateRange";
import createPreviousTrips from "./utils/createPreviousTrips";

window.addEventListener("DOMContentLoaded", () => {
  createPreviousTrips(JSON.parse(localStorage.getItem("previous")) || []);
  const previous = [];
  fetchData("/trips")
    .then((trips) => {
      trips.forEach((elem) => {
        const type = dateRange(elem.start, elem.end);
        if (type !== "within" && type !== "before") previous.push(elem);
      });
      createPreviousTrips(previous);
    })
    .catch((err) => {
      console.log(err);
    });
});
