import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateOutput();
feedbackForm.addEventListener('input', throttle(onSaveStorage, 500));

function onSaveStorage() {
  const feedbackFormValue = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormValue));
}

feedbackForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const storageSubmitedValue =
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};

  console.log(storageSubmitedValue);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  feedbackForm.reset();
}

function updateOutput() {
  const storageSavedValue =
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {};

  emailValue = storageSavedValue.email || '';
  email.value = emailValue;

  messageValue = storageSavedValue.message || '';
  message.value = messageValue;
}
