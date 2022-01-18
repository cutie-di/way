let storagePhone = '';
let storageEmail = '';

const isStorage = () => {
  try {
    storagePhone = localStorage.getItem('userPhone');
    storageEmail = localStorage.getItem('userEmail');
    return true;
  } catch (err) {
    return false;
  }
};
const isStorageSupport = isStorage();

const saveFormData = (phone, email) => {
  if (isStorageSupport) {
    localStorage.setItem('userPhone', phone.value);
    localStorage.setItem('userEmail', email.value);
  }
};

const fillForm = (phone, email) => {
  isStorage();
  if (storagePhone) {
    phone.value = storagePhone;
  }
  if (storageEmail) {
    email.value = storageEmail;
  }
};

export {
  saveFormData,
  fillForm
};
