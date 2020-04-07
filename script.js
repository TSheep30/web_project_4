let editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".container__close-button");
const name = document.querySelector(".form-field__name");
const aboutMe = document.querySelector(".form-field__about-me");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about-me");
const saveButton = document.querySelector(".form-field__button");

function pop() {
  popup.classList.toggle("popup_opened");
  name.value = profileName.textContent;
  aboutMe.setAttribute("value", profileAboutMe.textContent);
}

editButton.addEventListener("click", pop);
closeButton.addEventListener("click", pop);

function changeDetails(evt) {
  evt.preventDefault();

  profileName.setAttribute("value", name.value);
  profileAboutMe.setAttribute("value", aboutMe.value);

  profileName.textContent = name.value;
  profileAboutMe.textContent = aboutMe.value;
  popup.setAttribute("class", "popup");
}

popup.addEventListener("submit", changeDetails);
