import {
  isEscEvent,
  isEnterEvent,
  trapFocus
} from './utils.js';

const modal = document.querySelector('.modal');
const closeButton = modal.querySelector('.modal__close');
const overlay = modal.querySelector('.overlay');
const orderButtons = document.querySelectorAll('.buy-button');

const closePopup = () => {
  modal.classList.remove('modal--show');
  overlay.classList.remove('overlay--show');
  document.body.classList.remove('page-no-scroll');
};

const closeOnButton = (evt) => {
  evt.preventDefault();
  closePopup();
  closeButton.removeEventListener('click', closeOnButton);
};

const closeOnEnter =(evt) => {
  if (isEnterEvent(evt)) {
    closePopup();
    closeButton.removeEventListener('keydown', closeOnButton);
  }
};

const closeOnOverlay = (evt) => {
  evt.preventDefault();
  closePopup();
  overlay.removeEventListener('click', closeOnOverlay);
};

const closeOnEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    closePopup();
    document.removeEventListener('keydown', closeOnEsc);
  }
};

const openPopup = () => {
  for (let ind = 0; ind < orderButtons.length; ind++) {
    orderButtons[ind].addEventListener('click', (evt) => {
      evt.preventDefault();
      modal.classList.add('modal--show');
      overlay.classList.add('overlay--show');
      document.body.classList.add('page-no-scroll');

      const firstInput = modal.querySelector('input');
      firstInput.focus();

      closeButton.addEventListener('click', closeOnButton);
      closeButton.addEventListener('keydown', closeOnEnter);
      overlay.addEventListener('click', closeOnOverlay);
      document.addEventListener('keydown', closeOnEsc);
    });
  }
};

const trapFocusOnModal = () => trapFocus(modal);

export {
  openPopup,
  trapFocusOnModal,
  closePopup,
  closeOnButton,
  closeOnEnter,
  closeOnOverlay,
  closeOnEsc
};
