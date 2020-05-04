const editButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".modal_edit");
const editCloseButton = document.querySelector(".modal-field__close-button_edit");
const name = document.querySelector(".modal-field__name");
const aboutMe = document.querySelector(".modal-field__about-me");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about-me");
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".modal_add");
const addCloseButton = document.querySelector(".modal-field__close-button_add");
const createButton = document.querySelector(".modal-field__button_create");
const templateCard = document.querySelector(".template-card").content.querySelector(".photo-card");
const popupPicture = document.querySelector(".modal_picture");
const bigPicture = document.querySelector(".modal__image");
const pictureCloseButton = document.querySelector(".modal-field__close-button_picture");
const bigPictureTitle = document.querySelector(".modal__title");
const addCard = document.querySelector(".photos__list");

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


function open(modal) {
  modal.classList.toggle("modal_opened");
}

function changeDetails(evt) {
  evt.preventDefault();

  profileName.setAttribute("value", name.value);
  profileAboutMe.setAttribute("value", aboutMe.value);

  profileName.textContent = name.value;
  profileAboutMe.textContent = aboutMe.value;
  popupEdit.setAttribute("class", "modal");

}

// Event Listeners
editButton.addEventListener("click", () => {
  open(popupEdit);
});
editCloseButton.addEventListener("click", () => {
  open(popupEdit);
});
addButton.addEventListener("click", () => {
  open(popupAdd);
});
addCloseButton.addEventListener("click", () => {
  open(popupAdd);
});
pictureCloseButton.addEventListener("click", () => {
  open(popupPicture);
});
popupEdit.addEventListener("submit", changeDetails);

function createCard(card) {
  const photoCard = templateCard.cloneNode(true);
  const photoImage = photoCard.querySelector(".photo-card__image");
  const photoTitle = photoCard.querySelector(".photo-card__title");
  const photoLikeButton = photoCard.querySelector(".photo-card__like-button");
  const photoDeleteButton = photoCard.querySelector(".photo-card__delete-button");


  addCard.prepend(photoCard);
  popupAdd.classList.toggle("modal_opened");

  photoImage.style.backgroundImage = `url(${card.link})`;
  photoTitle.textContent = card.name;
  bigPicture.setAttribute("alt", card.name);

  photoImage.addEventListener("click", () => {

    popupPicture.classList.toggle("modal_opened");
    bigPictureTitle.textContent = photoTitle.textContent;
    bigPicture.src = card.link;
  });

  photoLikeButton.addEventListener("click", () => {
    photoLikeButton.classList.toggle("photo-card__like-button_on");
  });

  photoDeleteButton.addEventListener("click", () => {
    photoCard.remove();
  });

  return photoCard;
};

function renderCard(card) {
  const photoList = document.querySelector(".photos__list");
  photoList.prepend(createCard(card));
}

//render initial 6 cards
initialCards.forEach((card) => {
  renderCard(card);
});

//create new cards
function newCard(evt) {
  evt.preventDefault();
  const photoLink = popupAdd.querySelector(".modal-field__link");
  const photoPlace = popupAdd.querySelector(".modal-field__place");
  renderCard({ name: photoPlace.value, link: photoLink.value });
  open();
};

createButton.addEventListener('click', newCard);