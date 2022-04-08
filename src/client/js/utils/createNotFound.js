import createElement from "../modules/createElement";

const createGallery = (list) => {
  const images = list
    .map(
      (item) =>
        `<figure><img src=${item.largeImageURL}/><figcaption>${item.tags}</figcaption></figure>`
    )
    .join("");
  const wrapper = `<div>
    <div class=center>Location not found</div>
    <div class=image-wrapper>${images}</div>
  </div>`;
  return wrapper;
};

export default function createNotFound(list) {
  createElement("search-trip", createGallery(list));
}
