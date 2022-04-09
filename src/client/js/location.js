import "../styles/location.scss";
import fetchData from "./modules/fetchData";
import createElement from "./modules/createElement";
import postData from "./modules/postData";
import toast from "./modules/toast";

// Ensures that final date is after the starting date
function validateForm(start, end) {
  return new Date(end) > new Date(start);
}

// Prevents submission of form
document.querySelectorAll("button").forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();
  })
);

document.querySelector("button.error").addEventListener("click", () => {
  history.back();
});

window.addEventListener("DOMContentLoaded", () => {
  // Fetch info about a particular location and update webpage
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
      `<a href=https://${wikipediaURL} target="_blank" rel="noopener">info</a>`
    );

    // Save the location for later on the server
    document.querySelector(".bookmark").addEventListener("click", () => {
      postData("/save-location", {
        name,
        lat,
        description: fcodeName,
        long: lng,
        region: `${adminName1}, ${countryName}`,
        id: geonameId,
      })
        .then(() => toast(`${name} bookmarked`, true))
        .catch((err) => toast(err.message));
    });

    // Submit the form
    document.querySelector("button.primary").addEventListener("click", () => {
      const start = document.querySelector("#from").value;
      const end = document.querySelector("#to").value;
      const tag = document.querySelector("#tag").value;

      // first, validate the form before submitting the form
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
        toast("error saving data");
      }
    });

    // Fetch weather information about the specific location
    fetchData(`/weather?long=${lng}&&lat=${lat}`).then((weatherData) => {
      const tbody = document.querySelector("tbody");
      const generateRow = (data) => `<tr>
            <td>${data.datetime}</td>
            <td><i class="fa-solid fa-droplet"></i>${data.rh}%</td>
            <td>${data.max_temp}/${data.min_temp}</td>
            <td>${data.pres}</td>
            <td>${data.wind_spd}</td>
          </tr>`;
      tbody.innerHTML = weatherData.data.map(generateRow).join("");
    });
  });
});
