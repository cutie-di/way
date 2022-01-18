const FIRST_SYMBOL ='+7';

const createPhoneMask = (evt) => {
  let ind = 0;
  const matrix = '+7 (___) ___-__-__';
  const defaultPrefix = matrix.replace(/\D/g, '');
  let currentValue = evt.target.value.replace(/\D/g, '');

  if (defaultPrefix.length >= currentValue.length) {
    currentValue = defaultPrefix;
  }

  evt.target.value = matrix.replace(/./g, (symbol) => {
    if (/[_\d]/.test(symbol) && ind < currentValue.length) {
      return currentValue.charAt(ind++);
    } else {
      if (ind >= currentValue.length) {
        return '';
      } else {
        return symbol;
      }
    }
  });
};

const checkPhoneFocus = (field) => {
  field.addEventListener('focus', (evt) => {
    if (field.value.length === 0) {
      evt.target.value = FIRST_SYMBOL;
    }
  });
  field.addEventListener('blur', (evt) => {
    if (field.value === FIRST_SYMBOL) {
      evt.target.value = '';
    }
  });
};

//const getInputNumbersValue = (input) => input.value.replace(/\D/g, '');
//const createPhoneMask = (evt) => {
//  const input = evt.target;
//  const inputNumbersValue = getInputNumbersValue(input);
//  let formattedInputValue = FIRST_SYMBOL;
//  if (!inputNumbersValue) {
//    input.value = '';
//  }

//  const selectionStart = input.selectionStart;

//  if (input.value.length !== selectionStart) {
//    if (evt.data && /\D/g.test(evt.data)) {
//      input.value = inputNumbersValue;
//    }
//    return;
//  }

//  if (inputNumbersValue.length > 1) {
//    formattedInputValue +=  `(${inputNumbersValue.substring(1, 4)}`;
//  }

//  if (inputNumbersValue.length >= 5) {
//    formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
//  }

//  if (inputNumbersValue.length >= 8) {
//    formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
//  }

//  if (inputNumbersValue.length >= 10) {
//    formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
//  }

//  input.value = formattedInputValue;
//};

export {
  createPhoneMask,
  checkPhoneFocus
};
