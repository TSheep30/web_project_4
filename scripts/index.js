import FormValidation from "./FormValidation.js";
import Card from "./Card.js";

const defaultConfig = {
  inputSelector: ".modal-field__input",
  submitButtonSelector: ".modal-field__button",
  inactiveButtonSelector: "modal-field__button_disabled",
  inputErrorClass: "modal-field__input_type_error",
  errorClass: "modal-field__error_visible"
}

const popupAdd = document.querySelector(".modal_add");
const popupEdit = document.querySelector(".modal_edit");

const popupAddValidator = new FormValidation(defaultConfig, popupAdd);
const popupEditValidator = new FormValidation(defaultConfig, popupEdit);

popupAddValidator.enableValidation();
popupEditValidator.enableValidation();

//global variable declarations
const cardTemplateSelector = document.querySelectorAll(".template-card");
const editButton = document.querySelector(".profile__edit-button");
const editCloseButton = document.querySelector(".modal-field__button_close-edit");
const name = document.querySelector(".modal-field__name");
const aboutMe = document.querySelector(".modal-field__about-me");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about-me");
const addButton = document.querySelector(".profile__add-button");
const addCloseButton = document.querySelector(".modal-field__button_close-add");
const templateCard = document.querySelector(".template-card").content.querySelector(".photo-card");
const popupPicture = document.querySelector(".modal_picture");
const pictureCloseButton = document.querySelector(".modal-field__button_close-picture");
const photoList = document.querySelector(".photos__list");
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanois National Park",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

//function declarations
function togglePopup(modal) {
  modal.classList.toggle("modal_opened");
  name.setAttribute("value", profileName.textContent);
  aboutMe.setAttribute("value", profileAboutMe.textContent);
}

function changeDetails(evt) {
  evt.preventDefault();

  profileName.textContent = name.value;
  profileAboutMe.textContent = aboutMe.value;
  togglePopup(popupEdit);
}

const renderCard = (data, cardTemplateSelector) => {
  const card = new Card(data, cardTemplateSelector);

  photoList.prepend(card.createCard());
}

//create new cards
function newCard(evt) {
  evt.preventDefault();
  const photoLink = popupAdd.querySelector(".modal-field__link");
  const photoPlace = popupAdd.querySelector(".modal-field__place");
  renderCard({ name: photoPlace.value, link: photoLink.value }, templateCard);
  togglePopup(popupAdd);
}

// Event Listeners
editButton.addEventListener("click", () => {
  togglePopup(popupEdit);
});
editCloseButton.addEventListener("click", () => {
  togglePopup(popupEdit);
});
addButton.addEventListener("click", () => {
  togglePopup(popupAdd);
});
addCloseButton.addEventListener("click", () => {
  togglePopup(popupAdd);
});
popupEdit.addEventListener("submit", changeDetails);
popupAdd.addEventListener("submit", newCard);

window.addEventListener('keyup', (evt) => {
  if (evt.key === 'Escape') {
    togglePopup(popupPicture);
  }
});

popupPicture.addEventListener('click', () => {
  togglePopup(popupPicture);
});

pictureCloseButton.addEventListener("click", () => {
  togglePopup(pictureCloseButton);
});

//render initial 6 cards
initialCards.forEach((card) => {
  renderCard(card, templateCard);
});


