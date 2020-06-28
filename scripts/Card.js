class Card {
    constructor(data, cardTemplateSelector) {
        this._name = data.name;
        this._link = data.link;
        this._cardTemplateSelector = cardTemplateSelector;
    }

    _getCardTemplate() {
        const cardElement = this._cardTemplateSelector.cloneNode(true);

        return cardElement;
    }

    _setEventListeners(_card) {


        const photoLikeButton = _card.querySelector(".photo-card__like-button");
        const photoDeleteButton = _card.querySelector(".photo-card__delete-button");
        const photoImage = _card.querySelector(".photo-card__image");

        photoLikeButton.addEventListener("click", () => {
            photoLikeButton.classList.toggle("photo-card__like-button_on");
        });

        photoDeleteButton.addEventListener("click", () => {
            _card.remove();
        });

        photoImage.addEventListener("click", () => {

            document.querySelector(".modal__title").textContent = this._name;
            document.querySelector(".modal__image").src = this._link;
            document.querySelector(".modal__image").setAttribute("alt", document.querySelector(".modal__title").textContent);
            document.querySelector(".modal_picture").classList.toggle("modal_opened");
        });

    }


    createCard() {
        this._card = this._getCardTemplate();
        this._setEventListeners(this._card);
        this._card.querySelector(".photo-card__image").style.backgroundImage = `url(${this._link})`;
        this._card.querySelector(".photo-card__title").textContent = this._name;

        return this._card;
    }
}

export default Card;