const contactForm = document.querySelector("#contact-form");
const firstName = document.querySelector("#name");
const firstNameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const addMessage = document.querySelector("#addMessage");
const addMessageError = document.querySelector("#addMessageError");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(addMessage.value, 0) === true) {
    addMessageError.style.display = "none";
  } else {
    addMessageError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(firstName.value, 0) && checkLength(addMessage.value, 0) && validateEmail(email.value)) {
    contactForm.submit();
  }
}

contactForm.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
