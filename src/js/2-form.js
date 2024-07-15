let formData = { email: '', message: '' };
const storageKey = 'feedback-form-state';

const feedbackForm = document.querySelector('.feedback-form');

function saveFormDataToStorage() {
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function loadFormDataFromStorage() {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    formData = JSON.parse(savedData);
    updateFormFields();
  }
}

function updateFormFields() {
  feedbackForm.elements.email.value = formData.email;
  feedbackForm.elements.message.value = formData.message;
}

feedbackForm.addEventListener('input', event => {
  const { name, value } = event.target;
  if (name in formData) {
    formData[name] = value.trim();
    saveFormDataToStorage();
  }
});

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(storageKey);
  formData = { email: '', message: '' };
  updateFormFields();
});

loadFormDataFromStorage();
