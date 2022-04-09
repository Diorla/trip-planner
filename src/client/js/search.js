import "../styles/search.scss";
import fetchData from "./modules/fetchData";
import toast from "./modules/toast";
import createNotFound from "./utils/createNotFound";
import createSearchTrips from "./utils/createSearchTrips";

window.addEventListener("DOMContentLoaded", () => {
  fetchData(`/city-search${location.search}`)
    .then((data) => {
      const { geonames = [] } = data;
      if (geonames.length)
        createSearchTrips(
          geonames.map((item) => {
            const {
              name,
              adminName1,
              countryName,
              fcodeName,
              lng,
              lat,
              geonameId,
            } = item;
            return {
              name,
              description: fcodeName,
              lat,
              long: lng,
              region: `${adminName1}, ${countryName}`,
              id: geonameId,
            };
          })
        );
      else {
        fetchData(`/image${location.search}`).then((data) => {
          const { hits } = data;
          createNotFound(hits);
        });
      }
    })
    .catch((err) => toast(err.message));
});
