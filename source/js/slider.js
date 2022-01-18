const countrySlides = document.querySelectorAll('.countries__slider-item');
const countryButtons = document.querySelectorAll('.slider-toggles__button');
const placesButtons = document.querySelectorAll('.places__card-details');

let currentSlide = 0;
let countrySlide;
let countryButton;

const activateCountrySlide = (change) => {
  for (countrySlide of countrySlides) {
    countrySlide.classList.remove('countries__slider-item--active');
  }
  countrySlides[change].classList.add('countries__slider-item--active');
};

const activateCountryName = (change) => {
  for (countryButton of countryButtons) {
    countryButton.classList.remove('slider-toggles__button--active');
  }
  countryButtons[change].classList.add('slider-toggles__button--active');
};

const prepareCurrentCountrySlide = (ind) => {
  activateCountrySlide(ind);
  activateCountryName(ind);
};

const changeSlide = () => {
  countryButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentSlide = index;
      prepareCurrentCountrySlide(currentSlide);
    });
  });

  placesButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      currentSlide = index;
      prepareCurrentCountrySlide(currentSlide);
    });
  });
};

export {
  changeSlide
};
