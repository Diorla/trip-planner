import createElement from "../modules/createElement";

/**
 * It will be used to create figure from list of images
 * @param {object} list the list of images from pixabay
 * @param {string} list.largeImageURL path to image
 * @param {string} list.tags labels for the image
 * @returns string;
 */
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
