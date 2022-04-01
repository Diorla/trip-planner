import "../styles/explore.scss";

const searchIcon = document.querySelector("i.fa-solid.fa-magnifying-glass");

const searchInput = document.querySelector(".input-explore > input");

const searchButton = document.querySelector(".input-explore > button");

const inputWrapper = document.querySelector(".input-explore");

searchIcon.addEventListener("click", () => {
  searchInput.focus();
});

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    console.log(searchInput.value);
  }
});

searchButton.addEventListener("click", () => {
  console.log(searchInput.value);
});

searchInput.addEventListener("focus", () => {
  inputWrapper.classList.add("focus");
});

searchInput.addEventListener("blur", () => {
  inputWrapper.classList.remove("focus");
});
