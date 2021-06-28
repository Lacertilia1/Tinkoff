// script.js

// Переменные
let button = document.querySelector(".header__button--two");
let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".modal__close");
let question = document.querySelector(".input--question");
let submitButton = document.querySelector(".button--submit");
let email = document.querySelector(".modal__input");


modal.classList.add("modal--hidden");

// Проверка наличия localStorage в браузере.

let isStorageSupport = true;
let storageName = localStorage.getItem("name");
let storageEmail = localStorage.getItem("email");

try {
  storage = localStorage.getItem("name");
  storage = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

if (storage) {
  question = storageEmail;
}

// Функция, которая при нажатии на кнопку "Профиль" открывает модальное окно.
button.addEventListener("click", function () {
  if (modal.classList.contains("modal--hidden")) {
    modal.classList.remove("modal--hidden");
    modal.classList.add("modal--open");
  } else {
    modal.classList.add("modal--hidden");
    modal.classList.remove("modal--open");
  }

  // Код ниже сохраняет данные в storage.
  // Если ввести email или номер телефона, то в следующий раз эти данные введутся автоматически.
  // Если email или номера телефона нет, то будет фокус на input.
  if (storage) {
    email = storageEmail;
  } else {
    email.focus();
  }
});

// Функция, которая при нажатии на "Крестик", закрывает модальное окно.
closeButton.addEventListener("click", function () {
  if (modal.classList.contains("modal--open")) {
    modal.classList.remove("modal--open");
    modal.classList.add("modal--hidden");
  }
});



