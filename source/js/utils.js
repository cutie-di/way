const scrollToElement = (element) => {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const isEscEvent = (evt) => evt.keyCode === 27 || evt.key === 'Escape' || evt.key === 'Esc';

const isEnterEvent = (evt) => evt.keyCode === 13 || evt.key === 'Enter';

const isTabPressed = (evt) => evt.keyCode === 9 || evt.key === 'Tab';

const trapFocus = (element) => {

  const focusableEls = element.querySelectorAll('input,button,textarea');
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];

  element.addEventListener('keydown', (evt) => {
    if (!isTabPressed) {
      return;
    }

    if (evt.shiftKey && evt.key === 'Tab') {

      if (document.activeElement === firstFocusableEl) {
        lastFocusableEl.focus();
        evt.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        evt.preventDefault();
      }
    }
  });
};

export {
  scrollToElement,
  isEscEvent,
  isEnterEvent,
  isTabPressed,
  trapFocus
};
