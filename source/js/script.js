// script.js
// Переменные
let button = document.querySelector(".header__button--two");
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".modal__close");


modal.classList.add("modal--hidden");

// Функция, которая при нажатии на кнопку "Профиль" открывает модальное окно
button.addEventListener("click", function () {
  if (modal.classList.contains("modal--hidden")) {
    modal.classList.remove("modal--hidden");
    modal.classList.add("modal--open");
  } else {
    modal.classList.add("modal--hidden");
    modal.classList.remove("modal--open");
  }
});

// Функция, которая при нажатии на "Крестик", закрывает модальное окно
closeButton.addEventListener("click", function () {
  if (modal.classList.contains("modal--open")) {
    modal.classList.remove("modal--open");
    modal.classList.add("modal--hidden");
  }
});


