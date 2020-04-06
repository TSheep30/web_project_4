let editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".container__close-button");
const name = document.querySelector(".form-field__name");
const aboutMe = document.querySelector(".form-field__about-me");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about-me");
const saveButton = document.querySelector(".form-field__button");

function pop() {
  popup.setAttribute("class", "popup_opened");
  name.setAttribute("value", profileName.textContent);
  aboutMe.setAttribute("value", profileAboutMe.textContent);
}

function unPop() {
  popup.removeAttribute("class", "popup_opened");
  popup.setAttribute("class", "popup");
}

editButton.addEventListener("click", pop);
closeButton.addEventListener("click", unPop);

function changeDetails(evt) {
  evt.preventDefault();

  const formName = document.querySelector(".form-field__name");
  const formAboutMe = document.querySelector(".form-field__about-me");

  profileName.setAttribute("value", formName.value);
  profileAboutMe.setAttribute("value", formAboutMe.value);

  profileName.textContent = formName.value;
  profileAboutMe.textContent = aboutMe.value;
  popup.setAttribute("class", "popup");
}

popup.addEventListener("submit", changeDetails);
