const errorMessages = {
  name: "Please enter your name.",
  email: "Please enter a valid email address.",
  telephone: "Please enter a valid telephone number in the format 06-12345678."
};

function validateName(input) {
    const notValid = input.value.trim() === '';
    input.classList.toggle('error', notValid);
    input.classList.toggle('valid', !notValid);
    showErrorMessage(notValid, errorMessages.name);
    return !notValid;
}

function validateEmail(input) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = input.value.match(emailPattern);
  input.classList.toggle('error', !isValid);
  input.classList.toggle('valid', isValid);
  showErrorMessage(!isValid, errorMessages.email);
  return isValid;
}

function validateTelephone(input) {
  const telephonePattern = /^06-\d{8}$/;
  const isValid = input.value.match(telephonePattern);
  input.classList.toggle('error', !isValid);
  input.classList.toggle('valid', isValid);
  showErrorMessage(!isValid, errorMessages.telephone);
  return isValid;
}

function showErrorMessage(input, message){
  if (input){
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.classList.add('visible');
    errorMessage.textContent = message;
  }
}

function validateInputs() {
  const firstnameInput = document.getElementById('firstnameInput');
  const lastnameInput = document.getElementById('lastnameInput');

  const firstnameValid = validateName(firstnameInput);
  const lastnameValid = validateName(lastnameInput);
  const emailIsValid = validateEmail();
  const telephoneIsValid = validateTelephone();
  
  const sendButton = document.getElementById('sendButton');
  sendButton.disable = !(firstnameValid && lastnameValid && emailIsValid && telephoneIsValid);
}