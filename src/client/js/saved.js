import "../styles/saved.scss";
import fetchData from "./modules/fetchData";
import createSavedTrips from "./utils/createSavedTrips";

window.addEventListener("DOMContentLoaded", () => {
  createSavedTrips(JSON.parse(localStorage.getItem("saved")) || []);
  const saved = [];
  fetchData("/saved-trips")
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
