class FormValidation {
    constructor(config, formElement) {
        this._formElement = formElement;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonSelector = config.inactiveButtonSelector;
        this._inputErrorClass = config.ErrorClass;
        this._errorClass = config.errorClass;
    }

    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);

    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";
    }

    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _validInput(inputs) {
        return inputs.some((input) => {
            return !input.validity.valid;
        });
    };

    _toggleButton = (inputs, button, _inactiveButtonSelector) => {
        if (this._validInput(inputs)) {
            button.classList.add(_inactiveButtonSelector);
            button.setAttribute("disabled", "");
        } else {
            button.classList.remove(_inactiveButtonSelector);
            button.removeAttribute("disabled");
        }

    }

    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButton(inputList, buttonElement, this._inactiveButtonSelector);
            });
        });
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    }
}

export default FormValidation;