import {
  isEscEvent,
  isEnterEvent
} from './utils.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
let popup = null;

const closeMessage = () => {
  popup.remove();
  document.removeEventListener('click', closeMessage);
};

const closeOnButton = (evt) => {
  popup.querySelector('button[type="button"]').addEventListener('click', () => {
    evt.preventDefault();
    closeMessage();
    document.removeEventListener('click', closeOnButton);
  });
};

const closeOnEnter =(evt) => {
  if (isEnterEvent(evt)) {
    closeMessage();
    document.removeEventListener('keydown', closeOnButton);
  }
};

const closeOnOverlay = (evt) => {
  evt.preventDefault();
  closeMessage();
  document.removeEventListener('click', closeOnOverlay);
};

const closeOnEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closeMessage();
    document.removeEventListener('keydown', closeOnEsc);
  }
};

const showMessage = (template) => {
  popup = template.cloneNode(true);
  const closeButton = popup.querySelector('button[type="button"]');

  document.addEventListener('click', closeOnButton);
  document.addEventListener('keydown', closeOnEnter);
  document.addEventListener('click', closeOnOverlay);
  document.addEventListener('keydown', closeOnEsc);
  document.body.append(popup);

  closeButton.focus();
};

const showSuccessMessage = () => showMessage(successTemplate);

export {
  showSuccessMessage
};
