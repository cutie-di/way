import {
  createPhoneMask,
  checkPhoneFocus
} from './phone-mask.js';

import {
  saveFormData,
  fillForm
} from './local-storage.js';

import {
  showSuccessMessage
} from './message.js';

const forms = document.querySelectorAll('[name=feedback-form]');
const phoneInputs = document.querySelectorAll('input[type="tel"]');
const phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;
const errorMessage = 'Пожалуйста, проверьте правильность введенных данных';

const addErrorOnInput = (field) => {
  const errorInputMessage = field.closest('.form-control').querySelector('p');

  field.style.border ='1px solid #fe7865';
  errorInputMessage.style.display = 'block';
};
const removeErrorFromInput = (field) => {
  const errorInputMessage = field.closest('.form-control').querySelector('p');

  field.style.border ='1px solid #2c2e3f';
  errorInputMessage.style.display = 'none';
};

const checkPhoneField = (regex, field) => {
  const inputValue = field.value.replace(/\D/g, '');

  if (!regex.test(inputValue)) {
    addErrorOnInput(field);
    field.setCustomValidity(errorMessage);
  } else {
    removeErrorFromInput(field);
    field.setCustomValidity('');
  }
  field.reportValidity();
};

const phoneInputListeners = () => {
  phoneInputs.forEach((inputTel) => {
    checkPhoneFocus(inputTel);
    inputTel.addEventListener('keypress', (evt) => {
      if (!/\d/.test(evt.key)) {
        evt.preventDefault();
      }
    });
    inputTel.addEventListener('input', createPhoneMask);
    inputTel.addEventListener('input', (evt) => {
      checkPhoneField(phoneRegex, evt.target);
    });
  });
};

const formSubmit = () => {
  forms.forEach((form) => {
    const phoneInput = form.querySelector('input[type="tel"]');
    const emailInput = form.querySelector('input[type="email"]');

    phoneInput.removeAttribute('pattern');

    fillForm(phoneInput, emailInput);

    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      saveFormData(phoneInput, emailInput);
      showSuccessMessage();
    });
  });
};

export {
  phoneInputListeners,
  formSubmit
};
