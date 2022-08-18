import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');
const feedbackFormState = {};


function getItemLS() {
  if (localStorage.getItem("feedback-form-state")) {
    const feedbackFormStateParse = JSON.parse(localStorage.getItem("feedback-form-state"));
    emailEl.value = feedbackFormStateParse.email;
    messageEl.value = feedbackFormStateParse.message;
  }
}

feedBackForm.addEventListener('input', throttle(handleSetLS, 500));

function handleSetLS(evt) {
  const evtTargetName = evt.target.name;
  feedbackFormState[evt.target.name] = evt.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
}


feedBackForm.addEventListener('submit', handleClearLS);

function handleClearLS(evt) {
  evt.preventDefault();
  console.log(feedbackFormState);
  localStorage.clear();
  emailEl.value = ' ';
  messageEl.value = ' ';
}









