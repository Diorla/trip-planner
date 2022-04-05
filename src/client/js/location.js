import "../styles/location.scss";

function validateForm() {
  return true;
}

document.querySelectorAll("button").forEach((item) =>
  item.addEventListener("click", (e) => {
    e.preventDefault();
  })
);

document.querySelector("button.error").addEventListener("click", () => {
  history.back();
});

document.querySelector("button.primary").addEventListener("click", () => {
  if (validateForm) {
    // send data to database and then
    location.assign(`/confirm`);
  } else {
    // send error update
  }
});
