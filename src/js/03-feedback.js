import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateIput();
feedbackForm.addEventListener('input', throttle(onSaveStorage, 500));

function onSaveStorage() {
  const feedbackFormValue = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedbackFormValue));
}

function inStorage() {
  return (storageValue =
    JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? {});
}

feedbackForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  inStorage();

  if (!storageValue.email || !storageValue.message) {
    alert('Please fill in all the fields!');
  } else {
    console.log(storageValue);

    localStorage.removeItem(LOCALSTORAGE_KEY);
    feedbackForm.reset();
  }
}

function updateIput() {
  inStorage();

  const emailValue = storageValue.email || '';
  email.value = emailValue;

  const messageValue = storageValue.message || '';
  message.value = messageValue;
}

//! Варіант 2 - "storageValue is not defined"
// import throttle from 'lodash.throttle';
// import { save, load, remove } from '../helpers/on-storage';

// const feedbackForm = document.querySelector('.feedback-form');
// const email = document.querySelector('.feedback-form input');
// const message = document.querySelector('.feedback-form textarea');
// const LOCALSTORAGE_KEY = 'feedback-form-state';
// const storageValue = load(LOCALSTORAGE_KEY);

// updateIput();
// feedbackForm.addEventListener('input', throttle(onSaveStorage, 500));

// function onSaveStorage() {
//   const feedbackFormValue = {
//     email: email.value,
//     message: message.value,
//   };

//   save(LOCALSTORAGE_KEY, feedbackFormValue);
// }

// feedbackForm.addEventListener('submit', onSubmit);

// function onSubmit(evt) {
//   evt.preventDefault();

//   if (!storageValue.email || !storageValue.message) {
//     alert('Please fill in all the fields!');
//   } else {
//     console.log(storageValue);

//     remove(LOCALSTORAGE_KEY);
//     feedbackForm.reset();
//   }
// }

// function updateIput() {
//   const emailValue = storageValue.email || '';
//   email.value = emailValue;

//   const messageValue = storageValue.message || '';
//   message.value = messageValue;
// }
