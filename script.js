const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".form");
const closeButton = document.querySelector(".form-field__close-button");
const name = document.querySelector(".form-field__name");
const aboutMe = document.querySelector(".form-field__about-me");
const profileName = document.querySelector(".profile__name");
const profileAboutMe = document.querySelector(".profile__about-me");
const saveButton = document.querySelector(".form-field__button");

function pop() {
  popup.classList.toggle("form_opened");
  name.value = profileName.textContent;
  aboutMe.value = profileAboutMe.textContent;
}

editButton.addEventListener("click", pop);
closeButton.addEventListener("click", pop);

function changeDetails(evt) {
  evt.preventDefault();

  profileName.setAttribute("value", name.value);
  profileAboutMe.setAttribute("value", aboutMe.value);

  profileName.textContent = name.value;
  profileAboutMe.textContent = aboutMe.value;
  popup.setAttribute("class", "form");
}

popup.addEventListener("submit", changeDetails);
