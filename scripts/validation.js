const showInputError = (form, input, { errorClass, inputErrorClass }) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
    errorElement.textContent = input.validationMessage;
};

const hideInputError = (form, input, { errorClass, inputErrorClass }) => {
    const errorElement = form.querySelector(`#${input.id}-error`);
    input.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
};

const checkInputValidity = (form, input, rest) => {
    if (!input.validity.valid) {
        showInputError(form, input, rest);
    } else {
        hideInputError(form, input, rest);
    }
};


const validInput = (inputs) => {
    return inputs.some((input) => {
        return !input.validity.valid;
    });
};

const toggleButton = (inputs, button, form, { inactiveButtonClass }) => {
    if (validInput(inputs)) {
        button.classList.add(inactiveButtonClass);
        button.setAttribute("disabled", "");
    } else {
        button.classList.remove(inactiveButtonClass);
        button.removeAttribute("disabled");
    }
};

function enableValidation({ formSelector, inputSelector, submitButtonSelector, ...rest }) {
    const forms = Array.from(document.querySelectorAll(formSelector));

    forms.forEach((form) => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        const inputs = Array.from(form.querySelectorAll(inputSelector));
        const button = form.querySelector(submitButtonSelector);
        toggleButton(inputs, button, form, rest);

        inputs.forEach((input) => {
            input.addEventListener("input", () => {
                checkInputValidity(form, input, rest);
                toggleButton(inputs, button, form, rest);
            });
        });
    });
}

enableValidation({
    formSelector: ".modal-field",
    inputSelector: ".modal-field__input",
    submitButtonSelector: ".modal-field__button",
    inactiveButtonClass: "modal-field__button_disabled",
    inputErrorClass: "modal-field__input_type_error",
    errorClass: "modal-field__error_visible"
});

