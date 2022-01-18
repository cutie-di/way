import {
  onNavToggleClick,
  onNavLinkClick
} from './burger-menu.js';

import {
  changeSlide
} from './slider.js';

import {
  smoothAnchorScroll
} from './anchor-scroll.js';

import {
  openPopup,
  trapFocusOnModal
} from './modal.js';

import {
  phoneInputListeners,
  formSubmit
} from './form-validation.js';


const pageBody = document.querySelector('.page-body');
pageBody.classList.remove('nojs');

onNavToggleClick();
onNavLinkClick();
changeSlide();
smoothAnchorScroll();
openPopup();
trapFocusOnModal();
phoneInputListeners();
formSubmit();
