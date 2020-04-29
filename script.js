const editButton = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".form_edit");
const closeButton = document.querySelector(".form-field__close-button");
const name = document.querySelector(".form-field__name");
const aboutMe = document.querySelector(".form-field__about-me");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about-me");
const saveButton = document.querySelector(".form-field__button_save");
const addButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".form_add");
const createButton = document.querySelector(".form-field__button_create");
const templateCard = document.querySelector(".template-card").content.querySelector(".photo-card");


function pop() {
  popupEdit.classList.toggle("form_opened");
  name.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;
}

function open() {
  popupAdd.classList.toggle("form_opened");
}

editButton.addEventListener("click", pop);
closeButton.addEventListener("click", pop);
addButton.addEventListener("click", open);


function changeDetails(evt) {
  evt.preventDefault();

  profileName.setAttribute("value", name.value);
  profileAboutMe.setAttribute("value", aboutMe.value);

  profileName.textContent = name.value;
  profileAboutMe.textContent = aboutMe.value;
  popupEdit.setAttribute("class", "form");
}

popupEdit.addEventListener("submit", changeDetails);

function addCards(evt) {
  evt.preventDefault();

  const addCard = document.querySelector(".photos__list");
  const photoCard = templateCard.cloneNode(true);
  const photoLink = popupAdd.querySelector(".form-field__link");
  const photoPlace = popupAdd.querySelector(".form-field__place");
  const photoImage = photoCard.querySelector(".photo-card__image");
  const photoTitle = photoCard.querySelector(".photo-card__title");

  photoImage.setAttribute("value", photoLink.value);
  photoTitle.setAttribute("value", photoPlace.value);

  photoImage.style.backgroundImage = `url(${photoLink.value})`;
  photoTitle.textContent = photoPlace.value;

  addCard.prepend(photoCard);
  popupAdd.classList.toggle("form_opened");
}

createButton.addEventListener("click", addCards);



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

initialCards.forEach((card) => {
  const photoCard = templateCard.cloneNode(true);

  const photoImage = photoCard.querySelector(".photo-card__image");
  const photoTitle = photoCard.querySelector(".photo-card__title");
  const photoLikeButton = photoCard.querySelector(".photo-card__like-button");
  const photoDeleteButton = photoCard.querySelector(".photo-card__delete-button");

  photoImage.style.backgroundImage = `url(${card.link})`;
  photoTitle.textContent = card.name;

  photoImage.addEventListener("click", () => {
    // openPopUpImage
  });

  photoLikeButton.addEventListener("click", () => {
    photoLikeButton.classList.toggle("photo-card__like-button_on");

  });

  photoDeleteButton.addEventListener("click", () => {
    photoCard.remove();

  });

  const photoList = document.querySelector(".photos__list");
  photoList.prepend(photoCard);
});
