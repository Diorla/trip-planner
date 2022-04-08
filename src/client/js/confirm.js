import "../styles/confirm.scss";
import createElement from "./modules/createElement";
import fetchData from "./modules/fetchData";

fetchData("/last-trip")
  .then((data) => {
    data.city &&
      createElement(
        "trip-confirm",
        `Trip to <span>${data.city}</span> confirmed`
      );
  })
  .catch((err) => console.log(err));
