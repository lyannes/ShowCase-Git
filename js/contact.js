const errorMessages = {
  email: "Please enter a valid email address.",
  telephone: "Please enter a valid telephone number in the format 06-12345678.",
  empty: "Please fill in."
};

let firstname = false;
let lastname = false;
let email = false;
let telephone = false;
let subject = false;
let message = false;

function validateEmail(input) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValid = input.value.match(emailPattern);
  if (!isValid) {
    input.classList.remove('valid'); // Verwijder 'valid' klasse
    input.classList.add('error'); // Voeg 'error' klasse toe
    showErrorMessage(!isValid, errorMessages.email);
    email = false;
  } else {
    input.classList.remove('error'); // Verwijder 'valid' klasse
    input.classList.add('valid'); // Voeg 'error' klasse toe
    let element = document.getElementById('errorMessage');
    element.classList.add('hidden')
    email = true;
  }
  validateInputs();
}

function validateTelephone(input) {
  const telephonePattern = /^06-\d{8}$/;
  const isValid = input.value.match(telephonePattern);
  if (!isValid) {
    input.classList.remove('valid');
    input.classList.add('error');
    showErrorMessage(!isValid, errorMessages.telephone);
     telephone = false;
  } else {
    input.classList.remove('error');
    input.classList.add('valid');
    let element = document.getElementById('errorMessage');
    element.classList.add('hidden')
    telephone = true;
  }
  validateInputs();
}

function validateFirstname(input){
  firstname = inputEmpty(input);
  validateInputs();
}

function validateLastname(input){
  lastname = inputEmpty(input);
  validateInputs();
}
function validateSubject(input){
  subject = inputEmpty(input);
  validateInputs();
}

function validateMessage(input){
  message = inputEmpty(input);
  validateInputs();
}

function inputEmpty(input) {
  const notValid = input.value.trim() === '';
  if (notValid) {
    input.classList.remove('valid');
    input.classList.add('error');
    showErrorMessage(notValid, errorMessages.empty);
    return false;
  } else {
    input.classList.remove('error'); // Verwijder 'valid' klasse
    input.classList.add('valid'); // Voeg 'error' klasse toe
    let element = document.getElementById('errorMessage');
    element.classList.add('hidden')
    return true;
  }
}

function validateInputs() {
  console.log(firstname, lastname, email, telephone, subject, message);

  if (firstname && lastname && email && telephone && subject && message){
    const sendButton = document.getElementById('sendButton');
    sendButton.disabled = false;
  }
}

function showErrorMessage(input, message){
  if (input){
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.classList.remove('hidden');
    errorMessage.classList.add('visible');
    errorMessage.textContent = message;
  }
}