import "../styles/location.scss";
import fetchData from "./modules/fetchData";
import createElement from "./modules/createElement";
import postData from "./modules/postData";

function validateForm(start, end) {
  return new Date(end) > new Date(start);
}

document.querySelectorAll("button").forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();
  })
);

document.querySelector("button.error").addEventListener("click", () => {
  history.back();
});

window.addEventListener("DOMContentLoaded", () => {
  fetchData(`/get-location${location.search}`).then((data) => {
    const {
      name,
      adminName1,
      lat,
      lng,
      countryName,
      wikipediaURL,
      fcodeName,
      geonameId,
    } = data;
    document.querySelector("h1").textContent = name;
    document.querySelector(
      ".subtitle"
    ).textContent = `${adminName1}, ${countryName}`;
    createElement(
      "info",
      `<a href=${wikipediaURL} target="_blank" rel="noopener">info</a>`
    );
    document.querySelector(".bookmark").addEventListener("click", () => {
      postData("/save-location", {
        name,
        lat,
        description: fcodeName,
        long: lng,
        region: `${adminName1}, ${countryName}`,
        id: geonameId,
      })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    });

    document.querySelector("button.primary").addEventListener("click", () => {
      const start = document.querySelector("#from").value;
      const end = document.querySelector("#to").value;
      const tag = document.querySelector("#tag").value;
      if (validateForm(start, end)) {
        postData("/save-trip", {
          start,
          end,
          tag,
          lat,
          city: name,
          id: geonameId,
          long: lng,
        }).then(() => location.assign(`/confirm`));
      } else {
        // send error update
      }
    });
  });
});
