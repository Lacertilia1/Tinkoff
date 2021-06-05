// script.js

let button = document.querySelector(".registration__button");
let form = document.querySelector(".registration__form");

form.classList.add("registration__form--hidden");

button.addEventListener("click", function () {
  if (form.classList.contains("registration__form--hidden")) {
    form.classList.remove("registration__form--hidden");
  } else {
    form.classList.add("registration__form--hidden");
  }
});
