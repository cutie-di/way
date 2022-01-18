import {
  isEscEvent
} from './utils.js';

const navMain = document.querySelector('.main-nav');
const navLink = navMain.querySelectorAll('.main-nav__link');
const navToggle = navMain.querySelector('.main-nav__toggle');
const overlay = navMain.querySelector('.overlay');


const hideMenu = () => {
  navToggle.setAttribute('aria-label', 'Открыть меню');
  navMain.classList.add('main-nav--closed');
  navMain.classList.remove('main-nav--opened');
  overlay.classList.remove('overlay--show');
  document.body.classList.remove('page-no-scroll');
};

const onNavLinkClick = () => {
  for (let ind = 0; ind < navLink.length; ind++) {
    navLink[ind].addEventListener('click', () => {
      hideMenu();
    });
  }
};

const closeOnOverlay = () => {
  overlay.addEventListener('click', (evt) => {
    evt.preventDefault();
    hideMenu();
    document.removeEventListener('click', closeOnOverlay);
  });
};

const closeOnEsc = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideMenu();
    document.removeEventListener('keydown', closeOnEsc);
  }
};

const showMenu = () => {
  navToggle.setAttribute('aria-label', 'Закрыть меню');
  navMain.classList.remove('main-nav--closed');
  navMain.classList.add('main-nav--opened');
  overlay.classList.add('overlay--show');
  document.body.classList.add('page-no-scroll');

  document.addEventListener('click', closeOnOverlay);
  document.addEventListener('keydown', closeOnEsc);
};

const onNavToggleClick = () => {
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--closed')) {
      showMenu();
    } else {
      hideMenu();
    }
  });
};

export {
  onNavToggleClick,
  onNavLinkClick
};
